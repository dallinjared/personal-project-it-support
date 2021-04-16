module.exports = {
    getAllOpenTickets: async (req, res) => {
        const db = await req.app.get('db');
        let {is_admin} = req.session.user;
        if (is_admin) {
             db.admin.get_all_open()
                .then(dbRes => res.status(200).send(dbRes))
        } else {
            res.sendStatus(403)
        }
    },
}