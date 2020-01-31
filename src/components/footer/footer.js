import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo">
      <p>&copy; {year}</p>
    </footer>
  )
}

export default Footer
