import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnonJournalsHomePage = () => {
    const [objects, setObjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const dev = "http://localhost:5000/api/v1/token=20d2g15n-7z2s-3h3d-2b25-62h59274d4h0";
    const heroku = "https://journal-my-life-api.herokuapp.com/api/v1/token=20d2g15n-7z2s-3h3d-2b25-62h59274d4h0";

    useEffect(() => {
        axios.get(heroku)
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
