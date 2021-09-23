import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { createUser } from "../../app/api";
import Header, { StyledButton } from "../header/header";
import { Container } from "./users";
const initialData = {
  "registeredDate": "2020-10-22T06:47:56.065Z",
  "lastActiveDate": "2020-10-22T06:47:56.065Z",
  "disabled": false
};


const CreateUser = () => {
  const history = useHistory()
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
      <Header text='New User' buttonText=" All Users" onClick={() => history.push('/')} />
      <InputContainer>
        <StyledInput name="name" value={name} placeholder='User Name' onChange={(e) => setName(e.target.value)} />
        <StyledInput type='file' name='photo' onChange={(e) => setPhoto(e.target.files[0])} />
        <StyledInput name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <StyledInput name="location" value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
        <StyledButton disabled={name === '' ? true : ''} onClick={handleSubmit}>Submit</StyledButton>
      </InputContainer>
    </Container>
  );
};




const InputContainer = styled.div`

width: 300px;
margin-top:50px;
display:flex;
flex-direction: column;
`
const StyledInput = styled.input`
color:red;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 3px;
&:focus::placeholder {
  color: transparent;
}
`
export default CreateUser