import styled from "styled-components";

export const ServicesContainer=styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
        @media screen and (max-width: 1200px){
            height: 1400px;    
        }
        @media screen and (max-width: 850px){
            height: 1700px;    
        }
       
`
export const TextWrapper=styled.div`
    max-width: 540px;
    padding-top: 0;
    
  
`

export const TopLine=styled.p`
    color: #082238e8;
    font-size: 19px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-align:center;
    justify-content: center;
 
    
`
export const ServicesWrapper=styled.div`
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;    
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
    color: #13588cba;
    margin-bottom: 64px;
    font-weight: bold;
    
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
    color: #a5ff36;
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
