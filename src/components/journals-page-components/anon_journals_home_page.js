import React from 'react'

const AnonJournalsHomePage = () => {
    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button">Create Post</button>
                <button className="journals-button">View My Journals</button>
                <button className="journals-button">Download My Journals</button>
            </div>
        </div>
    );
}

export default AnonJournalsHomePage
