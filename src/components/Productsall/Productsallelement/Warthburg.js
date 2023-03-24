import React,{useState } from 'react'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Footer from '../../Footer'
import HeroSection from '../../HeroSectionImage'
import { lada } from '../../HeroSectionImage/data'
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
 

const Warthburg = () => {
  
  
  const[isOpen,setIsOpen]=useState(false)
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [selectedId, setSelectedId] = useState("lada");

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
        <HeroSection {...lada}/>
        <FormControl sx={formControl} >
          <InputLabel  id="select-label"  sx={formLabel} ></InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            sx={{color: 'red', fontSize: '20px',fontWeight: 'bold'}}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem  value="warthburg">Warthburg Karosszéria</MenuItem>
        
            <MenuItem value="warthburg1">Warthburg Kipufugok</MenuItem>
          
          </Select>
        </FormControl>  
        
    {selectedId === "warthburg" &&<ServicesContainer id="warthburg" >          
        <ServicesH1>Karosszéria elemek</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Középhűtőtartó gerenda(1200).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Középhűtőtartó gerenda(1200).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1200)</ServicesH2>
                    <ServicesP>
                    Cross-member center lower 
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Hátfalmerevítő(1200).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Hátfalmerevítő(1200).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátfalmerevítő (1200)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Csomagtér fenéklemez(1200).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Csomagtér fenéklemez(1200).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csomagtér fenéklemez (1200)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
            
    </ServicesContainer>}
    
    {selectedId === "warthburg1" &&<ServicesContainer id="warthburg1" >          
        <ServicesH1>Kipufugok</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Wartburg_Y cső(1.3).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Wartburg_Y cső(1.3).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Y cső(1.3)</ServicesH2>
                    <ServicesP>
                     
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Wartburg_Összekötő cső(1.3).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Wartburg_Összekötő cső(1.3).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Összekötő cső(1.3)</ServicesH2>
                    <ServicesP></ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Wartburg_Középdob(1.3).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Wartburg_Középdob(1.3).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob(1.3)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Wartburg_Hátsó dob(1.3).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Wartburg_Hátsó dob(1.3).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó dob(1.3)</ServicesH2>
                    <ServicesP>
                   
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Wartburg_Középdob(353).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Wartburg_Középdob(353).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Középdob(353)</ServicesH2>
                    <ServicesP> </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
            
    </ServicesContainer>}
    
    <Footer/>
    </>
  )
}

export default Warthburg