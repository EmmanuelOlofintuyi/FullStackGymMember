import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper, Button } from '@mui/material';
import './stylesheet/GymMember.css';


export default function GymMember() {
const paperStyle= {padding:'50px 20px', width:600,margin:"20px auto"}
const [name, setName]=React.useState('')
const [email, setEmail]=React.useState('')
const [dob, setDob]=React.useState('')
const [weight, setWeight]=React.useState('')
const [gymMembers,setGymMembers]=React.useState([])
const handleClick=e=>{
    e.preventDefault()
    const gymMember={name, email, dob, weight}
    console.log(gymMember)
    fetch("http://localhost:8080/gym_member/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(gymMember)
}).then(()=>{
    console.log("New gym member added")
})
}

React.useEffect(()=>{
    fetch("http://localhost:8080/gym_member/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setGymMembers(result)
    }
    )
},[])
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1><u>Add Gym Member</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Gym Member Name" variant="outlined"fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Gym Member Email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Gym Member DOB" variant="outlined" fullWidth
      value={dob}
      onChange={(e)=>setDob(e.target.value)}
      />
      <TextField id="outlined-basic" label="Gym Member Weight" variant="outlined" fullWidth
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}     
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
      </Button>
    </Box>
    {name}
    {email}
    {dob}
    {weight}
    </Paper>
    <h1>Gym Members</h1>
    <Paper elevation={3} style={paperStyle}>
      {gymMembers.map(gymMember=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={gymMember.id}>
            Id:{gymMember.id}<br/>
            Name:{gymMember.name}<br/>
            Email:{gymMember.email}<br/>
            DOB:{gymMember.dob}<br/>
            Age:{gymMember.age}<br/>
            SuggestedCalories:{gymMember.suggestedCalories}
        </Paper>
      ))}
    </Paper>
    </Container>
  );
}
