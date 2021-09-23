
import styled from "styled-components"


export const Container = styled.div`
width: 100%;
padding: 0 42px;
`

export const InputContainer = styled.div`
width: 300px;
margin-top:50px;
display:flex;
flex-direction: column;
`

export const StyledInput = styled.input`
color:#595959;
padding: 10px;
margin-bottom: 10px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
border-radius: 3px;
&:focus::placeholder {
  color: transparent;
}

&.file{
  display:none
}
`
export const StyledButton = styled.button`
width: 114px;
min-width: 114px;
height:36px;
border-radius:4px;
background-color: #407eff;
border:none;
color:#fff;
`
export const StyledLabel = styled.label`
  display: flex;
  justify-content:center;
  align-items: center;
  justify-content: space-around;
   width: 90px;
   height: 42px;
   margin-bottom:10px;
   padding: 0 25px;
   border:  1px solid #407EFF;
   border-radius:4px;
  cursor: pointer;
  color:#407EFF;
`

