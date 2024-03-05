import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Layout from './Layout.jsx'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Location  from './components/Location/Location.jsx';
import Login from './components/Login/Login.jsx';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Location' element={<Location/>}/>
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
        
      </Route>
    </Routes>
  );
};

export default App;
