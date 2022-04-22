import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import backgroundPic from "../../assets/pics/road-ahead-lXfNil-rWFw-unsplash.jpg"

const Contact = () => {
    const [formState,setFormState] = useState({
        name: '',
        email: '',
        message: '',
        nameNeeded: false,
        messageNeeded: false,
        invalidEmail: false,
    });

    const handleInputChange = ({target:{name,value}}) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleNameBlur = () => {
        if(formState.name.length < 1){
            setFormState({
                ...formState,
                nameNeeded: true,
                messageNeeded: false,
                invalidEmail: false
            })
        }
    }
    const handleMessageBlur = () => {
        if(formState.message.length < 1){
            setFormState({
                ...formState,
                messageNeeded: true,
                nameNeeded: false,
                invalidEmail: false
            })
        }
    }

    const validateEmail = (inputText) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat)){
            return true;
        }
        else{
            return false;
        }
    }

    const handleEmailBlur = () => {
        if(!validateEmail(formState.email)){
            setFormState({
                ...formState,
                invalidEmail: true,
                nameNeeded: false,
                messageNeeded: false
            })
        }
    }

  return (
    <>
        <Box minHeight="85vh" style={{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:'no-repeat',backgroundImage: "url(" + backgroundPic + ")"}}>
        <Grid container justifyContent="center">
            <Grid item>
                <h1>Contact Me</h1>
            </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={3} padding={2}>
            <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input name="name" onBlur={handleNameBlur} onChange={handleInputChange} aria-describedby="my-helper-text" />  
            </FormControl>   
            </Grid>
            <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input name="email" onBlur={handleEmailBlur} onChange={handleInputChange} aria-describedby="my-helper-text" />  
            </FormControl>   
            </Grid>
            <Grid item xs={12} md={8} lg={7}>
                <TextField
                name="message"
                onChange={handleInputChange}
                label="Message"
                multiline
                onBlur={handleMessageBlur}
                rows={4}
                fullWidth
                />
            </Grid>
        </Grid>
        <Grid container justifyContent="center" padding={2}>
            <Grid item>
                <Button>Submit</Button>
            </Grid>
        </Grid>
        <Grid container justifyContent="center">
            {formState.nameNeeded ?
            <p> name is required! </p> : ''}
            {formState.messageNeeded ?
            <p> message is required! </p> : ''}
            {formState.invalidEmail ?
            <p> email is invalid! </p> : ''}
        </Grid>
        </Box>
    </>
  )
}

export default Contact