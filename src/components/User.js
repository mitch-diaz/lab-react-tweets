const User = ({userData}) => {
  return (
    <span className="userData">
        <span className="name"> {userData.name} </span>
        <span className="handle"> {userData.handle} </span>
    </span>
  )
}

export default User