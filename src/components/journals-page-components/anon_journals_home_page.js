import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnonJournalsHomePage = () => {
    const [objects, setObjects] = useState([])

    const url = "";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res)
                setObjects(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    const alertAccountNeeded = () => {
        alert("Please sign in continue");
    }

    console.log(objects.data);

    return (
        <div>
            <h1>Journals</h1>
            <div className="journals-button-container">
                <button className="journals-button" onClick={alertAccountNeeded}>Create Post</button>
                <button className="journals-button" onClick={alertAccountNeeded}>View My Journals</button>
                <button className="journals-button" onClick={alertAccountNeeded}>Download My Journals</button>
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

export default AnonJournalsHomePage
