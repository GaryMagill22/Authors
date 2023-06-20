import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AuthorList />} path="/authors" />

      </Routes>

    </div>
  );
}

export default App;
