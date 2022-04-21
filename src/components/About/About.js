import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import myPic from "../../assets/pics/profile_pic.jpeg";


const About = () => {
  return (
    <>
        <Box minHeight="85vh">
        <Grid justifyContent="center" container padding={2} spacing={2}>
            <Grid item xs={12} md={4}>
                <Avatar alt="Picture of Me!" src={myPic} sx={{width: 1, height: 1}}></Avatar>
            </Grid> 

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={3}> 
            <h1>Jordan Tehranchi</h1>
            <p>lorem asdsa d asd asd asd asd a sd asd a sd asd as d asd as d</p>
            </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default About