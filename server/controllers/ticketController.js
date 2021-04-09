const tickets = [];

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
    },
    getUserTickets: async (req, res) => {
        const db = await req.app.get('db');
        let {id} = req.session.user;
        if (id) {
             db.ticket.get_user_tickets(id)
                .then(res => res.status(200).send(tickets))
        } else {
            res.sendStatus(403)
        }
    },
    readTicket: (req, res) => {
        req.app.get('db').ticket.read_ticket(req.params.id)
            .then(ticket => ticket[0] ? res.status(200).send(ticket[0]) : res.status(200).send({}))
    },
}