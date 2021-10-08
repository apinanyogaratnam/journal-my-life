import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const ExistingUserJournalsHomePage = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const dev = `http://localhost:5000${process.env.REACT_APP_API_KEY}`;
    const heroku = `https://journal-my-life-api.herokuapp.com${process.env.REACT_APP_API_KEY}`;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = baseUrl + apiKey;

    const fetchData = () => {
        axios.get(url)
            .then(res => {
                var arrayOfPublicPosts = [];
                const allUsers = res.data.data;

                for (let user of allUsers) {
                    const journals = user.journals;

                    for (let journal of journals) {
                        if (!journal.isPrivate) {
                            arrayOfPublicPosts.push(journal);
                        }
                    }
                }
                setUsers(allUsers);
                setPosts(arrayOfPublicPosts);
            }).catch(err => {
                console.log(err);
            })
    }
    
    useEffect(() => {
        fetchData();
    }, [], [])

    const history = useHistory();
    const location = useLocation();

    const userData = location.state;

    const handleLoginValidatorRedirect = () => {
        if (userData === undefined) {
            history.push("");
        }
    }

    handleLoginValidatorRedirect();

    const handleRouteUserHome = () => {
        history.push("/user/create-post", userData);
    }

    const handleRouteViewJournals = () => {
        history.push("/user/view-journals", userData);
    }

    const registerUserAndGetData = () => {
        // if user's email does not exist, add user to db
        // this conditional check done in the backend API
        // post request api with user's info (give info)
        handleLoginValidatorRedirect();
        axios.post(url, {
            "name": userData.name,
            "email": userData.email,
            "journals": []
        });
    }

    const handleRouteViewRawData = () => {
        window.open("https://journal-my-life-api.herokuapp.com/" + userData.email);
    }

    registerUserAndGetData();

    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button" onClick={handleRouteUserHome}>Create Post</button>
                <button className="journals-button" onClick={handleRouteViewJournals}>View My Journals</button>
                <button className="journals-button" onClick={handleRouteViewRawData}>View Raw Data</button>
            </div>
            <div className="journals-container">
                {/* Load all journals */}
                {posts.map(post => {
                    console.log(post.text);
                    return (
                        <div key={"id"} className="journal-container journal-text">
                            <h2>{post.title}</h2>
                            <h3 className="journal-author">- {post.author}</h3>
                            <h4>{post.text}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ExistingUserJournalsHomePage
