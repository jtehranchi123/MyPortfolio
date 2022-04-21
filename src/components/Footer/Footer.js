import React from 'react'
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./footer.css"

const Footer = () => {
  return (
    <>
        <Grid className="footer" container justifyContent="center" spacing={2} padding={3}>
            <Grid item xs={12} md={3} >
                <a href="https://github.com/jtehranchi123" target="_blank"><GitHubIcon></GitHubIcon></a>
            </Grid>
            <Grid item xs={12} md={3} >
                <a href="https://linkedin.com/in/jordan-tehranchi" target="_blank"><LinkedInIcon></LinkedInIcon></a>
            </Grid>
            <Grid item xs={12} md={3} >
                <a href="mailto:jordan.tehranchi@yahoo.com" target="_blank"><EmailIcon></EmailIcon></a>
            </Grid>
        </Grid> 
    </>
  )
}

export default Footer