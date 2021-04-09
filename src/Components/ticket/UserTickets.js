import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserTickets = (props) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('/user/api/ticket/:id')
            .then(res => {
                setTickets(res.data.results)
            })
    })

    return (
        <div>
            {
                tickets.map(ticket => {
                    return (
                    <Link to={`/user/api/ticket/${ticket.ticket_id}`} >
                        <h2>ticket</h2>
                    </Link>
                    )
                })
            }
        </div>
    )
};

export default UserTickets;