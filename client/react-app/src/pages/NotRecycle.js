import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../css/theme.js'
import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
import {item, nearest_recycling_center_name, nearest_recycling_center_addr, nearest_recycling_center_latitude, nearest_recycling_center_longitude} from "../components/autocomplete/AutoCompleteSearch";
import { Wrapper } from "@googlemaps/react-wrapper";
import Mapping from '../components/Mapping.js';

// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)
const NotRecycle = () => {


    let navigate = useNavigate()

    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
                
                <Typography variant="h2" align="center" sx={{margin: 4, color: "black"}}>
                    Unfortunately this item is not able to be recycled
                </Typography>
                <Button>Back to home</Button>
                                


        </ThemeProvider>
        
        
    );
};
  
export default NotRecycle;