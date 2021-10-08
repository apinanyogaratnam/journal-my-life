import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const AnonJournalsHomePage = () => {
    const [objects, setObjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const dev = `http://localhost:5000${process.env.REACT_APP_API_KEY}`;
    const heroku = `https://journal-my-life-api.herokuapp.com${process.env.REACT_APP_API_KEY}`;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = baseUrl + apiKey;

    useEffect(() => {
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
                setObjects(res.data);
                setPosts(arrayOfPublicPosts);
            }).catch(err => {
                console.log(err);
            })
    }, [], [])

    const alertAccountNeeded = () => {
        alert("Please sign in continue");
    }

    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button" onClick={alertAccountNeeded}>Create Post</button>
                <button className="journals-button" onClick={alertAccountNeeded}>View My Journals</button>
                <button className="journals-button" onClick={alertAccountNeeded}>Download My Data</button>
            </div>
            <div className="journals-container">
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

export default AnonJournalsHomePage
