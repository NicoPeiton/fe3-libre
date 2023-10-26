import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Routes/Home.jsx";
import Favs from "./Routes/Favs.jsx";
import Detail from "./Routes/Detail.jsx";
import Contact from "./Routes/Contact.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path='/dentist/:id' element={<Detail/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


