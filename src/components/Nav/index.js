import "./style.css"
import { NavLink } from "react-router-dom";
import React from 'react';

const Nav = () => {

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
                }} to="/">About Me</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/portfolio">Portfolio</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/contact">Contact Me</NavLink>
                <NavLink className= {({isActive}) => {
                   if(isActive){
                    return 'active' 
                   } else {
                    return 'notActive'
                   };
                }} to="/resume">Resume</NavLink>
            </div>
        </div>

    )

}

export default Nav