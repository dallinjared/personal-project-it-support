import React, {useState, useEffect} from 'react';
import {getUserTickets, readTicket} from '../../redux/reducers/ticketReducer';
import {connect}  from 'react-redux';
import Ticket from './Ticket';
import {Link} from 'react-router-dom';
import axios from 'axios';
import  '../../stylesheets/sidebar.css';

const UserTickets = (props) => {
    const [tickets, setTickets] = useState([{
        ticketId: null,
        title: '',
        description: ''
    }]);
    const [readTicket, setReadTicket] = useState(false)

    useEffect((props) => {
        axios.get('/user/dash')
            .then(res => {
                setTickets(res.data)
                // console.log(res.data)
            })
    }, [])


    const _onButtonClick = () => {
        setReadTicket(true)
        console.log(readTicket)
        
    }
    
    return (
        <div className='sideBarTix'>
            <span className='title'>TICKETS</span>
            {
                tickets.map(t => { 
                        return ( 
                         <button onClick={_onButtonClick} className='ticketItems' to={`/user/api/ticket/${t.ticket_id}`}  >
                             {readTicket && t.ticketId != null ? <Ticket ticketId={t.ticket_id} /> : null}
                            <h2 className='ticketItems'>Ticket: {t.title}</h2>
                        </button> 
                        //  <Link className='link' to={`/user/api/ticket/${t.ticket_id}`}  >
                        //     <h2 className='ticketItems'>Ticket: {t.title}</h2>
                        // </Link> 
                        )
                    })
                }
            {/* { ticketId ? <button onClick={() => Ticket}> {title} </button>  : null
                } */}
        </div>
    )
};

export default connect(null, getUserTickets)(UserTickets);