import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect,useRef} from "react";
import { Link } from 'react-router-dom';

export const Navigation = () => {
  
  return (
    <nav className="navBar">
      <ul className="navList">
        <Link to="/">Home</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/coding">Coding</Link>
        <Link to="/cooking">Cooking</Link>
      </ul>
    </nav>
  )
}
