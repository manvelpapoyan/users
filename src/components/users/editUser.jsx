import { useEffect, useState } from "react";
import { getSingleUser, updatedUser } from "../../app/api";
import { useHistory } from "react-router";
import { Container, InputContainer, StyledButton, StyledInput, StyledLabel } from "./styles";
import Header from "../header/header";
import { ReactComponent as Photo } from '../assets/photo.svg'



const data = {}

const EditUser = () => {
  const history = useHistory()
  const { search } = window.location
  const id = new URLSearchParams(search).get('id')
  const [user, setUser] = useState({ name: '', email: '', location: '', photo: null })

  useEffect(() => {
    (async function () {
      const userData = await getSingleUser(id)
      setUser(userData)
    })()
  }, [id])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    data[e.target.name] = e.target.value
  };

  const handleChangePhoto = (e) => {
    setUser({ ...user, [e.target.name]: e.target.files[0] })
    data[e.target.name] = e.target.files[0]
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedUser(id, data)
    history.push('/')
  };
  return (

    <Container>
      <Header text='Edit User' buttonText=" All Users" onClick={() => history.push('/')} />
      <InputContainer>
        <StyledInput name="name" value={user.name} placeholder='User Name' onChange={handleChange} />
        <StyledLabel>
          <Photo />
          Photo
          <StyledInput className='file' type='file' name='photo' onChange={handleChangePhoto} />
        </StyledLabel>
        <StyledInput name="email" value={user.email} placeholder='Email' onChange={handleChange} />
        <StyledInput name="location" value={user.location} placeholder='Location' onChange={handleChange} />
        <StyledButton disabled={Object.keys(data).length === 0 ? true : ''} onClick={handleSubmit}>Save</StyledButton>
      </InputContainer>
    </Container >
  );
};





export default EditUser