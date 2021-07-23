import React from 'react'

const create_post = () => {
    return (
        <div>
            <h1>Create Post</h1>
            <form>
                <div className="input-journal-title-container">
                    <input placeholder="Title" className="input-journal-title"></input>
                </div>
                <div className="input-journal-title-container">
                    <textarea placeholder="Once upon a time..." className="input-journal-text"></textarea>
                </div>
                <div className="checkbox-container"> 
                    <label>
                    Private Post&nbsp;
                    <input type="checkbox"></input>
                    </label>
                </div>
                <button className="submit-button">Post</button>
            </form>
        </div>
    )
}

export default create_post
