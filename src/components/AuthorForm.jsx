import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const AuthorForm = () => {
    const navigate = useNavigate()

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');








    return (
        <div>
            <form>
                <div className='mb-3' >
                    <form>
                        <label>Name: </label>
                        <input type="text"></input>

                        <button className="btn btn-outline-dark">Submit</button>

                        <button className="btn btn-outline-dark"><Link to={'/'}>Cancel</Link></button>

                    </form>



                </div>
            </form>
        </div>
    )




}

export default AuthorForm;