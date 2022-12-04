import React from 'react'
import Logo from "../images/logo.svg"
import "./Top.css"
import {useState} from "react"
import { FaChevronDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom"


function Top(props) {
    const [menu,setMenu]=useState("none")
    
    const clickhandler=()=>{
        if(menu=="none"){
            setMenu("block")
        }else{setMenu("none")}
    }
  return (
    <div className='top'>
        <div className='logo'>
        <Link to="/" id='logo'><img src={Logo}/></Link>
        </div>
        <div className='categ' onClick={clickhandler}>Categories<icon id="icon"><FaChevronDown/></icon>
        <div><ul id="ul" style={{display:menu}}>
            
            <li><Link className='categlink' to="/children">Children's</Link></li>
            <li><Link className='categlink' to="/history">History</Link></li>
            <li>Business</li>
            <li>Psychology</li>
        </ul></div></div>
        <Link to="/search" id='link'><div id='searchtop'>Search by Title or Author       .<BsSearch/></div></Link>
        <div className='cart'>{props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
            <FaShoppingCart/>.    Cart</div>
    </div>
  )
}

export default Top