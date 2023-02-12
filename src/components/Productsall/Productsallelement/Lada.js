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
};
const formControl={
    backgroundColor: "#4caf50",
    display: "flex",
    alignItems: "center",
};
const style={
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
 

const Lada = () => {
  
  
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
          <InputLabel  id="select-label"  sx={formLabel} >Válaszd ki az alkatrészt</InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem value="lada">Lada általános</MenuItem>
            <MenuItem value="lada1">Lada niva</MenuItem>
          </Select>
        </FormControl>
        {selectedId === "lada" &&<ServicesContainer id="lada" >          
        <ServicesH1>Karosszéria elemek</ServicesH1>       
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó nagy.png')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Taposó nagy.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Taposó nagy</ServicesH2>
                    <ServicesP>
                      Lower dash panel small
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Taposó kicsi.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Taposó kicsi.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Taposó kicsi</ServicesH2>
                    <ServicesP>Lower dash panel big</ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerendás taposó.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerendás taposó.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hosszgerendás taposó</ServicesH2>
                    <ServicesP>
                      Cross-member lower dash
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hosszgerenda.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hosszgerenda</ServicesH2>
                    <ServicesP>
                    Cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hosszgerenda toldat.png')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Hosszgerenda toldat.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Hosszgerenda toldat</ServicesH2>
                    <ServicesP> Cross-member extension</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Hátsó doblemez.png')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Hátsó doblemez.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó doblemez</ServicesH2>
                    <ServicesP>
                     Rear inner wheel arch
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1200).png')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1200).png'
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
                  <CardActionArea onClick={() => handleOpen('/images/lada/Középhűtőtartó gerenda(1500).png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Középhűtőtartó gerenda(1500).png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1500)</ServicesH2>
                    <ServicesP>Cross-member center lower</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó</ServicesH2>
                    <ServicesP>
                     Lateral radiator cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Oldalsó hűtőtartó összekötő.png')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Oldalsó hűtőtartó összekötő.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Oldalsó hűtőtartó összekötő</ServicesH2>
                    <ServicesP>
                    Lateral radiator cross-member connection

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Porvédő sapka.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Porvédő sapka.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Porvédő sapka</ServicesH2>
                    <ServicesP>
                      Antidust cover
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Pótkeréktartó.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Pótkeréktartó</ServicesH2>
                    <ServicesP>
                     Spare-wheel compartment
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Pótkeréktartó(1500).png')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Pótkeréktartó(1500).png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Pótkeréktartó<br/>(1500)</ServicesH2>
                    <ServicesP>
                    Spare-wheel compartment

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Tanktartó.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Tanktartó.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Tanktartó</ServicesH2>
                    <ServicesP>
                      Fuel tank holder
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Elülső emelő.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/lada/Elülső emelő.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Elülső emelő</ServicesH2>
                    <ServicesP>
                     Front jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/lada/Hátsó emelő.png')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/lada/Hátsó emelő.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó emelő</ServicesH2>
                    <ServicesP>
                    Rear jack

                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak</ServicesH2>
                    <ServicesP>
                      Mounted rear ground jack
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/lada/Szerelt hátsó emelőbak gépi emelővel.png')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/lada/Szerelt hátsó emelőbak gépi emelővel.png'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Szerelt hátsó emelőbak_gépi emelővel</ServicesH2>
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

export default Lada