import React,{useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionImage'
import { dacia } from '../../HeroSectionImage/data'
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
 

const Dacia = () => {
  
  
  const[isOpen,setIsOpen]=useState(false)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [selectedId, setSelectedId] = useState("dacia");

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
        <HeroSection {...dacia}/>
        <FormControl sx={formControl} >
          <InputLabel  id="select-label"  sx={formLabel} ></InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            sx={{color: 'red', fontSize: '20px',fontWeight: 'bold'}}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem  value="dacia">Dacia Karosszéria</MenuItem>
        
            <MenuItem value="dacia1">Dacia Kipufugok</MenuItem>
          
          </Select>
        </FormControl>  
        
    {selectedId === "dacia" &&<ServicesContainer id="dacia" >          
        <ServicesH1>Karosszéria elemek</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Dacia_Hátsó ajtó alatti ív.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Dacia_Hátsó ajtó alatti ív.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó ajtó alatti ív</ServicesH2>
                    <ServicesP>
                   
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Dacia_Hátsó sárvédő javítóív.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Dacia_Hátsó sárvédő javítóív.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó sárvédő javítóív</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Dacia_Küszöb.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Dacia_Küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Küszöb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
           
            
            
    </ServicesContainer>}
    
    {selectedId === "dacia1" &&<ServicesContainer id="dacia1" >          
        <ServicesH1>Kipufugok</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Dacia_Y cső.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Dacia_Y cső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Y cső</ServicesH2>
                    <ServicesP>
                     
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Dacia_Összekötő cső.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Dacia_Összekötő cső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Összekötő cső</ServicesH2>
                    <ServicesP></ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Dacia_Középdob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Dacia_Középdob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Dacia_Hátsó dob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Dacia_Hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó dob</ServicesH2>
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

export default Dacia