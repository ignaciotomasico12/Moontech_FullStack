const { MongoClient } = require('mongodb');
const connectionString = process.env.DB_HOST || "";
const dbName = process.env.DB_NAME || "";

let db;

const conectarDB = async () => {
    try {
        const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    conectarDB,
    getDB: () => db
};