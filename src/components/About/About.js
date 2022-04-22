import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import myPic from "../../assets/pics/profile_pic.jpeg";
import backgroundPic from "../../assets/pics/bernd-dittrich-MAUO2zOa8O4-unsplash.jpg";
import "./about.css"
const About = () => {
  return (
    <>
        <Box minHeight="87vh" style={{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundImage: "url(" + backgroundPic + ")"}}>
        <Grid justifyContent="center" container padding={2} spacing={2}>
            <Grid item xs={12} md={4}>
                <Avatar alt="Picture of Me!" src={myPic} sx={{width: 1, height: 1}}></Avatar>
            </Grid> 

            <Grid item md={1}></Grid>

            <Grid item xs={12} md={3} className="about"> 
            <h1>Jordan Tehranchi</h1>
            <h2>Full-Stack Software Engineer</h2>
            <p>Full-Stack Software Engineer, Front-End Developer, Software Consultant, and Entrepeneur with 3+ years of technical work experience </p>
            </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default About