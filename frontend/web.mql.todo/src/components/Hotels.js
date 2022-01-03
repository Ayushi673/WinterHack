import React from "react";
import Grid from '@mui/material/Grid';
import "./App.css";
import Paper from '@mui/material/Paper';
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import home1 from "./Images/home1.png";
import home2 from "./Images/home2.png";
import buy from "./Images/buy.png";

const styles = {
    paperContainer: {
        maxHeight: 200, overflow: 'auto',
        backgroundImage: `url(${"https://elements-twenty20-photos-0.imgix.net/production/uploads/items/6f3c7ee4-19e6-4f87-a08e-2eb20bf9f38e/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=11a4c4e5d119030d235580895a2b517c"})`
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
        {props.iconLabel}
        </Paper>
      </Box>
    );
  }

const Hotels = ({name,summary,images,link,host,reviews})=>{

    return(
        <div style={{padding: "5px 30px 40px 5px"}} align="center">
    <Paper elevation={3}>
    <Grid container spacing={1}>
        <Grid item xs={12} >
        <h1>{name}</h1>
        <p>{summary}</p>
        </Grid>
        <Grid item xs={9}>
        <img alt="Oops! No preview" src={images}/>
        </Grid>
        <Grid item xs={3}>
        <Box>
        <SimplePaper iconPic={buy} iconLabel="Price"/>
        </Box>
        <Box>
        <SimplePaper iconPic={home1} iconLabel="Facilities"/>
        </Box>
        <Box>
        <SimplePaper iconPic={home2} iconLabel="Find"/>
        </Box>
        </Grid>
        <Grid item xs={12}>
            <h2>Host:</h2>
            <Container style={{padding: "10px 50px 10px 50px"}}>
            <Paper style={styles.paperColor} variant="outlined" style={{padding: "10px 50px 10px 50px"}}>
            <img alt="👤" src={host.host_thumbnail_url} style={{borderRadius:"50%"}}/><br/>
                <b>{host.host_name}</b><br/>
                <b>📍 {host.host_location}</b><br/>
                {host.host_about}
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
            <Paper variant="outlined">
                {link}
            </Paper>
        </Grid>
    </Grid>
    </Paper>
    </div>
    )
}

export default Hotels;

//src={host.host_thumbnail_url}
//src="https://static.vecteezy.com/system/resources/thumbnails/000/550/731/small/user_icon_004.jpg"



