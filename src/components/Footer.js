import React from 'react'

const Footer = () => {
    let today = new Date()
  return (
    <footer>
                <h5>Robbievans - {today.getFullYear()}</h5>
            
    </footer>
  )
}

export default Footer