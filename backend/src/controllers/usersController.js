const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const db = require('../database/conn.js');
const { ObjectId } = require('mongodb');
const controller = {};

controller.getAll = (req, res) => {
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const users = await connection.collection('users').find().toArray();
        if (users.length === 0) {
            console.log(`-- ❌ \u001b[31mCould not found users\u001b[37m --`);
            res.status(404).json({status: 404, message: 'Users not found'});
            return;
        }
        console.log(`-- ✅ \u001b[32mUsers found\u001b[37m --`);
        res.status(200).json(users);
    }
    ).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.getById = (req, res) => {
    const { id } = req.params;
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const user = await connection.collection('users').findOne({_id: new ObjectId(id)});
        if (!user) {
            console.log(`-- ❌ \u001b[31mCould not found user with id ${id}\u001b[37m --`);
            res.status(404).json({status: 404, message: `User with id ${id} not found`});
            return;
        }
        console.log(`-- ✅ \u001b[32mUser with id ${id} found\u001b[37m --`);
        res.status(200).json(user);
    }
    ).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.create = async (req, res) => {
    try {
        const data = req.body;
        const id = uuidv4();
        data.id = id;

        const hashedPassword = bcrypt.hashSync(data.password, 10);
        data.password = hashedPassword;

        db.conectarDB().then(async () => {
            const connection = db.getDB();
            const user = await connection.collection('users').findOne({email: data.email});
            if (user){
                console.log(`-- ❌ \u001b[31mUser ${data.email} already exists\u001b[37m --`);
                res.status(500).json({status: 500, message: 'User already exists'});
                return;
            } else {
                const update = await connection.collection('users').insertOne(data);
                if (update.acknowledged){
                    console.log(`-- ✅ \u001b[32mUser ${data.email} registered\u001b[37m --`);
                    res.status(200).json({status: 200, message: 'User registered'});
                } else {
                    console.log(`-- ❌ \u001b[31mError registering user ${data.email}\u001b[37m --`);
                    res.status(500).json({status: 500, message: 'Error registering user'});
                }
            }
        }).catch(error => {
            console.error('Error al conectar a la base de datos:', error);
        });
    } catch (error) {
        console.error('Error processing form data', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

controller.update = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;

        db.conectarDB().then(async () => {
            const connection = db.getDB();
            const user = await connection.collection('users').findOne({_id: new ObjectId(userId)});
            if (!user) {
                console.log(`-- ❌ \u001b[31mCould not found user with id ${userId}\u001b[37m --`);
                res.status(404).json({status: 404, message: `User with id ${userId} not found`});
                return;
            } else {
                const update = await connection.collection('users').updateOne({_id: new ObjectId(userId)}, {$set: data});
                if (update.acknowledged){
                    console.log(`-- ✅ \u001b[32mUser with id ${userId} updated\u001b[37m --`);
                    res.status(200).json({status: 200, message: `User with id ${userId} updated`});
                } else {
                    console.log(`-- ❌ \u001b[31mError updating user with id ${userId}\u001b[37m --`);
                    res.status(500).json({status: 500, message: `Error updating user with id ${userId}`});
                }
            }
        }).catch(error => {
            console.error('Error al conectar a la base de datos:', error);
        });
    } catch (error) {
        console.error('Error processing form data', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

controller.deleteById = async (req, res) => {
    const {id} = req.params;

    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const user = await connection.collection('users').findOne({_id: new ObjectId(id)});
        if (!user) {
            console.log(`-- ❌ \u001b[31mCould not found user with id ${id}\u001b[37m --`);
            res.status(404).json({status: 404, message: `User with id ${id} not found`});
            return;
        } else {
            const update = await connection.collection('users').deleteOne({_id: new ObjectId(id)});
            if (update.acknowledged){
                console.log(`-- ✅ \u001b[32mUser with id ${id} deleted\u001b[37m --`);
                res.status(200).json({status: 200, message: `User with id ${id} deleted`});
            } else {
                console.log(`-- ❌ \u001b[31mError deleting user with id ${id}\u001b[37m --`);
                res.status(500).json({status: 500, message: `Error deleting user with id ${id}`});
            }
        }
    }).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

module.exports = controller;