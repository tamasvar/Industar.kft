import styled from "styled-components";

export const ServicesContainer=styled.div`
    height: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #294141;
        @media screen and (max-width: 1000px){
            height: auto;    
        }
        
`
export const ServicesWrapper=styled.div`
    max-width: 1200px;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        max-width: 700px;
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
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
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

export const ServicesP=styled.p`
    font-size: 1rem;
    text-align: center;
`
export const ServicesA =styled.a`
   font-size: 1rem;
    text-align: center;
`
