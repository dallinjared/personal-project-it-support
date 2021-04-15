import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {readTicket} from '../../redux/reducers/ticketReducer';
// import {useHistory} from 'react-router-dom';
import '../../stylesheets/Ticket.css';


const Ticket = (props) => {
    const [ticket, setTicket] = useState({
        ticketId: null,
        date: null,
        title: '',
        category: '',
        description: '',
        media: '',
        isOpen: true
    })
    // const history = useHistory();

    useEffect(() => {
        axios.get(`/user/api/ticket/${props.ticketId}`)
            .then(res =>{
                setTicket(res.data)
                console.log(res.data)
            })
    }, [])


    return (
        
        <div  >
            <div className='ticketContain'>
                <h1 className='ticketData' >{ticket.date}</h1>
                <h1 className='ticketData' >{ticket.title}</h1>
                <h1 className='ticketData' >{ticket.category}</h1>
                <h1 className='ticketData' >{ticket.description}</h1>
                <h1 className='ticketData' >{ticket.media}</h1>
            </div>
            <button className='back' >&#8678;</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
}

// export default Ticket;
export default connect(mapStateToProps, readTicket)(Ticket);