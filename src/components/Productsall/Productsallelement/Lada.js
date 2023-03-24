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
          <InputLabel  id="select-label"  sx={formLabel} ></InputLabel>
          <Select 
            labelId="select-label"
            value={selectedId}
            sx={{color: 'red', fontSize: '20px',fontWeight: 'bold'}}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            <MenuItem  value="lada">Lada Karosszéria</MenuItem>
            <MenuItem  value="lada1200">Lada 1200 Karosszéria</MenuItem>
            <MenuItem  value="lada1500">Lada 1500 Karosszéria</MenuItem>
            <MenuItem  value="lada2101">Lada 2101 Karosszéria</MenuItem>
            <MenuItem  value="lada2103">Lada 2103 Karosszéria</MenuItem>
            <MenuItem  value="lada2105">Lada 2105 Karosszéria</MenuItem>
            <MenuItem  value="lada2107">Lada 2107 Karosszéria</MenuItem>
            <MenuItem  value="ladasamara">Lada Samara Karosszéria</MenuItem>
            <MenuItem  value="ladaniva">Lada Niva Karosszéria</MenuItem>
            <MenuItem value="lada1">Lada Kipufugok</MenuItem>
            <MenuItem  value="ladasamara1">Lada Samara Kipufugok</MenuItem>
            <MenuItem  value="ladaniva1">Lada Niva Kipufugok</MenuItem>
          </Select>
        </FormControl>  
        {selectedId === "lada" &&<ServicesContainer id="lada" >          
        <ServicesH1>Karosszéria elemek</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Taposó nagy.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Taposó nagy.jpg'
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
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Taposó kicsi.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Taposó kicsi.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Taposó kicsi</ServicesH2>
                    <ServicesP>Lower dash panel big</ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Hosszgerendás taposó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Hosszgerendás taposó.jpg'
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
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Hosszgerenda.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Hosszgerenda.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Hosszgerenda toldat.jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Hosszgerenda toldat.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Hosszgerenda toldat</ServicesH2>
                    <ServicesP> Cross-member extension</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Hátsó doblemez.jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Hátsó doblemez.jpg'
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
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Lámpakarika.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Lámpakarika.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lámpakarika</ServicesH2>
                    <ServicesP>
                     Lamp ring
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Oldalsó hűtőtartó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Oldalsó hűtőtartó.jpg'
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
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Csomagtér merevítő.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Csomagtér merevítő.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csomagtér merevítő</ServicesH2>
                    <ServicesP>
                     Lateral radiator cross-member
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Oldalsó hűtőtartó összekötő.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Oldalsó hűtőtartó összekötő.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Porvédő sapka.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Porvédő sapka.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Pótkeréktartó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Pótkeréktartó.jpg'
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
                    
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Tanktartó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Tanktartó.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Elülső emelő.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Elülső emelő.jpg'
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
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Akkumulátor tartó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Akkumulátor tartó.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Akkumulátor tartó</ServicesH2>
                    <ServicesP>
                     
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Hátsó emelő.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Hátsó emelő.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Szerelt hátsó emelőbak.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Szerelt hátsó emelőbak.jpg'
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
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Szerelt hátsó emelőbak gépi emelővel.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Szerelt hátsó emelőbak gépi emelővel.jpg'
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
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Szélvédőkeret javító.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Szélvédőkeret javító.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Szélvédőkeret javító</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Doblemeztorony.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Doblemeztorony.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Doblemez<br/>torony</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Doblemezmerevítő.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Doblemezmerevítő.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Doblemez<br/>merevítő</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Keresztmerevítő.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Keresztmerevítő.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Keresztmerevítő</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Ajtó oszlop.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Ajtó oszlop.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Ajtó oszlop</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Csomagtér fenéklemez javító.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Csomagtér fenéklemez javító.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csomagtér fenéklemez javító</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    
                
            </ServicesWrapper>
            <ServicesWrapper>
                    
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Szerelt küszöb.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Szerelt küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Szerelt küszöb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Lökhárítógumi elülső.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Lökhárítógumi elülső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lökhárítógumi elülső</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Lökhárítógumi hátsó.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Lökhárítógumi hátsó.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lökhárítógumi hátsó</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Külső küszöb.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Külső küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Külső küszöb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Közép küszöb.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Közép küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Közép küszöb</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Alsó küszöb.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Alsó küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Alsó küszöb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Belső küszöb.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Belső küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Belső küszöb</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Ülésbak.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Ülésbak.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Ülésbak</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Ülésbak borda hosszú.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Ülésbak borda hosszú.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Ülésbak borda hosszú</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Bordás ülésbak.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Bordás ülésbak.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Bordás ülésbak</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Középoszlop javító.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Középoszlop javító.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középoszlop javító</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Műszerfal melletti nyúlvány.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Műszerfal melletti nyúlvány.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Műszerfal melletti nyúlvány</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
               
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Stabilizátor felső.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Stabilizátor felső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Stabilizátor felső</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Stabilizátor hosszú.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Stabilizátor hosszú.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Stabilizátor hosszú</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Stabilizátor rövid.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Stabilizátor rövid.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Stabilizátor rövid</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
               
            </ServicesWrapper>
            
            
    </ServicesContainer>}
    {selectedId === "lada1200" &&<ServicesContainer id="lada1200" >          
        <ServicesH1>Karosszéria elemek(1200)</ServicesH1> 
              
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
    {selectedId === "lada1500" &&<ServicesContainer id="lada1500" >          
        <ServicesH1>Karosszéria elemek(1500)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Középhűtőtartó gerenda(1500).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Középhűtőtartó gerenda(1500).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középhűtőtartó gerenda<br/>(1500)</ServicesH2>
                    <ServicesP>Cross-member center lower</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Hátfalmerevítő(1500).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Hátfalmerevítő(1500).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátfalmerevítő (1500)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Pótkeréktartó(1500).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Pótkeréktartó(1500).jpg'
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
                
            </ServicesWrapper>
            <ServicesWrapper>
              <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Csomagtér fenéklemez(1500).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Csomagtér fenéklemez(1500).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Csomagtér fenéklemez (1500)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "lada2101" &&<ServicesContainer id="lada2101" >          
        <ServicesH1>Karosszéria elemek(2101)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő javítóív rövid(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő javítóív rövid(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív rövid(2101)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő javítóív hosszú(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő javítóív hosszú(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív hosszú(2101)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő javítóív elülső(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő javítóív elülső(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív elülső(2101)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Homlokfal(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Homlokfal(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Homlokfal (2101)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Köténylemez(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Köténylemez(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Köténylemez (2101)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő elülső(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő elülső(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő elülső(2101)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő hátsó(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő hátsó(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő hátsó(2101)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "lada2103" &&<ServicesContainer id="lada2103" >          
        <ServicesH1>Karosszéria elemek(2103)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Homlokfal(2103).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Homlokfal(2103).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Homlokfal (2103)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Köténylemez(2103).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Köténylemez(2103).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Köténylemez (2103)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő elülső(2103).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő elülső(2103).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő elülső(2103)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő hátsó(2103).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő hátsó(2103).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő hátsó(2103)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "lada2105" &&<ServicesContainer id="lada2105" >          
        <ServicesH1>Karosszéria elemek(2105)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Sárvédő javítóív elülső(2105).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Sárvédő javítóív elülső(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív elülső(2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Elülső sárvédő orrjavító(2105).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Elülső sárvédő orrjavító(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Elülső sárvédő orrjavító(2105)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Homlokfal(2105).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Homlokfal(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Homlokfal (2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Sárvédő javítóív spec.(2105-2107).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Sárvédő javítóív spec.(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív_sp.(2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő javítóív rövid sp.(2105-2107).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő javítóív rövid sp.(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív rövid_sp.(2105)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Köténylemez(2105-2107).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Köténylemez(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Köténylemez (2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Lökhárító elülső-hátsó(2105).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Lökhárító elülső-hátsó(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Lökhárító elülső-hátsó(2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Ajtó borítás(2105).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Ajtó borítás(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Ajtó borítás(2105)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő elülső(2105).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő elülső(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő elülső(2105)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő hátsó(2105).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő hátsó(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő hátsó(2105)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
    </ServicesContainer>}
    {selectedId === "lada2107" &&<ServicesContainer id="lada2107" >          
        <ServicesH1>Karosszéria elemek(2107)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Sárvédő javítóív spec.(2105-2107).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada_Sárvédő javítóív spec.(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív_sp.(2107)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Sárvédő javítóív rövid sp.(2105-2107).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Sárvédő javítóív rövid sp.(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sárvédő javítóív rövid_sp.(2107)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Homlokfal(2107).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Homlokfal(2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Homlokfal (2107)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Köténylemez(2105-2107).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Köténylemez(2105-2107).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Köténylemez (2107)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "ladasamara" &&<ServicesContainer id="ladasamara" >          
        <ServicesH1>Karosszéria elemek(lada samara)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Samara_Hátsó javítóív(3 ajtós).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada Samara_Hátsó javítóív(3 ajtós).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó javítóív(3 ajtós)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Samara_Hátsó javítóív(5 ajtós).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Samara_Hátsó javítóív(5 ajtós).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó javítóív(5 ajtós)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Samara_Külső küszöb(3 ajtós).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Samara_Külső küszöb(3 ajtós).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Külső küszöb(3 ajtós)</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Samara_Külső küszöb(5 ajtós).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Samara_Külső küszöb(5 ajtós).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Külső küszöb(5 ajtós)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "ladaniva" &&<ServicesContainer id="ladaniva" >          
        <ServicesH1>Karosszéria elemek(lada niva)</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                  <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Niva_Hátsó javítóív.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                     
                      src='/images/Lada Niva_Hátsó javítóív.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó javítóív</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Külső küszöb.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Niva_Külső küszöb.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Külső küszöb</ServicesH2>
                    <ServicesP>
                      
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
            
    </ServicesContainer>}
    {selectedId === "lada1" &&<ServicesContainer id="lada1" >          
        <ServicesH1>Kipufugok</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Y cső.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada_Y cső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Y cső</ServicesH2>
                    <ServicesP>
                      Y pipe
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Középdob(2101).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Középdob(2101).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob(2101)</ServicesH2>
                    <ServicesP>Center Muffler(2101)</ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Középdob(2105).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Középdob(2105).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob(2105)</ServicesH2>
                    <ServicesP>
                    Center Muffler(2105)
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_Hátsó dob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó dob</ServicesH2>
                    <ServicesP>
                    Rear Muffler
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_Kombi hátsó dob.jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_Kombi hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Kombi hátsó dob</ServicesH2>
                    <ServicesP> Station-wagon rear muffler</ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada_50-es sport kip. rendszer(3 db).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_50-es sport kip. rendszer(3 db).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>50-es sport kip. rendszer(3 db)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada_60-es sport kip. rendszer(3 db).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada_60-es sport kip. rendszer(3 db).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>60-es sport kip. rendszer(3 db)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
    </ServicesContainer>}
    {selectedId === "ladasamara1" &&<ServicesContainer id="ladasamara1" >          
        <ServicesH1>Kipufugok Samara</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Samara_Y cső.jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Samara_Y cső.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Y cső</ServicesH2>
                    <ServicesP>
                      Y pipe
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Samara_Sedán hátsó dob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Samara_Sedán hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Sedán hátsó dob</ServicesH2>
                    <ServicesP></ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Samara_Középdob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Samara_Középdob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob(Samara)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Samara_Katalizátoros középdob.jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Samara_Katalizátoros középdob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Katalizátoros középdob</ServicesH2>
                    <ServicesP>
                   
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Samara_Hátsó dob.jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Samara_Hátsó dob.jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Hátsó dob</ServicesH2>
                    <ServicesP> </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            
            
    </ServicesContainer>}
    {selectedId === "ladaniva1" &&<ServicesContainer id="ladaniva1" >          
        <ServicesH1>Kipufugok Niva</ServicesH1> 
              
        <ServicesWrapper>
                  <Modal sx={style}  open={open} onClose={handleClose}>
                        <Img style={{ maxHeight: "80%", maxWidth: "80%" }} src={image} alt="Modal Image" />
                  </Modal>
                    <Card sx={cardstyle} >
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Niva_Y cső(1.6).jpg')} >
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      
                      src='/images/Lada Niva_Y cső(1.6).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent} >
                    <ServicesH2>Y cső(1.6)</ServicesH2>
                    <ServicesP>
                      Y pipe
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                
                <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Niva_Középdob(1.6).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Középdob(1.6).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Középdob(1.6)</ServicesH2>
                    <ServicesP></ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Hátsó dob(1.6).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Hátsó dob(1.6).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó dob(1.6)</ServicesH2>
                    <ServicesP>
                    
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                  
                </Card>
            </ServicesWrapper>
            <ServicesWrapper>
                    <Card sx={cardstyle}>
                  <CardActionArea  onClick={() => handleOpen('/images/Lada Niva_Hátsó dob(1.7).jpg')}>
                    <CardMedia sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Hátsó dob(1.7).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}>
                    <ServicesH2>Hátsó dob(1.7)</ServicesH2>
                    <ServicesP>
                   
                    </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Középdob(1.7).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Középdob(1.7).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Középdob(1.7)</ServicesH2>
                    <ServicesP> </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Y cső karburátoros(1.7).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Y cső karburátoros(1.7).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Y cső karburátoros(1.7)</ServicesH2>
                    <ServicesP> </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
            </ServicesWrapper>
            <ServicesWrapper>
            <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Y cső injektoros(1.7).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Y cső injektoros(1.7).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Y cső injektoros(1.7)</ServicesH2>
                    <ServicesP> </ServicesP>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={cardstyle} >
                  <CardActionArea onClick={() => handleOpen('/images/Lada Niva_Katalizátoros középdob(1.6).jpg')}>
                    <CardMedia  sx={imagestyle}
                      component="img"
                      height="200"
                      src='/images/Lada Niva_Katalizátoros középdob(1.6).jpg'
                      alt="green iguana"
                    />
                    <CardContent sx={cardContent}> 
                    <ServicesH2>Katalizátoros középdob(1.6)</ServicesH2>
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

export default Lada