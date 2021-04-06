const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, first_name, last_name, birthday, email, phone_number, is_admin} = req.body;

        try {
            const [existingUser] = await db.user.find_user_by_username(username);

            if (existingUser) {
                return res.status(409).send('Username already exists')
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const[newUser] = await db.user.register_user(username, hash, first_name, last_name, birthday, email, phone_number, is_admin)

            req.session.user = newUser;
            
            res.status(200).send(newUser)
        } catch(err) {
            console.log(err)
            return res.sendStatus(500)
        }
    },
};