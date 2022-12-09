import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect,useRef} from "react";

export const Navigation = () => {
  const [activeLink,setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
      const onScroll = () =>{
          if(window.scrollY>50){
              setScrolled(true);
          }else{
              setScrolled(false);
          }
      }
  window.addEventListener("scroll",onScroll);
  return ()=>window.removeEventListener("scroll",onScroll);
  },[])
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
}
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#itutor" className={activeLink === 'Sports'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Football</Nav.Link>
            <Nav.Link href="#intelligent" className={activeLink === 'intelligent'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('intelligent')}>Coding</Nav.Link>
            <Nav.Link href="#prices" className={activeLink === 'prices'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('prices')}>Cooking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
