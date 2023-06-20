import React, { useEffect, useState } from 'react'
import AuthorForm from '../Components/AuthorForm';
import AuthorList from '../Components/AuthorList';
import axios from 'axios';
// import { Link } from 'react-router-dom';


// import AuthorList from '../components/AuthorList';


const FavoriteAuthors = (props) => {
    const { removeFromDom } = props;

    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);




    useEffect(() => {
        // Get all Authors
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(`Here is my useEffect in action:`, res.data.results)
                setAuthor(res.data.results)
                setLoaded(true)
            })
            .catch((err) => {
                console.log(`This is my  useEffect catch all in action ${err}`)
            })
    }, [])
    // Need dependency array 







    return (
        <div>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom} />}

        </div>
    )
}

export default FavoriteAuthors