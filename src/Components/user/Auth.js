import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateUser} from '../../redux/reducers/userReducer';
import axios from 'axios';
import '../../stylesheets/Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMsg: ''
        }
    }

    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    login = (e) => {
        e.preventDefault();
        axios.post('/auth/login', this.state)
            .then(res => {
                this.props.history.push('/user/dash')
                this.props.updateUser({username: res.data.username, id: res.data.user_id})
            })
            .catch(err => {
                console.log(err)
                this.setState({errorMsg: 'Incorrect username or password'})
            })
    }

    closeErrorMessage = () => {
        this.setState({
            username: '',
            password: '',
            errorMsg: false
        })
    }

    render(){
        return (
            <div className='loginWrapper' >
                <form>
                    <h1>Welcome!</h1>
                    <div>
                        <label>Username</label>
                        <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
                        <label>Password</label>
                        <input type='password' value={this.state.password} onChange={e => this.handleChange('password', e.target.value)} />
                    </div>
                    <div>
                    <button onClick={(e) => this.login(e)}>Login</button>
                    <Link className='register' to='/auth/register'>Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth);