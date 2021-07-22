import React from 'react'

const ExistingUserJournalsHomePage = () => {

    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button">Create Post</button>
                <button className="journals-button">View My Journals</button>
                <button className="journals-button">Download My Journals</button>
            </div>
            <div className="journals-container">
                <div className="journal-container journal-text">
                    <h2>Journal Title</h2>
                    <h3 className="journal-author">- Author</h3>
                    <h4>This is a sample journal blah blah blah</h4>
                </div>
                <div className="journal-container journal-text">
                    <h2>Journal Title</h2>
                    <h3 className="journal-author">- Author</h3>
                    <h4>This is a sample journal blah blah blah</h4>
                </div>
                <div className="journal-container journal-text">
                    <h2>Journal Title</h2>
                    <h3 className="journal-author">- Author</h3>
                    <h4>This is a sample journal blah blah blah</h4>
                </div>
                <div className="journal-container journal-text">
                    <h2>Journal Title</h2>
                    <h3 className="journal-author">- Author</h3>
                    <h4>This is a sample journal blah blah blah</h4>
                </div>
            </div>
        </div>
    );
}

export default ExistingUserJournalsHomePage
