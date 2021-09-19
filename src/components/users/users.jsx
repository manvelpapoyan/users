import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Users() {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('https://brainstorm-interview-task.herokuapp.com/users?_limit=10')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])


  console.log(typeof users)

  return (
    <Container >
      <Table>
        <thead>
          <tr>
            <th>Ch</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Location</th>
            <th>Registered date</th>
            <th>Last active date</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <User key={user.id} props={user} />)}
        </tbody>
      </Table>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #fff;
padding: 0 42px;
overflow-x: auto;

`

const Table = styled.table`
width: 100%;
border-collapse: collapse;

tr{
   box-sizing: border-box;
}

th{
  padding: 20px 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #788195;
  border: none;
  background: #F1F3F5;


}
td{

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #878787;
  img{
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }
}

`



const User = ({ props }) => {
  const { photo, name, location, registeredDate, lastActiveDate, email, disabled } = props
  return (
    <tr >
      <td>Ch</td>
      <td><img src={photo} alt='' /></td>
      <td>{name}</td>
      <td> {location}</td>
      <td>{registeredDate} </td>
      <td> {lastActiveDate}</td>
      <td>{email} </td>
      <td>{disabled} </td>
    </tr>
  )
}
