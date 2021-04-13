import axios from 'axios';
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {updateUser} from './redux/reducers/userReducer';
import {connect} from 'react-redux';
import routes from './routes';
import './stylesheets/App.css';

function App(props) {

  useEffect(() => {
    axios.get('/auth/session')
      .then (res => {
        props.updateUser({username: res.data.username, id: res.data.user_id})
        props.history.push('/user/dash')

      })
  }, [])

  return (
    <div className="App">
      {routes}
    </div>
  );
}


export default withRouter(connect(null, {updateUser})(App));
