import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function Sliderrange(props){
   const[slidervalue,setSliderValue] = useState(0);
    function valuetext(value) {
        return `${value}°C`;
      }
    return(
        <>
        <div style={{width:'40%' ,padding :'0px 10px'}}>
            <div><p>{props.title}</p></div>
            <div><h2>{slidervalue}</h2></div>
        <Box sx={{ width: 600 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={props.min}
        max={props.max}
        onChange={(e)=>{setSliderValue(e.target.value)}}
      />
      {/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </Box>
        {/* </div> */}
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div><p>{props.symbol}{props.min}</p></div>
            <div><p>{props.symbol}{props.max}</p></div>
        </div>
        </div>
        </>
    )
}

export default Sliderrange;