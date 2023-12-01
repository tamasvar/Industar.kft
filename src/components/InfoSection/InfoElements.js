import styled from "styled-components";

export const InfoContainer=styled.div`
   
    


    
    @media screen and (max-width:768px) {
        padding: 50px 0;

    }
`
export const InfoWrapper =styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width:100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left:auto;
    padding:0 24px;
    justify-content: center;
    
 
`

export const InfoRow=styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    grid-template-areas: ${({imgStart})=>(imgStart? `'col2 col1'`:`'col1 col2'`)};  
    
    @media screen and (max-width:1500px) {
    grid-template-areas: ${({imgStart})=>(imgStart? `'col1' 'col2'`:`'col2 col2' 'col1 col1'`)};
    

    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`
export const TextWrapper=styled.div`
    max-width: 900px;
    padding-top: 0;
    background-color: #B9B6B6;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 10px;  
  
`
export const TopLine=styled.p`
    color: #f2f2f2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    
`
export const Heading =styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    padding-top:50px;
    color: #13588cba;
    text-align:center;
    @media screen and (max-width:480px) {
    font-size: 32px;
    }
`
export const Subtitle=styled.p`
    //max-width: 800px;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
    
    font-weight: bold;
    text-align: justify;
    @media screen and (max-width:700px) {
        text-align: center;
        font-size: 16px;
        line-height: 26px;
    }
    
    color: ${({darkText})=>(darkText ? '#082238e8' : '#fff')};
   
`
export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap=styled.div`
   
    height: 100%;
    max-width: 900px;
    padding-top: 0;
   
    
    padding: 10px;
    margin: 10px;  
`
export const Img =styled.img`
    
    margin: 0 0 10px 0;
    padding-right: 0;
    width:100%;
    
`