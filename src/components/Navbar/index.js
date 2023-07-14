import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons';
import { animateScroll as scroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../Lang/lang';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  FlagIcon,
  LanguageOptions,
 } from './NavbarElements';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav]= useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const { t, i18n } = useTranslation();

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
  const languages = [
    { code: 'hu', name: 'Hungarian' },
    { code: 'en', name: 'English' },
  ];
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  }
  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prevShowLanguageOptions) => !prevShowLanguageOptions);
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
                >
                  {t('navbar.company')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='/services'
                 exact='true' 
                 offset={-80}
                >
                  {t('navbar.services')}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome}  to='/products'
                 exact='true' 
                 offset={-80}
                 >
                  {t('navbar.products')}
                 </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/certifications'
                 exact='true' 
                 offset={-80}
                 >
                  {t('navbar.certifications')}
                 </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={toggleHome} to='/contacts'
                 exact='true' 
                 offset={-80}
                 > 
                 {t('navbar.contacts')}
                 </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks onClick={toggleLanguageOptions}>
                  <LanguageSelect
                    languages={languages}
                    handleLanguageChange={handleLanguageChange}
                  />
                </NavLinks>
                
              </NavItem>
            </NavMenu>
            
            
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;