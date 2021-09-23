import { deleteUser, getUsers } from "../../app/api"
import { useHistory } from "react-router"
import { ReactComponent as Edit } from '../assets/edit.svg'
import { ReactComponent as Email } from '../assets/email.svg'
import { ReactComponent as Delete } from '../assets/delete.svg'



const User = ({ props }) => {
  const { photo, name, location, registeredDate, lastActiveDate, id } = props
  const history = useHistory()

  const handleClick = async () => {

    await deleteUser(props.id)
    await getUsers()
    history.push('/')

  }

  return (
    <tr >
      <td><Edit style={{ cursor: 'pointer' }} onClick={() => history.push(`/edit?id=${id}`)} /></td>
      <td><img src={photo} alt='' /></td>
      <td><div  >{name}</div></td>
      <td> {location}</td>
      <td>{registeredDate} </td>
      <td> {lastActiveDate}</td>
      <td><Email /> </td>
      <td><Delete style={{ cursor: 'pointer' }} onClick={handleClick} /> </td>
    </tr>
  )
}




export default User