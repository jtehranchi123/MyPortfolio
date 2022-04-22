import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from "../Card"
import backgroundPic from "../../assets/pics/road-ahead-yunA0Ko3FHc-unsplash.jpg"
const Work = () => {
  let projects = [
    {
        title: "Project 1",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 1...."
    },
    {
        title: "Project 2",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 2...."
    },
    {
        title: "Project 3",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 3...."
    },
    {
        title: "Project 4",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 4...."
    },
    {
        title: "Project 5",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 5...."
    },
    {
        title: "Project 6",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Project 6...."
    },
]
    

  return (
    <>
        <Box minHeight="85vh" padding={2} style={{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundImage: "url(" + backgroundPic + ")"}}>
        <Grid container justifyContent="center">
            <h1> My Projects</h1>
        </Grid>
        <Grid container spacing={4} padding={2} justifyContent="center">
            {projects.map(project => 
                <Grid item>
                    <Card description={project.description} title={project.title} github={project.github} heroku={project.heroku} image={project.image}/>
                </Grid>
            )}
        </Grid>
        </Box>
    </>
  )
}

export default Work