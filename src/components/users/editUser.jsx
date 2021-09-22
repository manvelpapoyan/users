import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSingleUser } from "../../app/api";


const EditUser = () => {
  const [user, setUser] = useState()
  const data = {}




  useEffect(() => {
    (async function () {
      const { search } = window.location
      const id = new URLSearchParams(search).get('id')
      const userData = await getSingleUser(id)
      setUser(userData)
    })()
  }, [])


  return (
    <Container>




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
export default EditUser