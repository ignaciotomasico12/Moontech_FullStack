const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Environment variables //
const PORT = process.env.NODE_PORT;

// Importing routes //
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const logsRoutes = require('./routes/logs');

// Settings //
app.set('port', PORT || 3333);
app.use(express.json());
app.use(cors({
    origin: [
        'https://localhost:3000', 
        'http://localhost:3000', 
    ]
}));

// Middlewares //
app.use(morgan('dev'));

// Routes //
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', logsRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// Starting the server //
app.listen(app.get('port'), () => {
    console.log(``);
    console.log(`╔════════════════════════════════════════════════════╗`);
    console.log(`║                                                    ║`);
    console.log(`║ \u001b[32mCompiled Successfully !\u001b[37m                            ║`);
    console.log(`║                                                    ║`);
    console.log(`║ You can now view the server in the browser.        ║`);
    console.log(`║                                                    ║`);
    console.log(`║  \u001b[36mLocal:\u001b[37m            http://localhost:${app.get('port')}           ║`);
    console.log(`║                                                    ║`);
    console.log(`║ Note that the development build is not optimized.  ║`);
    console.log(`║ To create a new production build, use \u001b[32myarn build\u001b[37m.  ║`);
    console.log(`║                                                    ║`);
    console.log(`╚════════════════════════════════════════════════════╝`);
    console.log(``);
});

module.exports = app;