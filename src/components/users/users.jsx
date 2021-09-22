import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import { getDeletedUser, getUsers } from '../../app/api'
import CreateUser from './createUser'
import EditUser from './editUser'
import User from './user'

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
  } = useQuery(['projects', page, sort, order], () => getUsers(page, sort, order))



  const datas = {
    "id": Math.random(),
    "name": "AAA",
    "email": "aramayishovhannisyan@gmail.com",
    "photo": "https://graph.facebook.com/3341611219220/picture?type=square",
    "location": "New York",
    "registeredDate": "2020-10-22T06:47:56.065Z",
    "lastActiveDate": "2020-10-22T06:47:56.065Z",
    "disabled": false
  }
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
          disabled={page === 20}
        >
          Next Page
        </button>
        <button onClick={() => sorting('name', 'asc')}>Sorting</button>
        <button onClick={() => setPage(10)}>last</button>
        <button onClick={() => setPage(1)}>first</button>
      </>
      <CreateUser />
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
box-sizing:border-box;
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




