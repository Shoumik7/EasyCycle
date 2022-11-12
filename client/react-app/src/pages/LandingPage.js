import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Select, TextField, MenuItem, Autocomplete} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../css/theme.js'
import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { SelectAllSharp } from '@mui/icons-material';
import AutoCompleteSearch from '../components/autocomplete/AutoCompleteSearch'
import { useState } from 'react';
import {item} from '../components/autocomplete/AutoCompleteSearch'

let user_latitude = 0;
let user_longitude = 0;
let file;

// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)
const LandingPage = () => {

    const successCallback = (position) => {
        //user_latitude = position.coords.latitude;
        //user_longitude = position.coords.longitude;
        
        localStorage.setItem('user_latitude', position.coords.latitude);
        localStorage.setItem('user_longitude', position.coords.longitude);
        //console.log("lat: " + user_latitude);
        //console.log("long: " + user_longitude);

        console.log(position);
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    let navigate = useNavigate()
    let setItemAndChangeScreen = () => {
        console.log(item);
        //React.useEffect(() => {
        //    console.log(text);
        //}, []).then( navigate('/dummy'))       
    }



    let fileSelectedHandler = e =>{
        file = e.target.files[0];
        //console.log(e.target.files[0])
        //this.setState({
        //   selectedFile: e.target.files[0]
        //})
    }
    let fileUploadHandler = () =>{
        console.log(file)
    }


    return ( 
        
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column">
                
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "black"}}>
                        EasyCycle
                    </Typography>
                    <center><Typography variant="body2" sx={{margin: 4}}>
                        Recycling Made Easy
                    </Typography></center>
                    


            </Stack>

            <Stack direction="column" justifyContent="center" alignItems="center" spacing={4} sx={{margin: 4}}>
                <span><AutoCompleteSearch/></span> 
                <span><Button onClick = {setItemAndChangeScreen} color="primary" variant="contained">Test Button</Button></span>
                
            </Stack>

            <Stack direction = "row" justifyContent="center">
                <input type="file" onChange={fileSelectedHandler}/>
                <button onClick={fileUploadHandler}>Upload</button>
            </Stack>

        </ThemeProvider>
        
        
    );
};
  
//export {user_latitude, user_longitude}
export default LandingPage;