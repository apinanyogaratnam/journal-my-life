import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

const ExistingUserJournalsHomePage = () => {
    const history = useHistory();
    const location = useLocation();

    const userData = location.state;

    const handleRouteUserHome = () => {
        // pass in props and get props when creating a post
        // complete the code in create_post.js
        history.push("/user/create-post", userData);
    }

    const registerUserAndGetData = () => {
        // if user's email does not exist, add user to db
        // this conditional check would be done in the backend API
        // post request api with user's info (give info)
        // get request of user data (get info)
        // if the info is a clean slate, means user is new
        console.log(userData);
    }

    registerUserAndGetData();

    // use .map here to load all user's journals
    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button" onClick={handleRouteUserHome}>Create Post</button>
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
