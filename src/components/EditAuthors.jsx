import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, useParams } from 'react-router-dom';


const EditAuthors = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);


    const { id } = useParams()
    const navigate = useNavigate()




    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                // console.log("this is our Edit Page: ", res.data.results)
                // Taking data and assigning it all to variable called "author" then grabbing info we need from data.
                console.log(res)
                setName(res.data.name)

            })
            .catch((err) => {
                console.log("This is our Edit Page Error ", err)
            })
    }, [id])
    // dependency array


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        // UPDATE author
        axios.put(`http://localhost:8000/api/author/${id}`, { name: name })
            .then((res) => {
                // console.log(res)
                navigate('/authors')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }




    return (
        <div>
            <div className='mb-3' >
                <h1> Edit Author</h1>
                <form onSubmit={handleSubmit} >
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} ></input>

                    <button className="btn btn-outline-primary" type="submit">Submit</button>

                    <button className="btn btn-outline-danger"><Link to={'/authors'}>Cancel</Link></button>

                </form>
            </div>
        </div>
    )
}

export default EditAuthors