import React, {Component} from 'react';
import logo from './resources/logo.png'
import './Home.css'
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./Admin/adminHome";
import Admin from "./Admin/admin/adminViewCreate";
import Course from "./Admin/course/courseViewCreate";
import Instructors from "./Admin/instructors/instractorViewCreate";
import Notices from "./Admin/notices/noticeViewCreate";
import Students from "./Admin/students/studentsViewCreate";



class Navigator extends Component{
    render(){
        return(
            <div>
                <NavigatorBar/>
            </div>

        )
    }
}

class NavigatorBar extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Navbar bg="warning" variant="dark" className="nav">
                        <Nav className="mr-auto">
                            <a className="navbar-brand" href="https://www.sliit.lk/" >
                                <img src={logo} width="30" height="30"/>
                            </a>
                            <Link to="/"  className="navbar-brand" >Home</Link>
                            <Link to="/course"  className="navbar-brand" >Admin</Link>
                            <Link to="/subject"  className="navbar-brand" >Courses</Link>
                            <Link to="/"  className="navbar-brand" >Instructors</Link>
                            <Link to="/course"  className="navbar-brand" >Notices</Link>
                            <Link to="/subject"  className="navbar-brand" >Students</Link>
                        </Nav>
                    </Navbar>
                </div>

                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/course" component={Course} />
                <Route path="/instructors" component={Instructors} />
                <Route path="/notices" component={Notices} />
                <Route path="/students" component={Students} />
            </Router>


        )
    }
}

export default Navigator;