require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authCtrl = require('./controllers/authController');
const ticketCtrl = require('./controllers/ticketController');
const auth = require('./middleware/authMiddleware');
const app = express();

app.use(express.json());
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 4
    }
}));

// USER LOGIN/REGISTRATION ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/session', authCtrl.getUser) //, ticketCtrl.getUserTickets)
app.get('/auth/logout', authCtrl.logout)


// TICKET ENDPOINTS
app.post('/user/api/ticket/new', ticketCtrl.newTicket)
app.get('/user/dash', ticketCtrl.getUserTickets)
app.get('/admin/dash', auth.adminsOnly, ticketCtrl.getUserTickets)
app.get('/user/api/ticket/:id', ticketCtrl.readTicket)

massive({
    connectionString:  CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))
})