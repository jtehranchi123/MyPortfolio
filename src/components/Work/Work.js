import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from "../Card"
import "./work.css"
import backgroundPic from "../../assets/pics/road-ahead-yunA0Ko3FHc-unsplash.jpg"
const Work = () => {
  let projects = [
    {
        title: "Clue Game",
        github: "https://github.com/jtehranchi123/Clue-Game",
        heroku: "https://github.com/jtehranchi123/Clue-Game",
        image: "https://images.unsplash.com/photo-1554696468-19f8c7a71ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Complete Java Clue Game application with interactive GUI, CPU players, and components from Clue board game. Written with ~5000 lines of Java Code, paired with JUnit testing code."
    },
    {
        title: "Note-Taker App",
        github: "https://github.com/jtehranchi123/noteTakingApp",
        heroku: "https://note-taker-app-jtehranchi.herokuapp.com/",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Coming soon...lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    {
        title: "Blog Website",
        github: "https://github.com/",
        heroku: "https://dashboard.heroku.com/",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Coming soon...lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    // {
    //     title: "Project 4",
    //     github: "https://github.com/",
    //     heroku: "https://dashboard.heroku.com/",
    //     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    // },
    // {
    //     title: "Project 5",
    //     github: "https://github.com/",
    //     heroku: "https://dashboard.heroku.com/",
    //     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    // },
    // {
    //     title: "Project 6",
    //     github: "https://github.com/",
    //     heroku: "https://dashboard.heroku.com/",
    //     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    // },
]
    

  return (
    <>
        <Box minHeight="85vh" padding={2} style={{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundImage: "url(" + backgroundPic + ")"}}>
        <Grid container justifyContent="center" className="work">
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