import React, {useState} from 'react';
// import {withRouter} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: null,
        email: '',
        phone_number: '',
        is_admin: false
    })

    const register = () => {
        const data1 = {username: data.username, password: data.password, first_name: data.first_name, last_name: data.last_name, birthday: data.birthday, email: data.email, phone_number: data.phone_number, is_admin: data.is_admin}

        axios.post('/auth/register', data1)
            .then (res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <form>
                <input type='text' placeholder='First name' name='first_name' onChange={onChange} value={data.first_name}/>
                <input type='text' placeholder='Last name' name='last_name' onChange={onChange} value={data.last_name} />
                <input type='date' placeholder='Birthday' name='birthday' onChange={e => setData({...data, [e.target.name]: e.target.value})}value={data.birthday} />
                <input type='email' placeholder='Email address' name='email' onChange={onChange} value={data.email} />
                <input type='tel' placeholder='Telephone number'  name='phone_number' onChange={onChange} value={data.phone_number} />
                <input type='text' placeholder='Username' name='username' onChange={onChange} value={data.username} />
                <input type='password' placeholder='Password' name='password' onChange={onChange} value={data.password} />
            </form>
            <button type='submit' onClick={register}>Submit</button>
        </div>
    )
};

export default Register;  