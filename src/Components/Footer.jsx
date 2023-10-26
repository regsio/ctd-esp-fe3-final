import React from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
  const {theme, toggleTheme} = React.useContext(ContextGlobal)
  const footerStyles = {
    background: theme.background,
    color: theme.font
  }
  return (
    <footer style={footerStyles}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
