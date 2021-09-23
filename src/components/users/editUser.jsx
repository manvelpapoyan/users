import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSingleUser, updatedUser } from "../../app/api";
import { useHistory } from "react-router";
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
      <StyledInput name="name" value={user.name} placeholder='User Name' onChange={handleChange} />
      <StyledInput type='file' name='photo' onChange={handleChangePhoto} />
      <StyledInput name="email" value={user.email} placeholder='Email' onChange={handleChange} />
      <StyledInput name="location" value={user.location} placeholder='Location' onChange={handleChange} />
      <button disabled={Object.keys(data).length === 0 ? true : ''} onClick={handleSubmit}>Submit</button>
    </Container >
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
export default EditUser