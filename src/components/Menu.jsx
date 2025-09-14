import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'  >
      <Link to="/beauty">
        <button className='dsn' >
            <img className='image1' src='./public/images/bath-tub.png'/>
            <h4>
            Beauty
            </h4>             

            </button>  
            </Link>
            <Link to="/fashion">
            <button className='dsn'>
            <img className='image1' src='./public/images/woman.png'/>
            <h4>
            Fashion and style
            </h4>
            
            </button>
            </Link>      
            <Link to="/health">  
            <button className='dsn'>
            <img className='image1' src='./public/images/cutlery.png'/>
            <h4>
            Food and wellness
            </h4>
            
            </button> 
            </Link>
            <Link to="/lifestyle"> 
            <button className='dsn'>
            <img className='image1' src='./public/images/pie-chart.png'/>
            <h4>
            Life style
            </h4>
            
            
            </button>      
            </Link>
  

    </div>
  )
}

export default Menu
