import React, {useState} from 'react';
// import {withRouter} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    return (
        <div>
            <form>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
                <input type='date' placeholder='Birthday' />
                <input type='email' placeholder='Email address' />
                <input type='tel' placeholder='Telephone number' pattern='[0-9] {3}-[0-9]{3}-[0-9]{4}' />
                <input type='text' placeholder='Username' />
                <input type='password' placeholder='Password' />
            </form>
            <button>Submit</button>
        </div>
    )
};

export default Register;