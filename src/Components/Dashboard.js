import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserTickets from './ticket/UserTickets'
import '../stylesheets/dash.css';

const Dashboard = () => {
    // const [tickets, setTickets] = useState([]);

    // useEffect(() => {
    //     axios.post('/user/dash')
    //         .then(res => {
    //             setTickets(res.data.results)
    //         })
    // }, [])

    const logout = () => {
        axios.get('/auth/logout')
            .then(res => this.props.logout())
    };

    return (
        <div className='mainContain' > 
            <div className='dashContain' >
                <div className='header' >                    
                    <h1>WELCOME!</h1>
                    <Link to='/' onClick={() => logout} className='logout' >Logout</Link>
                </div>
            </div>  
                <UserTickets />         
                <Link to='/api/ticket/new'>New Ticket</Link>
        </div>
    )

}; 

export default Dashboard;