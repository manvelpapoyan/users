import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'



const fetchUsers = async (page = 1, sort = '', order = '') => {
  const res = await fetch(`https://brainstorm-interview-task.herokuapp.com/users?_page=${page}&_sort=${sort}&_order=${order}`)

  return res.json()
}




export default function Users() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(['projects', page, sort, order], () => fetchUsers(page, sort, order), { keepPreviousData: true })

  const sorting = (sort, order) => {

    setSort(sort)
    setOrder(order)


  }
  return (
    <Container >
      <>
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
            {data?.map(user => <User key={user.id} props={user} />)}
          </tbody>
        </Table>
        <span>Current Page: {page}</span>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (!isPreviousData) {
              setPage(old => old + 1)
            }
          }}
          //Api doesn't have has.more property beacause i disable button manualy
          disabled={page === 10}
        >
          Next Page
        </button>
        <button onClick={() => sorting()}>Sorting</button>
        <button onClick={() => setPage(10)}>last</button>
        <button onClick={() => setPage(1)}>first</button>
      </>


    </Container>

  )
}



const Container = styled.div`
width: 100%;
background-color: #fff;
padding: 0 42px;
overflow-x: auto;


`

const Table = styled.table`
width: 100%;
border-collapse: collapse;
min-width: 1100px;

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
  text-align: center;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #878787;
  padding: 10px 0;

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
