import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const ViewJournals = () => {
    const [objects, setObjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const url = "https://journal-my-life-api.herokuapp.com/api/v1/token=20d2g15n-7z2s-3h3d-2b25-62h59274d4h0";

    const history = useHistory();
    const location = useLocation();

    const userData = location.state;
    const emailOfUser = location.state.email;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                var arrayOfUserPosts = [];
                const allUsers = res.data.data;
                for (let user of allUsers) {
                    if (user.email == emailOfUser) {
                        const journalsOfUser = user.journals;
                        for (let journal of journalsOfUser) {
                            arrayOfUserPosts.push(journal);
                        }
                    }
                }
                setObjects(res.data);
                setPosts(arrayOfUserPosts);
            }).catch(err => {
                console.log(err);
            })
    }, [], [])

    return (
        <div>
            <h1>Your Journals</h1>
            <div className="journals-container">
                {posts.map(post => {
                    return (
                        <div key={'id'} className="journal-container journal-text">
                            <h2>{post.title}</h2>
                            <h3 className="journal-author">- {post.author}</h3>
                            <h4>{post.text}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ViewJournals
