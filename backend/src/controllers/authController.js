const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const db = require('../database/conn');
const { ObjectId } = require('mongodb');
require('dotenv').config();

const controller = {};

const SECRET_KEY = process.env.JWT_SECRET

function createToken(email, password, role){

    const payload = {
        email: email,
        password: password,
    };
    const options = { expiresIn: '30d' };

    return jwt.sign(payload, SECRET_KEY, options)
}

function verifyToken(token){
    const decode = jwt.verify(token, SECRET_KEY, (err, decode) => {
        if(err) return err
        return decode
    })
    return decode;
}

controller.register = async (req, res) => {
    const data = req.body.data;
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;
    data.createDate = new Date();
    data.active = true;
    console.log(`-- 🔄️ Registering new user ${data.email}... --`);
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const user = await connection.collection('users').findOne({email: data.email});
        if (user){
            console.log(`-- ❌ \u001b[31mUser ${data.email} already exists\u001b[37m --`);
            res.status(500).json({status: 500, message: 'User already exists'})
            return
        } else {
            const update = await connection.collection('users').insertOne(data);
            if (update.acknowledged){
                console.log(`-- ✅ \u001b[32mUser ${data.email} registered\u001b[37m --`);
                res.status(200).json({status: 200, message: 'User registered'})
            } else {
                console.log(`-- ❌ \u001b[31mError registering user ${data.email}\u001b[37m --`);
                res.status(500).json({status: 500, message: 'Error registering user'})
            }
        }
    })
    .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.login = (req, res) => {
    const data = req.body;
    console.log(`-- 🔄️ Searching for user ${data.email} ... --`);
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const user = await connection.collection('users').findOne({email: data.email});
        if (user){
            if (bcrypt.compareSync(data.password, user.password)){
                console.log(`-- ✅ \u001b[32mUser ${data.email} exists on Data Base\u001b[37m --`);
                const access_token = createToken(data.email, data.password, user.role)
                const logSession = await connection.collection('logs').insertOne({userId: user._id, userEmail: user.email, date: new Date(), login: true});
                if (logSession.acknowledged){
                    console.log(`-- ✅ \u001b[32mLog session created\u001b[37m --`);
                } else {
                    console.log(`-- ❌ \u001b[31mError creating log session\u001b[37m --`);
                }
                res.status(200).json({...user, access_token})
            } else {
                console.log(`-- ❌ \u001b[31mWrong password\u001b[37m --`);
                res.status(401).json({status: 401, message: 'Wrong email or password'});
            }
        } else {
            console.log(`-- ❌ \u001b[31mCould not found user\u001b[37m --`);
            res.status(401).json({status: 401, message: 'User not found'});
        }
    }).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.logout = (req, res) => {
    const data = req.body.data
    console.log(`-- 🔄️ Logging out user ${data.email} ... --`);
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const logSession = await connection.collection('logs').insertOne({userId: new ObjectId(data.id), userEmail: data.email, date: new Date(), login: false});
        if (logSession.acknowledged){
            console.log(`-- ✅ \u001b[32mLog session created\u001b[37m --`);
            res.status(200).json({status: 200, message: 'User logged out'})
        } else {
            console.log(`-- ❌ \u001b[31mError creating log session\u001b[37m --`);
            res.status(500).json({status: 500, message: 'Error creating log session'})
        }
    }).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.verifyAuth = (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        const status = 401
        const message = 'Error in authorization format'
        console.log('Error in authorization format')
        res.status(status).json({status, message})
        return
    }
    try {
        let verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
        if (verifyTokenResult instanceof Error) {
           const status = 401
           const message = 'Access Token not provided'
           console.log('Access Token not provided')
           res.status(status).json({status, message})
           return
        }
        next()
    } catch (err) {
        const status = 401
        const message = 'Error Access Token is revoked'
        console.log(err)
        res.status(status).json({status, message})
    }
}

module.exports = controller;