import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const CreatePost = () => {
    const history = useHistory();
    const location = useLocation();

    const userData = location.state;

    const redirectToJournals = () => {
        history.push("/user/home", userData);
    }

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [checked, setCheckbox] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Please fill out the title");
            return;
        }

        if (!text) {
            alert("Please add some text to your journal");
            return;
        }

        const dev = `http://localhost:5000${process.env.REACT_APP_API_KEY}`;
        const heroku = `https://journal-my-life-api.herokuapp.com${process.env.REACT_APP_API_KEY}`;
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = baseUrl + apiKey;

        axios.post(url, {
            "title": title, 
            "text": text, 
            "isPrivate": checked,
            "email": userData.email,
            "author": userData.name
        });

        setTitle('');
        setText('');
        setCheckbox(false);
        alert("posted successfully");
        redirectToJournals();
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="input-journal-title-container">
                    <input name="title" value={title} placeholder="Title" className="input-journal-title" onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="input-journal-title-container">
                    <textarea value={text} placeholder="Once upon a time..." className="input-journal-text" onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="checkbox-container"> 
                    <label>
                    Private Post&nbsp;
                    <input value={checked} type="checkbox" checked={checked} onChange={(e) => setCheckbox(e.currentTarget.checked)}></input>
                    </label>
                </div>
                <input type="submit" value="Create Post" className="submit-button"></input>
            </form>
        </div>
    );
}

export default CreatePost
