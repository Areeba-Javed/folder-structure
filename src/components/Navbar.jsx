import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav' >
      <img className='image' src='./public/images/newsblog.png'/>
      <h1 className='heading' >Newsblog</h1>
      <input  className='search' type="text" value='search ,news ,article'/>
      <Link className='btn' to='/'><b>Home</b></Link>
      
  <a className='btn'  id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    <b>Menu</b>
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">
      <Link  to='/beauty'style={{textDecoration:'none'}}>Beauty</Link>
      </button></li>
      <li><button class="dropdown-item" type="button">
      <Link  to='/fashion'style={{textDecoration:'none'}}>Fashion and Style</Link>
      </button></li>
    
    <li><button class="dropdown-item" type="button">
      <Link  to='/health' style={{textDecoration:'none'}}>Health</Link>
    </button></li>
    <li><button class="dropdown-item" type="button">
    <Link  to='/lifestyle'style={{textDecoration:'none'}}>Lifestyle</Link>

      </button></li>
      <li><button class="dropdown-item" type="button">
    <Link  to='/error'style={{textDecoration:'none'}}>404 page</Link>

      </button></li>
      <li><button class="dropdown-item" type="button">
    {/* <a  href='/singlepost'style={{textDecoration:'none'}}>Single Post</a> */}

      </button></li>
  
  </ul>

  <a className='btn' href='./contact'><b>Contact</b></a>

      
      
    </div>
  )
}

export default Navbar
