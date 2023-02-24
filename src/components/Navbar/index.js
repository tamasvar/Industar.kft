import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';

import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
 
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
            <NavLogo to='/' onClick={toggleHome}
            exact='true' 
            offset={-80}
            >Industar.kft </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/company'
                 
                 exact='true' 
                 offset={-80}
                >Cégbemutató</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='/services'
                 exact='true' 
                 offset={-80}
                >Szolgáltatások</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='/products'
                 exact='true' 
                 offset={-80}
                 >Termékek</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/certifications'
                 exact='true' 
                 offset={-80}
                 >Tanúsítványok</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/contacts'
                 exact='true' 
                 offset={-80}
                 >Kapcsolat</NavLinks>
              </NavItem>
            </NavMenu>
            
            
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;