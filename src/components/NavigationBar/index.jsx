import NavBrowser from 'components/NavBrowser'
import TextNavBar from 'components/TextNavBar'
import UserProfile from 'components/UserProfile'
import './styles.css'

const NavigationBar = () => {
  return (
    <nav className="navigation-bar-container">
      <ul>
        <li>
          <img
            className="logo-navbar"
            src="https://camo.githubusercontent.com/8f45fc7dcd14d26cbbce614c024bd17eadf0e6ada4d948ab74a96571461b74a8/68747470733a2f2f6173736574732e6272616e642e6d6963726f73697465732e6e6574666c69782e696f2f6173736574732f34393366356262612d383161342d313165392d626637392d3036366234393636346166365f636d5f31343430772e706e673f763d3439"
            alt="NetflixLogo"
          />
        </li>
        <div className="contaiter-texts-op">
          <li className="text-li-navbar">
            <TextNavBar text="Inicio"></TextNavBar>
          </li>
          <li className="text-li-navbar">
            <TextNavBar text="Series"></TextNavBar>
          </li>
          <li className="text-li-navbar">
            <TextNavBar text="Peliculas"></TextNavBar>
          </li>
          <li className="text-li-navbar">
            <TextNavBar text="Novedades populares"></TextNavBar>
          </li>
          <li className="text-li-navbar">
            <TextNavBar text="Mi lista"></TextNavBar>
          </li>
          <li className="text-li-navbar">
            <TextNavBar text="Ver de nuevo"></TextNavBar>
          </li>
        </div>
        <li className="navbrowser-container">
          <NavBrowser></NavBrowser>
        </li>
        <li>
          <img
            className="nav-bell-container"
            src="/assets/img/NavBrowser/Bell.svg"
            alt="bell"
          />
        </li>
        <li>
          <UserProfile></UserProfile>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
