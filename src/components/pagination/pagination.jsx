import styled from "styled-components"
import { ReactComponent as Prev } from '../assets/pagination/previous.svg'
import { ReactComponent as Next } from '../assets/pagination/next.svg'
const Pagination = ({ page, isPreviousData, setPage }) => {

  return (
    <Cointanier>
      <Button onClick={() => setPage(1)}>First Page</Button>
      <Button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        <Prev />
      </Button>{' '}
      <Div> {page}</Div>
      <Button
        onClick={() => {
          if (!isPreviousData) {
            setPage(old => old + 1)
          }
        }}
        //Api doesn't have has.more property beacause i disable Button manualy
        disabled={page === 20}
      >
        <Next />
      </Button>
      <Button onClick={() => setPage(10)}>Last Page</Button>
    </Cointanier>
  )
}

const Cointanier = styled.div`
width: 100%;
margin-top:80px;
padding: 50px 0 20px 20px;
border: 1px solid #E9E9E9;
box-sizing: border-box;
`
const Button = styled.button`
background: #FFFFFF;
border: 1px solid #E9E9E9;
padding: 4px 10px;
margin:0 8px;
box-sizing: border-box;
border-radius: 4px;
font-family: 'Helvetica Neue',sans-serif;
font-size: 12px;
line-height: 18px;
&:active{
background: #407EFF;;
color: #fff;
}
&:disabled{
 opacity:0.5;
}
`
const Div = styled.div`
display: inline;
height: 25px;
width: 25px;
font-size: 16px;
font-weight: 600;
color: black;
border:1px solid black;
border-radius:50%;
padding: 3px 8px;
margin-right: 4px;
`


export default Pagination