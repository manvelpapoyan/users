import { getDeletedUser } from "../../app/api"

const User = ({ props }) => {


  const { photo, name, location, registeredDate, lastActiveDate, email, disabled } = props
  return (
    <tr >
      <td>Ch</td>
      <td><img style={{ cursor: 'pointer' }} src={photo} alt='' onClick={() => console.log(props)} /></td>
      <td><div style={{ cursor: 'pointer' }} onClick={() => getDeletedUser(props.id)}>{name}</div></td>
      <td> {location}</td>
      <td>{registeredDate} </td>
      <td> {lastActiveDate}</td>
      <td>{email} </td>
      <td>{disabled} </td>
    </tr>
  )
}


export default User