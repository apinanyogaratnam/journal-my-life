import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePost = ({ onAdd }) => {
    const history = useHistory();

    const redirectToJournals = () => {
        history.push("/user/home");
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

        onAdd({ title, text, checked });

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
                    <input value={title} placeholder="Title" className="input-journal-title" onChange={(e) => setTitle(e.target.value)}></input>
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
    )
}

export default CreatePost
