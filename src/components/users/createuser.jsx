import { useState } from "react";
import styled from "styled-components";
import { createUser } from "../../app/api";
const initialData = {
  "registeredDate": "2020-10-22T06:47:56.065Z",
  "lastActiveDate": "2020-10-22T06:47:56.065Z",
  "disabled": false
};


const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...initialData, name, email, location, photo }
    createUser(data)
    setPhoto(null)
    setName('')
    setEmail('')
    setLocation('')

  };


  return (
    <Container>
      <StyledInput name="name" value={name} placeholder='User Name' onChange={(e) => setName(e.target.value)} />
      <StyledInput type='file' name='photo' onChange={(e) => setPhoto(e.target.files[0])} />
      <StyledInput name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <StyledInput name="location" value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />



      <button onClick={handleSubmit}>Submit</button>
    </Container>
  );
};



const Container = styled.div`
width: 300px;
display:flex;
flex-direction: column;
`
const StyledInput = styled.input`
color:red;
padding: 10px;
margin: 5px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 3px;
&:focus::placeholder {
  color: transparent;
}
`
export default CreateUser