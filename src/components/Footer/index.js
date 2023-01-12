import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterLinkItems,
    FooterLinkTitle,
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
    FooterLinkItemsBig
    
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
                    <FooterLinkItemsBig>
                        <FooterLinkTitle>Industár Kft.</FooterLinkTitle>
                         <FooterA>Felsőzsolca, Állomás u. 15. Hungary 3561</FooterA>
                            <FooterA>Titkárság: +36-46/383-888</FooterA>
                            <FooterA>Fax: +36-46/383-475</FooterA>
                            <FooterA href="mailto:info@industar.hu">info@industar.hu</FooterA>
                            <FooterA href="mailto:oroszne@industar.hu">oroszne@industar.hu</FooterA>
                            
                    </FooterLinkItemsBig>
                </FooterLinksWrapper> 
            </FooterLinksContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Ügyvezető igazgató</FooterLinkTitle>
                            <FooterLinkTitle>Török Sándor</FooterLinkTitle>
                            <FooterA>Tel.: +36-20/9455-795</FooterA>
                            <FooterA>Fax: +36-46/383-475</FooterA>
                            <FooterA href="mailto:torok@industar.hu">torok@industar.hu</FooterA>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Minőség- és környezetirányítási vezető</FooterLinkTitle>
                            <FooterLinkTitle>Szabó Géza</FooterLinkTitle>
                            <FooterA>Tel.: +36-20/589-58-96</FooterA>
                            <FooterA href="mailto:szabo@industar.hu">szabo@industar.hu</FooterA>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>Titkárság</FooterLinkTitle>
                            <FooterLinkTitle>Orosz Zoltánné</FooterLinkTitle>
                            <FooterA>Tel.: +36-46/383-888,  +36-20/252-75-91</FooterA>
                            <FooterA>Fax: +36-46/383-475</FooterA>
                            <FooterA href="mailto:oroszne@industar.hu">oroszne@industar.hu</FooterA>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Gazdasági vezető</FooterLinkTitle>
                            <FooterLinkTitle>Vas Ottóné</FooterLinkTitle>
                            <FooterA>Tel.: +36-46/383-422, +36-46/383-475</FooterA>
                            <FooterA href="mailto:konyveles@industar.hu">konyveles@industar.hu</FooterA>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>Műszaki vezető</FooterLinkTitle>
                            <FooterLinkTitle>Szaxon Csaba</FooterLinkTitle>
                            <FooterA>Tel.: +36-20/958-05-64</FooterA>
                            <FooterA href="mailto:szaxon@industar.hu">szaxon@industar.hu</FooterA>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Üzemvezető</FooterLinkTitle>
                            <FooterLinkTitle>Kismarton Gábor</FooterLinkTitle>
                            <FooterA>Tel.: +36-20/925-53-51</FooterA>
                            <FooterA href="mailto:kismarton@industar.hu">kismarton@industar.hu</FooterA>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Karbantartás vezető</FooterLinkTitle>
                            <FooterLinkTitle>Torma István</FooterLinkTitle>
                            <FooterA>Tel.: +36-20/933-42-13</FooterA>
                            <FooterA href="mailto:istvan.torma@industar.hu">istvan.torma@industar.hu</FooterA>
                    </FooterLinkItems>
                    <FooterLinkItems></FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Industár Kft.
                    </SocialLogo>
                     <WebsiteRights>Copyright {new Date().getFullYear()} © Industár Kft.</WebsiteRights>
                      <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Facebook"></SocialIconLink>
                        <FaFacebook/>
                      </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer