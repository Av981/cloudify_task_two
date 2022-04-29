import axios from "axios";
import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



const baseURL = "https://recruitingmonk-v2.azurewebsites.net/qna";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (

    <>
      <Box style={{textAlign:'center', marginTop:10, padding:10, backgroundColor:'grey'}}>
      <Typography variant="h2" style={{textDecoration:'underline', color:'brown'}}>ASK QUESTION </Typography>
      </Box>
        {
          post.map((user)=>{
            const {answers }= user;
            return(
              <Paper elevation={20} style={{backgroundColor:'tomato', width:1300, margin:'auto'}}>
              <Box style={{marginTop:50, backgroundColor:'skyblue',marginLeft:50, padding:10}}>
              <Grid container spacing={1}>
                
                <Grid item xs={4}>
                  
                    <Typography variant="h5" style={{textTransform:'uppercase',textDecoration:'underline'}}>{user.name}</Typography>
                  
                </Grid>
                <Grid item xs={4}>
                  
                  <Typography varient="h6" style={{textAlign:'right'}}>{user.username}</Typography>
                  
                </Grid>
                <Grid item xs={4}>
                  
                  <Typography style={{textAlign:'right'}}> Post on {user.date}</Typography>
                  
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" color="tomato"> Questions: {'  '}
                   {user.question}</Typography>
                  <Typography variant="body2">({user.desc})</Typography>
                </Grid>
                <Grid item xs={12} >
                 { 
                    answers.map((replyone)=>{
                      const {replies}=replyone;
                      console.log(replies.content);
                      return(
                        <>
                          <Typography variant="h6" color="green"> Answer: <Typography variant='subtitle2' style={{color:'#7B3F00'}}>(by {`${replyone.name}`})</Typography></Typography>
                          { `${replyone.content}` }
                          </>
                      )
                    })

                 }
                </Grid>
                
              </Grid>
            </Box>
            </Paper>

            )
          })
        }
      
    </>
  );
}