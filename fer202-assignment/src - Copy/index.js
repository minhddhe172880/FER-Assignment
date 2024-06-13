import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/style.css';
import CreateCourse from './components/createcourse';
import NavPath, { CoursesBody, CoursesBody2 } from './components/courseslist';
import './components/style.css';
import './components/CourseSingle.css';
import './components/Homepage.css';
import './components/Login.css';
import './components/CoursePage.css';
import { Footer, Navbar1 } from './components/Homepage';
import CourseSingle from './components/CourseSingle';
import CoursePage from './components/CoursePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar1/>
    {/* <NavPath/> */}
      {/* <CourseSingle/> */}
      {/* <CreateCourse></CreateCourse> */}
 
      {/* <CoursesBody></CoursesBody> */}
      {/* <CoursesBody2/> */}
      <CoursePage/>
<Footer/>
  </React.StrictMode>
);

