import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { getUsers } from '../../app/api'
import Header from '../header/header'
import Pagination from '../pagination/pagination'
import { Container } from './styles'
import User from './user'
import { ReactComponent as Sort } from '../assets/sort.svg'

export default function Users() {
  const history = useHistory()
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')

  const {
    data,
    isPreviousData,
  } = useQuery(['projects', page, sort, order], () => getUsers(page, sort, order), { keepPreviousData: true })

  const sorting = (sort) => {
    setSort(sort)
    if (order === 'asc') {
      setOrder('desc')
    } else {
      setOrder('asc')
    }
  }


  return (
    <Container >
      <Header text='All Users' buttonText={'New User'} onClick={() => history.push('/new')} />
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name<Sort onClick={() => sorting('name')} /></th>
              <th>Location</th>
              <th>Registered date</th>
              <th>Last active date</th>
              <th>Email <Sort onClick={() => sorting('email')} /></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(user => <User key={user.id} props={user} />)}
          </tbody>
        </Table>
      </TableContainer>
      <Pagination page={page} isPreviousData={isPreviousData} setPage={setPage} />
    </Container>

  )
}





const TableContainer = styled.div`
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
  text-align: center;
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






