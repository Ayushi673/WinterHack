import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./App.css";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>{props.iconText}</Button>
      <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
          {props.iconText}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            { (props.iconText==='Pricing') ? (<div>Price per day: {props.iconPrice} $ <br/>Cancellation policy: {props.cancellation}</div>) 
            : (props.iconText==='Features') ? (<div>
              <b>Bedroom Facility?</b><br/>{props.beds} bed/s with {props.bedrooms} bedroom/s and accommodates {props.accommodates} person/s.<br/>
              <b>What do you have access to?</b><br/>{props.access}<br/>
              <div className="container">
                {
                  props.amenities.map((i)=>{
                    return(
                      <ul>
                        <li key={i}>{i}</li>
                      </ul>
                    )
                  })
                }
              </div>
            </div>) : 
            (<div>
              How to reach?<br/><b>{props.address.street}</b><br/>{props.transit}
              </div>) }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

