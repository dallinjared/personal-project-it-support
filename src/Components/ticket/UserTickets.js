import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const UserTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('/user/dash')
            .then(res => {
                setTickets(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <div>
            <h1>TICKETS</h1>
            {/* <div>{tickets}</div> */}
            {
                tickets.map(t => {
                    return (
                    <Link to={`/user/api/ticket/${t.ticket_id}`} >
                        <h2>ticket #{t.ticket_id} </h2>
                    </Link>
                    )
                })
            }
        </div>
    )
};

export default UserTickets;