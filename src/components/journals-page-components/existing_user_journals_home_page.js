import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const ExistingUserJournalsHomePage = () => {
    const [objects, setObjects] = useState([]);
    const [posts, setPosts] = useState([]);
    const url = "https://journal-my-life-api.herokuapp.com/api/v1/token=20d2g15n-7z2s-3h3d-2b25-62h59274d4h0";

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

    const history = useHistory();
    const location = useLocation();

    const userData = location.state;

    const handleRouteUserHome = () => {
        history.push("/user/create-post", userData);
    }

    const handleRouteViewJournals = () => {
        history.push("/user/view-journals", userData);
    }

    const registerUserAndGetData = () => {
        // if user's email does not exist, add user to db
        // this conditional check would be done in the backend API
        // post request api with user's info (give info)
        // get request of user data (get info)
        // if the info is a clean slate, means user is new
        // console.log(userData);
        return;
    }

    const currentData = registerUserAndGetData();

    const downloadJournals = () => {
        // download journals as a txt file
        // 1. create txt file
        // 2. loop through all user's journals
        // 3. add journals to txt file with formatting journal metadata (date, title, etc.)
        // 4. close file
        // 5. download the file
    }

    const getAllJournals = () => {
        // call the api to get all data
        // loop through object to get all journals
            // set condition to filter out private journals
        // return object of journals
    }

    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button" onClick={handleRouteUserHome}>Create Post</button>
                <button className="journals-button" onClick={handleRouteViewJournals}>View My Journals</button>
                <button className="journals-button" onClick={downloadJournals}>Download My Journals</button>
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
