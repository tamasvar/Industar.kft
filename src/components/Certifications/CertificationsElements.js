import styled from "styled-components";

export const ServicesContainer=styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   //background: #294141;
        @media screen and (max-width: 1200px){
            height: auto;    
        }
        @media screen and (max-width: 850px){
            height: auto;    
        }
       
`
export const ServicesWrapper=styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 50px;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr ;   
    }
    @media screen and (max-width: 850px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }

`

export const ServicesCard=styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    border-radius: 10px;
    height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const ServicesIcon=styled.img`
    max-height: 260px;
   max-width: 260px;
    margin-bottom: 10px;
    grid-area: image;
  
`

export const ServicesH1=styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 64px;
    font-weight: bold;
    text-align: center;
    
    @media screen and (max-width: 850px){
        font-size: 1.4rem;   
    }
    @media screen and (max-width: 200px){
        font-size: 0.5rem;   
    }
`

export const ServicesH2=styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    color: rgb(0, 255, 0);
    text-shadow: 2px 2px #000;

   
    @media screen and (max-width: 1200px){
        font-size: 1.5rem;   
    }
    @media screen and (max-width: 800px){
        font-size: 1.8rem;   
    }
    @media screen and (max-width: 350px){
        font-size: 1.3rem;   
    }
`
export const ServicesH3=styled.h3`
    font-size: 1.4rem;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    color: rgb(0, 255, 0);
    text-shadow: 2px 2px #000;

   
    @media screen and (max-width: 1200px){
        font-size: 1.5rem;   
    }
    @media screen and (max-width: 800px){
        font-size: 1.8rem;   
    }
    @media screen and (max-width: 350px){
        font-size: 1.3rem;   
    }
`
export const ServicesP=styled.p`
    font-size: 1rem;
    text-align: center;
`
export const ServicesA =styled.a`
   font-size: 1rem;
    text-align: center;
` 


export const MapIframe = styled.iframe`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  top: 0;
  left: 0;
  width:70%;
    height:400px;
`
export const Img =styled.img`
    padding: 1rem;
    width:100%;
`
export const ImgWrap=styled.div`
    max-width: 600px;
    height: 100%;
`