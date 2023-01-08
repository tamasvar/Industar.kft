import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink
 } from './NavbarElements';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav]= useState(false);

  const changeNav=()=>{
    if(window.scrollY >= 80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',changeNav);
  },[])

  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>Industar.kft</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks onClick={toggleHome} to="company"
                 
                 exact='true' 
                 offset={-80}
                >Cégbemutató</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='services'>Szolgáltatások</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='discover'>Referenciák</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Kapcsolat</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signup'>Kapcsolat</NavLinks>
              </NavItem>
            </NavMenu>
            
            
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;