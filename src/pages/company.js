import React,{useState} from 'react'
import { Chrono } from "react-chrono";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionCompany from '../components/HeroSectionCompany';

const Company = () => {
  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  const items = [{
    title: "1962",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Jelenlegi tevékenységünk ifj. Török Pál vállalkozásának megkezdésével indult 1976-ban, majd kötőelem gyártással bővült és Török Sándor csatlakozásával 1980-tól már családi vállalkozássá fejlődött, és beindult a gépkocsimotor és karosszéria javítás.Az akkori karosszéria és alkatrész hiány szükségessé tette, hogy saját gyártású karosszéria-elemeket építsenek be a gépkocsikba. A karosszériaelemek gyártása 1985-ben kezdődött. Az alkalmazotti létszám akkor 5 fő volt.",
    //media: {
    //  source: {
     //   url: "http://localhost:3000/static/media/industar-kft-front.29cf411627a2ef5fa647.jpg",
      //  type: "jpg"
      //},
      //type: "IMAGE",
      //name: "Pearl Harbor"
   // }
  }, {
    title: "1976",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "1980",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "1985",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "1993",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "1996",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "2004",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "2010",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "2011",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "2012",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    
  },{
    title: "2013",
    cardTitle: "Cégalapítás",
    cardSubtitle:"Török Pál alapította, aki magánvállalkozóként kovácsolással, díszkovácsolással foglalkozott.",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..sdfsdfgsdagsdgarfrrrrrrrrrrrrrrrrr",
    
  },];
  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSectionCompany />
        <div id={'timeline'} >
            <Chrono  
           
            items={items} 
            mode="VERTICAL" 
            
            mediaHeight={200}/>
        </div>
    <Footer/>

    
    </>
  )
}

export default Company