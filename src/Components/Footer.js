import React from 'react'
import {FaFacebookSquare} from "react-icons/fa"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/children">Children's</Link>
            <Link to="/history">History</Link>
            <Link to="/">Business</Link>
            <Link to="/">Psychology</Link>
        </div>
        <div>Follow us on Social Media
            <div>
            <FaFacebookSquare/>
            </div>
        </div>
    </div>
  )
}

export default Footer






