import React from "react";
import Grid from '@mui/material/Grid';
import "./App.css";
import Paper from '@mui/material/Paper';
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import home1 from "./Images/home1.png";
import home2 from "./Images/home2.png";
import buy from "./Images/buy.png";
import Modals from './Modals.js';

//backgroundImage: `url(${"https://media.istockphoto.com/photos/beautiful-nature-blurred-light-abstract-background-natural-outdoors-picture-id642063236?k=20&m=642063236&s=612x612&w=0&h=ppdxG7QKIGZKX7t4yd2XrGsLtF8QypneYJjQf_NmoMk="})`


const styles = {
  paperContainer: {
    maxHeight: 200, overflow: 'auto',
    backgroundImage: `url(${"https://elements-twenty20-photos-0.imgix.net/production/uploads/items/6f3c7ee4-19e6-4f87-a08e-2eb20bf9f38e/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=11a4c4e5d119030d235580895a2b517c"})`
  },
  boxContainer:{
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 1,
    backgroundImage: `url(${"https://media.istockphoto.com/photos/abstract-blur-soft-focus-blue-color-interior-of-modern-cleaning-picture-id1156772856?k=20&m=1156772856&s=612x612&w=0&h=YatSXcdYafrpPYGV2lvJ7z72Eq0AeiPPxypqz3QomaY="})`
  },
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }
};

function SimplePaper(props) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 158,
            height: 145,
          },
        }}
      >
        <Paper elevation={3}>
        <img alt="" src={props.iconPic} width="150"/>
        <Modals iconText={props.iconLabel} 
        iconPrice={props.price}
        cancellation={props.cancellation}
        transit={props.transit}
        address={props.address}
        access={props.access}
        accommodates={props.accommodates}
        beds={props.beds}
        bedrooms={props.bedrooms}
        amenities={props.amenities}
        />
        </Paper>
      </Box>
  );
}


const Hotels = ({name,summary,images,link,host,reviews,price,cancellation_policy,
  interaction,transit,address,access,accommodates,beds,bedrooms,amenities
})=>{

    return(
    <div style={{padding: "5px 30px 40px 5px"}} align="center">
    <Paper style={styles.boxContainer} elevation={3}>
    <Grid container spacing={0}>
        <Grid item xs={12} >
        <h1>{name}</h1>
        <h3>{address.street}</h3>
        <p>{summary}<br/>
        <a href={link}>Book Now!</a><br/>
        </p>
        </Grid>
        <Grid item xs={9}>
        <img alt="Oops! No preview" src={images}/> 
        </Grid>
        <Grid item xs={3}>
        <Box>
          <SimplePaper iconPic={buy} price={price} cancellation={cancellation_policy}
          iconLabel="Pricing"/>
        </Box>
        <Box>
        <SimplePaper iconPic={home1} access={access} accommodates={accommodates} beds={beds} bedrooms={bedrooms}
         amenities={amenities}
         iconLabel="Features"/>
        </Box>
        <Box>
        <SimplePaper iconPic={home2} transit={transit} address={address} iconLabel="Directions"/>
        </Box>
        </Grid>
        <Grid item xs={12}>
            <h2>Host:</h2>
            <Container style={{padding: "10px 50px 10px 50px"}}>
            <Paper variant="outlined" style={{padding: "10px 50px 10px 50px"}}>
            <img alt="👤" src={host.host_thumbnail_url} style={{borderRadius:"50%"}}/><br/>
                <b>{host.host_name}</b><br/>
                <b>📍 {host.host_location}</b><br/>
                {host.host_about}<br/>{interaction}
            </Paper>
            </Container>
            <h2>Reviews:</h2>
            <Container style={{padding: "10px 50px 10px 50px"}}>
            <Paper variant="outlined" style={styles.paperContainer} align="left">
                {
                    reviews.splice(0,10).map((i)=>{
                        return(
                        <Grid container spacing={2} key={i._id}>
                            <Grid item xs={6} md={1} align="center">
                              <div>
                             <img alt="" src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png" width="30" height="30"/><br/>
                             {i.reviewer_name}
                              </div>
                            </Grid>
                            <Grid item xs={6} md={11}>
                              <div>{i.comments}</div>
                            </Grid>
                            <Grid item xs={12}>
                                <hr/>
                            </Grid>
                        </Grid>
                        );
                    }
                    )
                }
            </Paper>
            </Container>
        </Grid>
    </Grid>
    </Paper>
    </div>
  )
}

export default Hotels;