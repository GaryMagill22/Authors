import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './Pages/Landing';
import { Route, Routes } from 'react-router-dom';
import AuthorForm from './Components/AuthorForm';
import FavoriteAuthors from './Pages/FavoriteAuthors';
import AddAuthor from './Pages/AddAuthor';
import EditAuthors from './Components/EditAuthors';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<FavoriteAuthors />} path="/authors" />
        <Route element={<AddAuthor />} path="/authors/new" />
        <Route element={<EditAuthors />} path="/authors/:id" />


      </Routes>

    </div>
  );
}

export default App;
