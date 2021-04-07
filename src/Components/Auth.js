import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateUser} from '../redux/reducers/userReducer';
import axios from 'axios';

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
                this.props.updateUser({username: res.data.username})
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
            <div>
                <p>Username:</p>
                <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
                <p>Password:</p>
                <input value={this.state.password} onChange={e => this.handleChange('password', e.target.value)} />
                <button onClick={(e) => this.login(e)}>login</button>
                <Link to='/auth/register'>Register</Link>
            </div>
        )
    }
}

export default connect(null, {updateUser})(Auth);