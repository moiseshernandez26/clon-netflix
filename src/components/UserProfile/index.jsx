import './styles.css'

const UserProfile = () => {
  return (
    <div className="generalprofile-container">
      <img
        className="imageprofile-container"
        src="/assets/img/CardCarousel/PeliculaDeArmando.jpeg"
        alt="UserImage"
      />
      <img
        className="dropdown-profile-container"
        src="/assets/img/NavBrowser/caret-down.svg"
        alt="Drop"
      />
    </div>
  )
}

export default UserProfile
