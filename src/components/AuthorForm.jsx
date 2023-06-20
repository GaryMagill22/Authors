import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const AuthorForm = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate()


    // Submit Handler
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Create new Author
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res => {
                console.log('Response: ', res)
                navigate('/authors')
            })

            .catch(err => console.log('Error: ', err))
    }











    return (


        <div className='mb-3' >
            <h1> Add an Author</h1>
            <form onSubmit={onSubmitHandler} >
                <label>Name: </label>
                <input type="text" onChange={(e) => setName(e.target.value)} ></input>

                <button className="btn btn-outline-primary" type="submit">Submit</button>

                <button className="btn btn-outline-danger"><Link to={'/authors'}>Cancel</Link></button>

            </form>
        </div>


    )




}

export default AuthorForm;