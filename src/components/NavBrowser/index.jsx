import { useState } from 'react'
import './styles.css'

const NavBrowser = () => {
  const [flag, setFlag] = useState(false)

  const handlerFocus = () => {
    setFlag((flag) => !flag)
  }

  const handlerBlur = () => {
    setFlag((flag) => !flag)
  }

  return (
    <div className="browser-container" style={{ width: flag ? '8em' : '4em' }}>
      <img
        className="icon-browser"
        src="/assets/img/NavBrowser/search.svg"
        alt="glu"
      />
      <input
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        className="input-browser"
        type="text"
      />
    </div>
  )
}

export default NavBrowser
