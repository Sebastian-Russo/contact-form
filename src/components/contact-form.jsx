import React, { useState } from 'react'; 
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


export const ContactForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({name: "", email: "", message: ""});

  const sendData = async () => {
    try {
      const API_BASE_URL = 'https://uzk3crusd9.execute-api.us-east-2.amazonaws.com/production/contact';
      const payload = {
        item: {
          id: Math.floor(Math.random() * (999999999 - 0 + 1)) + 999999999,
          name: data.name,
          email: data.email,
          message: data.message 
        }
      }
      const config = {
        method: 'PUT',
        payload,
        url: API_BASE_URL
      }  
      const request = await axios(config)
      console.log(request)
    } catch(err) {
      console.error(err)
    }
  }


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data)
    sendData()
  }

  return (
    <form onSubmit={handleSubmit} className={classes.paper}> 
      <Avatar className={classes.avatar}>
        <ContactMailIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
      <div className="row">
        <TextField 
            type="text" 
            name="name" 
            value={data.name} 
            placeholder="John Smith" 
            onChange={handleChange} 
            required 
            variant="outlined"
            margin="normal"
            fullWidth
            label="Name"
            autoFocus
            />
      </div>
      <div className="row">
        <TextField 
            type="email" 
            name="email" 
            value={data.email} 
            placeholder="email" 
            onChange={handleChange} required 
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            />
      </div>
      <div className="row">
        <TextField 
            type="textarea" 
            name="message" 
            value={data.message} 
            placeholder="Leave a comment :)" 
            onChange={handleChange} 
            required 
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Leave a comment :)"
            autoFocus
            />
      </div>
      <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          >
            Submit
          </Button>
    </form>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));