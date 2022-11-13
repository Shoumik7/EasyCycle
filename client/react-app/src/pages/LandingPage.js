import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography, Select, TextField, MenuItem, Autocomplete, IconButton} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../css/theme.js'
import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { SelectAllSharp } from '@mui/icons-material';
import AutoCompleteSearch from '../components/autocomplete/AutoCompleteSearch'
import { useState } from 'react';
import {item} from '../components/autocomplete/AutoCompleteSearch'
import {Link} from 'react-scroll'
import axios from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import videoBg from '../assets/vid.mp4'
import graph1 from '../assets/RateOfRecycleGraph.jpg'

  
let user_latitude = 0;
let user_longitude = 0;
let file;

//var cl = new cloudinary.Cloudinary({cloud_name: "dpmbjjjri", secure: true});
//let cloud_api_key = '245266449274133';
//let cloud_name = 'dpmbjjjri';

// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)
const LandingPage = () => {

    //const app = new Clarifai.App({apiKey: '2cfcf9ce516e412abd34194fe80b1107'});

    //GETTING USER LOCATION
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

    const [image, setImage] = useState({})
    const [base64, setBase64] = useState({ preview: '', data: '' })

    const [status, setStatus] = useState('')

    const handleFileChange = async (e) => {
        // const img = {
        // preview: URL.createObjectURL(e.target.files[0]),
        // data: e.target.files[0],
        // }
        setImage(e.target.files[0]);
        setBase64(await getBase64(image));
        //setImage(img.data)
        console.log("base 64:" + base64);
    }

    React.useEffect(() => {
        console.log(image);
    }, [image])

    const handleSubmit = async (e) => {
        fetch("http://localhost:5000/image-predict", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(base64)}).then(data => {console.log("data: " + data.json()); localStorage.setItem('item: ', 'bottle')});
        
    }

    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })
    
    return (     
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Stack direction="column" sx={{marginBottom: 0}}>
            <div className='background'>
                <video src={videoBg} autoPlay loop muted/>
                <div className='content'>
                <Box bgcolor="white" height = "40%" width = "90%" sx={{backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 0}}>
                <Typography variant="h2" align="center" sx={{margin: 25, marginBottom: 0, marginTop: 10, color: "white"}}> 
                            <span color='white'>EasyCycle</span>
                        </Typography>
                        <center><Typography variant="body2" sx={{margin: 4, marginTop: 2}}>
                            Recycling Made Easy
                </Typography></center>

                <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{margin: 4, marginBottom: 0}}>
                    <span><AutoCompleteSearch/></span> 
                    {
                        //<span><Button onClick = {setItemAndChangeScreen} color="primary" variant="contained">Upload Image</Button></span>
                    }
                    <Stack direction = "row" justifyContent="center">
                        <input type="file" name="file" onChange={handleFileChange} />
                        <Button onClick={handleSubmit}>Upload Image</Button>
                    </Stack>

                </Stack>
                </Box>
                <Stack alignItems="center" sx={{marginBottom: 0, marginTop: 0}}>
                    <IconButton size = '1' justifyContent="center"><Link to="body" spy={true} smooth={true}><ExpandMoreIcon/></Link></IconButton>
                </Stack>
                </div>
                </div>
            
                <Box id = "body" sx={{backgroundColor:"#0C6BB9", height: '500', marginTop: -1}}>
                    <Typography variant="h3" align="center" sx={{margin: 4, color: "secondary.contrastText"}}>
                        Research Based Recycling Models
                    </Typography>

                    
                            <img style={{height:'50%', width: "50%", marginLeft: '10px'}}src={graph1}/>
                     

                    <Typography variant="body2" sx={{margin: 4}}>                        {/* TODO: Change this text/body */}
                        
                        
                        asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                         
                    </Typography>
                </Box>


                
                    
                    


            </Stack>

            

        </ThemeProvider>
        
        
    );
};
  
//export {user_latitude, user_longitude}
export default LandingPage;