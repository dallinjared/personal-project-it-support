const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password, first_name, last_name, birthday, email, phone_number, isAdmin} = req.body;
        const db = req.app.get('db');
        const result = await db.get_user([username]);
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('username already taken')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.register_user([username, hash, first_name, last_name, birthday, email, phone_number, isAdmin]);
        const user = registeredUser[0]
        req.session.user = {id: user.id, username: user.username, isAdmin: user.isAdmin}
        return res.status(201).send(req.session.user)
    },
};