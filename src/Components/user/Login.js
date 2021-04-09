import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import updateUser from '../../redux/reducers/userReducer';
import axios from 'axios';
import { connect} from 'react-redux';
// import { login } from '../../server/controllers/authController';

const Login = (props) => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const login = () => {
        const data1 = {username: data.username, password: data.password}
        axios.post('/auth/login', data1)
            .then (res => {
                props.updateUser(res.data)
                console.log(res.data)
                props.history.push('/user/dash')

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='username' onChange={onChange} name='username' value={data.username} />
                <input type='password' placeholder='password' onChange={onChange} name='password' value={data.password} />
                <button onClick={login} >Login</button>
            </form>
        </div>
    )
};

// export default Login;
const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps, {updateUser})(Login));