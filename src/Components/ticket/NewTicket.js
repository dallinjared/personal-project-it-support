import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


const NewTicket = (props) => {
    const [data, setData] = useState({
        id: null,
        date: null,
        title: '',
        category: '',
        description: '',
        media: null
    })

    const submitTicket = (e) => {
        e.preventDefault();
        console.log(props)
        const {id} = props;
        const data1 = {id: id, date: data.date, title: data.title, category: data.category, description: data.description, media: data.media};
        axios.post('/api/ticket/new', data1)
            .then(res => {
                console.log(res.data)
                alert('Post successfully submitted')
                props.history.push('/user/dash')
            })
            .catch(err => console.log(err))
    }
    
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Title' onChange={onChange} name='title' value ={data.title} />
                <select name='category'>
                    <option name='general' value='general'>General Question</option>
                    <option name='internet' value='internet'>Internet Issue</option>
                    <option name='website' value='website'>Website debugging</option>
                    <option name='suggestion' value='suggestion'>Suggestion</option>
                    <option name='other' value='other'>Other Issue</option>
                </select>
                <textarea type='text' placeholder='description' onChange={onChange} name='description' value ={data.description} />
                <input type='file' placeholder='upload relevant image' onChange={onChange} name='media' value ={data.media} />
                <button type='submit' onClick={(e) => submitTicket(e)} >Submit Request</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    const {user} = state;
    return user
}

export default connect(mapStateToProps)(NewTicket);