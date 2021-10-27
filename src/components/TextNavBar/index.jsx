import PropTypes from 'prop-types'

import './styles.css'

const TextNavBar = ({ text }) => {
  return (
    <div className="text-container">
      <span className="text-b">{text}</span>
    </div>
  )
}

TextNavBar.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextNavBar
