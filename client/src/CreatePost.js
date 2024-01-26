import React from 'react';
import Post from './CreatePost.module.css';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function CreatePost() {
    const navigate = useNavigate();
    return(
        <div className={Post.post}>
            <h1>Create a Post</h1>
            <Button onClick={() => navigate(-1)}>BACK</Button>
        </div>
    )
}

export default CreatePost;