const db = require('../database/conn.js');
const { ObjectId } = require('mongodb');
const controller = {};

controller.getAll = (req, res) => {
    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const logs = await connection.collection('logs').find().sort({date: -1}).toArray();
        if (logs.length === 0) {
            console.log(`-- ❌ \u001b[31mCould not found logs\u001b[37m --`);
            res.status(404).json({status: 404, message: 'Logs not found'});
            return;
        }
        console.log(`-- ✅ \u001b[32mLogs found\u001b[37m --`);
        res.status(200).json(logs);
    }
    ).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

controller.deleteById = async (req, res) => {
    const {id} = req.params;

    db.conectarDB().then(async () => {
        const connection = db.getDB();
        const user = await connection.collection('logs').findOne({_id: new ObjectId(id)});
        if (!user) {
            console.log(`-- ❌ \u001b[31mCould not found log with id ${id}\u001b[37m --`);
            res.status(404).json({status: 404, message: `Log with id ${id} not found`});
            return;
        } else {
            const update = await connection.collection('logs').deleteOne({_id: new ObjectId(id)});
            if (update.acknowledged){
                console.log(`-- ✅ \u001b[32mLog with id ${id} deleted\u001b[37m --`);
                res.status(200).json({status: 200, message: `Log with id ${id} deleted`});
            } else {
                console.log(`-- ❌ \u001b[31mError deleting log with id ${id}\u001b[37m --`);
                res.status(500).json({status: 500, message: `Error deleting log with id ${id}`});
            }
        }
    }).catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });
};

module.exports = controller;