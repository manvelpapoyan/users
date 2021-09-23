import { useState } from "react";
import { useHistory } from "react-router";
import { createUser } from "../../app/api";
import Header from "../header/header";
import { Container, InputContainer, StyledButton, StyledInput, StyledLabel } from "./styles";
import { ReactComponent as Photo } from '../assets/photo.svg'



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
        <StyledLabel>
          <Photo />
          Photo
          <StyledInput className='file' type='file' name='photo' onChange={(e) => setPhoto(e.target.files[0])} />
        </StyledLabel>
        <StyledInput name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <StyledInput name="location" value={location} placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
        <StyledButton disabled={name === '' ? true : ''} onClick={handleSubmit}>Save</StyledButton>
      </InputContainer>
    </Container>
  );
};






export default CreateUser