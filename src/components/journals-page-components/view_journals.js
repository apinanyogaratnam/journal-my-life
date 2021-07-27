import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const ViewJournals = () => {
    const [objects, setObjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const dev = `http://localhost:5000${process.env.REACT_APP_API_KEY}`;
    const heroku = `https://journal-my-life-api.herokuapp.com${process.env.REACT_APP_API_KEY}`;

    const history = useHistory();
    const location = useLocation();

    const userData = location.state;
    const emailOfUser = userData.email;

    useEffect(() => {
        axios.get(heroku)
            .then(res => {
                var arrayOfUserPosts = [];
                const allUsers = res.data.data;
                for (let user of allUsers) {
                    if (user.email === emailOfUser) {
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
    }, [])

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
