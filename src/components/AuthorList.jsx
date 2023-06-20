import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';




const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams('');
    const navigate = useNavigate();

    // const { author } = props;
    // const { removeFromDom } = props;



    // Fetching the data, (authors)
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
                // console.log(res.data)
            })
            .catch(err => console.error(err));
    }, []);


    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res)
                const authorArr = author.filter(author => author._id !== id)
                setAuthor(authorArr)
            })
            .catch(err => console.error(err));
    }







    return (
        <div>
            <h1>Favorite Authors</h1>
            <div>

                <ul>
                    {author.map((author) => (
                        <p>{author.name}<button className="btn btn-outline-warning"><Link to={`/authors/${author._id}`} >Edit</Link></button><button className="btn btn-outline-danger" onClick={() => deleteProduct(author._id)}>Delete</button></p>


                    ))}
                    <p><Link to={`/authors/new`}>Add an Author </Link></p>

                </ul>
            </div>
        </div >
    )
};

export default AuthorList;

