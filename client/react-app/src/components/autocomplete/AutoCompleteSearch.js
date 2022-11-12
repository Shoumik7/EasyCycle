import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
//import {user_latitude, user_longitude} from "../../pages/LandingPage"


let item = ''
let nearest_recycling_center_name = '';
let nearest_recycling_center_addr = '';


export default function FreeSolo() { 
  let navigate = useNavigate();

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}
      <Autocomplete 
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={recycleList.map((option) => option.item)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={(event, value) => {
          item = value;
          console.log(item);
          let url = 'http://localhost:5000/' + item + '/' + localStorage.getItem('user_latitude') + '/' + localStorage.getItem('user_longitude');
          fetch(url).then(response => response.json()).then(data => {
            console.log(data);
            nearest_recycling_center_name = data.nearest_recycling_center_name;
            nearest_recycling_center_addr = data.nearest_recycling_center_addr;
            navigate('/user-output');
          })
          .catch(err => console.error(err));
          
        }}
      />
    </Stack>
  );
}

// List of Recyclable Goods
const recycleList = [
    {item: "Plastic Bottle", value: 'hi'},
    {item: "Aluminum Can"},
    {item: "Glass Bottle"},
    {item: "Mattress"},
    {item: "Sheet of Paper"},
    {item: "Cardboard"},
    {item: "Plastic Jug"},
    {item: "Plastic Bag"},
    {item: "Plastic Cup"},
    {item: "Paper Plate"},
    {item: "Television"},
    {item: "Soap/Detergent/Shampoo Bottle"},
    {item: "Magezine"},
    {item: "Envelope"},
    {item: "Scrap Metal"},
    {item: "Newspaper"},
    {item: "Batteries"},

];

export {item, nearest_recycling_center_name, nearest_recycling_center_addr};