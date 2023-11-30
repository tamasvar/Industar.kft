import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    FooterA,
    SocialIcons,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    FooterLinkItemsBig,
    FooterLink
    
} from './FooterElements'
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
        
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLink to='/privacypolicy' onClick={toggleHome}> Adatvédelmi nyilatkozat</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLink to='/company' onClick={toggleHome}>Cégbemutató</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLink to='/services' onClick={toggleHome}>Szolgáltatások</FooterLink>
                    </FooterLinkItems>
                
                    <FooterLinkItems>
                    <FooterLink to='/products' onClick={toggleHome}>Termékek</FooterLink>
                            
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLink to='/certifications' onClick={toggleHome}>Tanusítványok</FooterLink>   
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLink to='/contacts' onClick={toggleHome}>Kapcsolat</FooterLink>
                            
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
                
            </FooterLinksContainer>
            
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Industar Kft.
                    </SocialLogo>
                    <FooterLinkItemsBig>
                            <FooterA>Felsőzsolca, Állomás u. 15. Hungary 3561</FooterA>
                            <FooterA>Titkárság: +36-46/383-888</FooterA>
                            <FooterA>Fax: +36-46/383-475</FooterA>
                            <FooterA href="mailto:info@industar.hu">info@industar.hu</FooterA>
                            <FooterA href="mailto:oroszne@industar.hu">oroszne@industar.hu</FooterA>
                    </FooterLinkItemsBig>
                     <WebsiteRights>Copyright {new Date().getFullYear()} © Industar Kft.</WebsiteRights>
                      <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/people/Industar-Kft/100069083162287/" target="_blank"
                        aria-label="Facebook"><FacebookIcon/> </SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/people/Industar-Kft/100069083162287/" target="_blank"
                        aria-label="Facebook"><TwitterIcon /></SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/people/Industar-Kft/100069083162287/" target="_blank"
                        aria-label="Facebook"><InstagramIcon /></SocialIconLink>
                        <SocialIconLink href="https://www.facebook.com/people/Industar-Kft/100069083162287/" target="_blank"
                        aria-label="Facebook"><YouTubeIcon /></SocialIconLink>
                      </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer