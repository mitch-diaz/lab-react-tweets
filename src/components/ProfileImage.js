const ProfileImage = ({image}) => {
  return (
    <div className="profileImage">
        <img
            src={image}
            className="profile"
            alt="profile"
        />
    </div>
  )
}

export default ProfileImage