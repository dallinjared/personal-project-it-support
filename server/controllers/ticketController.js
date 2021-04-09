// const { bcrypt } = require("bcryptjs");

module.exports = {
    newTicket: async (req, res) => {
        const db = req.app.get('db');
        const {id, title, category, description, media} = req.body;
        const date = new Date();

        if (id) {       
           await db.ticket.create_ticket([id, date, title, category, description, media])
                .then(() => res.sendStatus(200))
        } else {
            res.sendStatus(403)
        }
    }
}