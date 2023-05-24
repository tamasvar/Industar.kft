import React,{useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionImage'
import { skoda } from '../../HeroSectionImage/data'
import { 
  Card, CardContent, CardMedia,CardActionArea,FormControl,InputLabel,Select,MenuItem,Modal
} from "@mui/material";



import { 
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  Img
 } from './Productsallelement'
const cardstyle={
  margin: "1rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)", 
    },
    "&:hover $cardContent": {
      visibility: "hidden"
    },
    "&:hover $imagestyle": {
      filter: "blur(0px)"
    }
};
const imagestyle={
  width: "100%",
  backgroundSize: "cover",
  filter: "blur(2px)",
  transition: "filter 0.1s ease-in-out"
};
const cardContent={
  position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    visibility: "visible",
    transition: "visibility 0.1s ease-in-out"
};
const formLabel={
    fontSize: "20",
    textAlign: "center",
    textTransform: 'none',
    
};
const formControl={
    backgroundColor: "#4caf50",
    display: "flex",
    alignItems: "center",
    fontFamily: 'Arial'
};
const style={
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
 

const Skoda = () => {
  
  
  const[isOpen,setIsOpen]=useState(false)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [selectedId, setSelectedId] = useState("skoda");

  const handleOpen = (img) => {
    setOpen(true)
    setImage(img)
  };

  const handleClose = () => {
    setOpen(false)
    setImage(null)
  };
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection {...skoda}/>
        <FormControl sx={formControl} >
          <InputLabel  id="select-label"  sx={formLabel} ></InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            sx={{color: 'red', fontSize: '20px',fontWeight: 'bold'}}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem  value="skoda">Skoda Karosszéria</MenuItem>
        
            <MenuItem value="skoda1">Skoda Kipufugok</MenuItem>
          
          </Select>
        </FormControl>  
        
    {selectedId === "skoda" &&<ServicesContainer id="skoda" >          
        <ServicesH1>Karosszéria elemek</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Lengőkar gumiságy.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Skoda_Lengőkar gumiságy.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lengőkar gumiságy</ServicesH2>
                    <ServicesP>
                   
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Skoda_Külső köszöb(105-120).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Skoda_Külső köszöb(105-120).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Külső köszöb(105-120)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Közép köszöb(105-120).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Skoda_Közép köszöb(105-120).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Közép köszöb(105-120)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Hátsó sárvédő javítóív(régi típ.).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Skoda_Hátsó sárvédő javítóív(régi típ.).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó sárvédő javítóív(régi típ.)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Hátsó sárvédő javítóív GL (új típ.).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Skoda_Hátsó sárvédő javítóív GL (új típ.).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó sárvédő javítóív GL (új típ.)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Alsó köszöb(105-120).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Skoda_Alsó köszöb(105-120).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Alsó köszöb(105-120)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda Favorit_Külső küszüb.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Skoda Favorit_Külső küszüb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Favorit_Külső küszüb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
           
            
            
    </ServicesContainer>}
    
    {selectedId === "skoda1" &&<ServicesContainer id="skoda1" >          
        <ServicesH1>Kipufugok</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda_Kipufogódob(105-120).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Skoda_Kipufogódob(105-120).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Kipufogódob(105-120)</ServicesH2>
                    <ServicesP>
                     
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Skoda Favorit_Középdob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Skoda Favorit_Középdob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Favorit_Középdob</ServicesH2>
                    <ServicesP></ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Skoda Favorit_Hátsó dob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Skoda Favorit_Hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Favorit_Hátsó dob</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            
            
            
    </ServicesContainer>}
    
    <Footer/>
    </>
  )
}

export default Skoda