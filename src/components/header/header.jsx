import styled from "styled-components"
import { StyledButton } from "../users/styles"

const Header = ({ text, onClick, buttonText }) => {

  return (
    <StyledDiv>
      <StyledText>{text}</StyledText>
      <StyledLine />
      <StyledButton onClick={onClick}>{buttonText}</StyledButton>
    </StyledDiv>
  )
}
export default Header
const StyledDiv = styled.div`
display: flex;
align-items: center;
`

const StyledText = styled.div`
min-width: 100px;
font-family: 'Roboto',sans-serif;
font-size: 18px;
font-weight: 600;
line-height: 22px;
color: #2D3446;
padding:25px 0;
`
const StyledLine = styled.div`
width: 100%;
height: 3px;
background-color: #E1E6EC;
margin: 0 20px;
`


