import React from 'react'
import styled from 'styled-components'
import { menuItems } from './data'

export default function Menu() {
  return (
    <Wrapper>
      <Ul>
        {menuItems.map((item) => <Li key={item.id} className={item.active ? 'active' : ''}>
          {item.icon}
          {item.name}</Li>)}
      </Ul>
    </Wrapper>

  )
}

const Wrapper = styled.div`
height: 100%;
width: 240px;
background-color:#272D3E;
`
const Ul = styled.ul`
margin:70px 0 0;
height: 100%;
padding: 48px 0 0;
background-color:#2D3347;

`
const Li = styled.li`
display:flex;
padding: 14px 32px;
list-style-type: none;
color:#788195;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;

svg{
  padding-right: 31px;
}

&.active{
color:#fff;
cursor: pointer;

svg path{
  fill:#fff;
}
}


`
