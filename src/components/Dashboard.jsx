// import React, { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';




const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p><Link to={`/authors`}>Favorite Authors</Link></p>

        </div>
    )
}

export default Dashboard;