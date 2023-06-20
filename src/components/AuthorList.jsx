// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const AuthorList = (props) => {
    const { author } = props;
    // const { removeFromDom } = props;



    return (
        <div>
            <h1>Product List</h1>
            <ul>

                <p><Link to={`/authors/`}>Create New Author </Link></p>

            </ul>
        </div >
    )
};

export default AuthorList;

