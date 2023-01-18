import styled from "styled-components";

export const InfoContainer=styled.div`
    color: #fff;
    background: ${({lightBg})=>(lightBg?'#f9f9f9':'#010606')};
   
    @media screen and (max-width:768px) {
        padding: 100px 0;

    }
`
export const InfoWrapper =styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width:100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left:auto;
    padding:24px;
    justify-content: center;
    /*@media screen and (min-width:400px) {
        height: 1000px;

    }*/
 
`

export const InfoRow=styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    grid-template-areas: ${({imgStart})=>(imgStart? `'col2 col1'`:`'col1 col2'`)};  
    
    @media screen and (max-width:768px) {
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
    max-width: 540px;
    padding-top: 0;
    
  
`

export const TopLine=styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-align:center;
    justify-content: center;
 
    
`
export const Heading =styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    padding-top:50px;
    color: #f7f8fa;
    text-align:center;
    @media screen and (max-width:480px) {
    font-size: 32px;
    }
`
export const Heading2 =styled.h2`
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    padding-top:50px;
    color: #f7f8fa;
    text-align:center;
    @media screen and (max-width:480px) {
    font-size: 32px;
    }
`
export const Subtitle=styled.p`
    max-width: 440px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 35px;
    font-weight: bold;
    text-align: justify;
    
    color: ${({darkText})=>(darkText ? '#f7f8fa' : '#fff')};
   
`
export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap=styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img =styled.img`
    
    margin: 0 0 10px 0;
    padding-right: 0;
    width:100%;
    
`