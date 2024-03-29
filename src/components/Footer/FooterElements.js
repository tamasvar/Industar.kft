import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer=styled.footer`
    background-color: #101522;
`

export const FooterWrap =styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    max-width: 1200px;
    margin: 0 auto;
`

export const FooterLinksContainer =styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
       
    }

`

export const FooterLinksWrapper =styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`

export const FooterLinkItems =styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    margin: 16px;
    text-align: center;
    
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkItemsBig =styled.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
       
    }
`
export const FooterLinkTitle =styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    
`

export const FooterLink =styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia =styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`

export const SocialLogo =styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights =styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 140px;
`

export const SocialIconLink =styled.a`
    color: #fff;
    font-size: 24px;
   
`
export const FooterA =styled.a`
   display: flex;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    margin-bottom: 0.3rem;
`
export const FooterRight =styled.a`
   
   position: relative;
    color: #fff;
    font-size: 12px;
    margin-bottom: 0.3rem;
    
`
export const FooterC =styled.a`
   
    color: blue;
    
`
export const FooterSpan =styled.span`
   display: flex;
    text-align: left;
    color: #fff;
    font-size: 12px;
`
