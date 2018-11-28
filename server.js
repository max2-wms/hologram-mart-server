// loading relevant packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const utils = require('./utils');
const environment = require('./environments/environment.js');

// app definition
const app = express();

// defining routers, one for general web API routes and one for Authentication API routes
const api  = express.Router();
const auth  = express.Router();

// loading database schemas
let Hologram = require('./model/hologram');
let User = require('./model/user');

// middleware: makes server be able to receive json objects
app.use(bodyParser.json());

// middleware: allows cross-origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// middleware: defining static files, public folder
app.use(express.static(__dirname + '/public'));

// middleware: defining API routes
app.use('/api', api);
app.use('/auth', auth);

// Hologram API
// List of Celebrity Holograms
api.get('/holograms', utils.checkAuthenticated, (req, res) => {
    // Getting documents from MongoDB
    Hologram.find().exec((err, hologram) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // Sending back list of holograms
            return res.json(hologram);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// Find a Celebrity Hologram by ID
api.get('/holograms/:hologramid', utils.checkAuthenticated, (req, res) => {
    // Getting documents from MongoDB
    Hologram.find({'_id': req.params.hologramid}).exec((err, hologram) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // returns hologram
            return res.json(hologram[0]);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// Add a Celebrity Hologram
api.post('/holograms', utils.checkAuthenticated, (req, res) => {
    // saves new hologram
    let newHologram = req.body;

    // Saving new hologram in MongoDB Database
    let hologram = new Hologram(newHologram);

    hologram.save((err) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // Sending new hologram to client
            return res.json(newHologram);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// Delete a Celebrity Hologram by ID
api.post('/holograms/:hologramid', utils.checkAuthenticated, (req, res) => {
    // Getting documents from MongoDB
    Hologram.deleteOne({'_id': req.params.hologramid}).exec((err, hologram) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // returns success message to client
            return res.json({status: 200, message: 'hologram successfully deleted!'});
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// Users API
// List of Users
api.get('/users', (req, res) => {
    // Getting documents from MongoDB
    User.find().exec((err, users) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // Sending back list of messages sorted in reverse chronological order
            return res.json(users);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// Find a User by ID
api.get('/users/:userid', (req, res) => {
    // Getting documents from MongoDB
    User.find({'_id': req.params.userid}).exec((err, user) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            // returns user
            return res.json(user[0]);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// authentication API
auth.post('/login', (req, res) => {
    let unauthenticatedUser = req.body;

    // Getting documents from MongoDB
    User.find().exec((err, users) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            let user = users.find((user) => user.username === unauthenticatedUser.username);

            if (!user) {
                utils.sendAuthError(res);
            } else {
                if (user.password === unauthenticatedUser.password) {
                    utils.sendToken(user, res);
                } else {
                    utils.sendAuthError(res);
                }
            }
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

// registration API
auth.post('/register', (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err) => {
        if (!err) {
            // Sending 200 status code
            res.status(200);

            utils.sendToken(newUser, res);
        } else {
            // Sending 500 status code
            res.status(500);

            // Sending error message to client
            return res.end(`Error: ${err}...`);
        }
    });
});

app.get('*', (req, res) => {
    res.redirect('/');
});

// Launch MongoDB Server
mongoose.connect(`${environment.MongoDB_URL}/${environment.dbName}`, { useMongoClient: true }, (err, db) => {
    if (!err) {
        console.log(`MongoDB server listening @ ${environment.MongoDB_URL}`);
    } else {
        console.log(`${err}...`);
    }
});


// Launch Node Server in http mode
const server = app.listen(environment.portNumber, () => {
    console.log(`Express Server listening on port ${server.address().port}`);
});