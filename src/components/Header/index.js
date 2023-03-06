import "./style.css"
import { NavLink } from "react-router-dom";
import React from 'react';

const Header = () => {
    //uses react-router-dom package to check if user is at a current page. if page isactive then the styling for the nav will change to highlight the user at the page
    return (


        <div className="header">
            <h1>Jackie Lee</h1>
            <div className="nav">
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio">About Me</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/portfolio">Portfolio</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/contact">Contact Me</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/react-portfolio/resume">Resume</NavLink>
            </div>
        </div>

    )

}

export default Header