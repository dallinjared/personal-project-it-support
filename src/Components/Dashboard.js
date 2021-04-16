import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserTickets from './ticket/UserTickets';
import '../stylesheets/dash.css';
import NewTicket from './ticket/NewTicket';

const Dashboard = (props) => {
    // const [ticket, setTicket] = useState();
    const [createTicket, setCreateTicket] = useState(false);  

    const logout = () => {
        axios.get('/auth/logout')
            .then(res => this.props.logout())
    };

    // const readTicket = () => {
    //     axios.get(`/user/api/ticket/${props.match.params.id}`)
    //     .then(res => {
    //         setTicket(res.data);
    //         return (
    //             <div>
    //             {ticket}
    //             </div>
    //         );
    //     })
    // };

    const _onButtonClick = () => {
        setCreateTicket(true)
    };

    
    return (
        <div className='mainContain' > 
            <div className='dashContain' >
                <div className='header' >                    
                    <h1>WELCOME!{props.username}</h1>
                    <Link to='/' onClick={() => logout} className='logout' >Logout</Link>
                </div>
                <div className='userTickets' >
                    <UserTickets />         
                </div>
                {/* <Link className='newTicket' to='/api/ticket/new'>&#9547;</Link> */}
                <button onClick={_onButtonClick} className='newTicket'>&#9547;</button>
                    {createTicket ?
                    <NewTicket /> :
                    null}
            </div>   
        </div>
    )

}; 

export default Dashboard;