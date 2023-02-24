import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { SidebarContainer,
  Icon ,
  CloseIcon,
  SidebarLink,
  SidebarWrapped,
  SidebarMenu
} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapped>
          <SidebarMenu>
            <SidebarLink onClick={toggleHome} to='/company'
                 
                 exact='true' 
                 offset={-80}
              >Cégbemutató
            </SidebarLink>
            <SidebarLink onClick={toggleHome}  to='/services'
                 exact='true' 
                 offset={-80}
                >Szolgáltatások
            </SidebarLink>
            <SidebarLink onClick={toggleHome}  to='/products'
                 exact='true' 
                 offset={-80}
                 >Termékek
            </SidebarLink>
            <SidebarLink onClick={toggleHome} to='/certifications'
                 exact='true' 
                 offset={-80}
                 >Tanúsítványok
            </SidebarLink>
            <SidebarLink onClick={toggleHome} to='/contacts'
                 exact='true' 
                 offset={-80}
                 >Kapcsolat
            </SidebarLink>
          </SidebarMenu>
          
        </SidebarWrapped>
    </SidebarContainer>
  )
}

export default Sidebar;
