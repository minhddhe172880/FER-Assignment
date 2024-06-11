import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar, { Banner, Body, Footer } from './components/homepage';
import './components/style.css';
import NavPath, { CoursesBody,CoursesBody2 } from './components/courseslist';
import CreateCourse from './components/createcourse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      <NavBar></NavBar>
      <NavPath></NavPath>
      <CreateCourse></CreateCourse>
      <Footer></Footer>
 
    

  </React.StrictMode>
);

