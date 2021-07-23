import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    // if (!title) alert("Please fill out the title");
    console.log(title);

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div value={title} className="input-journal-title-container">
                    <input placeholder="Title" className="input-journal-title" onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="input-journal-title-container">
                    <textarea value={text} placeholder="Once upon a time..." className="input-journal-text" onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <div className="checkbox-container"> 
                    <label>
                    Private Post&nbsp;
                    <input value={checkbox} type="checkbox" onChange={(e) => setCheckbox(e.target.value)}></input>
                    </label>
                </div>
                <input type="submit" value="Create Post" className="submit-button"></input>
            </form>
        </div>
    )
}

export default CreatePost
