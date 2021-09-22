import { useState } from "react";
import styled from "styled-components";
import { getCreatedUser } from "../../app/api";
const initialFormData = Object({
  name: "",
  email: "",
  location: '',
  photo: '',
  "registeredDate": "2020-10-22T06:47:56.065Z",
  "lastActiveDate": "2020-10-22T06:47:56.065Z",
  "disabled": false
});


const CreateUser = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [value, setValue] = useState(undefined);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.fil)
    updateFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });

  };
  const handleSubmit = (e) => {
    e.preventDefault()
    getCreatedUser(formData)
    setValue('')
  };

  return (
    <Container>
      <StyledInput name="name" onfocus="this.placeholder=''" value={value} placeholder='User Name' onChange={handleChange} />
      <StyledInput type='file' value={value} name='photo' onChange={handleChangePhoto} />
      <StyledInput name="email" value={value} placeholder='Email' onChange={handleChange} />
      <StyledInput name="location" value={value} placeholder='Location' onChange={handleChange} />



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