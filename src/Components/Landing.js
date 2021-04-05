import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

const Landing = () => {

    return (
        <div>
            <form>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='password' />
                <button>Login</button>
                <Link to='/auth/register'>Register</Link>
            </form>
        </div>
    )
};

export default withRouter(Landing);