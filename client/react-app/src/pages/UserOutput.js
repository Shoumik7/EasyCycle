import * as React from 'react' 
import {Box, ThemeProvider, CssBaseline, Typography} from "@mui/material"
import { Stack } from '@mui/system';
import theme from '../css/theme.js'
import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";
import {item, nearest_recycling_center_name, nearest_recycling_center_addr} from "../components/autocomplete/AutoCompleteSearch";
import { Wrapper } from "@googlemaps/react-wrapper";
import Mapping from '../components/Mapping.js';

// The General Landing Page for all users
// TODO: We still have to add actions for all buttons (to sign up/login)
const UserOutput = () => {
/*
    function MapDirectionsRenderer(props) {
        const [directions, setDirections] = useState(null);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const { places, travelMode } = props;
      
          const waypoints = places.map(p => ({
            location: { lat: p.latitude, lng: p.longitude },
            stopover: true
          }));
          const origin = waypoints.shift().location;
          const destination = waypoints.pop().location;
      
          const directionsService = new google.maps.DirectionsService();
          directionsService.route(
            {
              origin: origin,
              destination: destination,
              travelMode: travelMode,
              waypoints: waypoints
            },
            (result, status) => {
              console.log(result)
              if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
              } else {
                setError(result);
              }
            }
          );
        });
      
        if (error) {
          return <h1>{error}</h1>;
        }
        return (
          directions && (
            <DirectionsRenderer directions={directions} />
          )
        );
      }
      */

    let navigate = useNavigate()

    return ( 
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
                
                <Typography variant="h4" align="center" sx={{margin: 4, color: "black"}}>
                    Nearest Recycling Center: {nearest_recycling_center_name}
                </Typography>
                <Typography variant="h5" align="center" sx={{margin: 4, color: "black"}}>
                    Address: {nearest_recycling_center_addr}
                 </Typography>
                
                <center><Mapping></Mapping></center>
                


        </ThemeProvider>
        
        
    );
};
  
export default UserOutput;