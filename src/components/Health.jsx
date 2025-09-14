import React from 'react'
import Footer from '../components/Footer.jsx';
import healthdata from '../Blogdata/Healthdata.jsx';
import { Link } from 'react-router-dom';

const Health = () => {

  
  return (
    <div>
       <div className='bt'>  
        <h1 className='ht'>𝐇𝐞𝐚𝐥𝐭𝐡</h1>
        <p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptates.</p>
   
    <div className='bty1'>
      
  
      {healthdata.map((ele, index) => (
        <div className='but12' key={index}>
          <div>
            <Link to={`/health/${ele.id}`}>     
                   <img className='im6' src={ele.img} alt={ele.heading} />
                   </Link>
 
          </div>
          <div>
            <h4 className='hb1'><b>{ele.heading}</b></h4>
            <img className='im2' src='./public/images/e11.jpg' alt='Isabella ava' />
            <b>Isabella ava</b>
          </div>
        </div>
      ))}
    </div>
    <Footer/>

    </div>
   
















    </div>
  )
}

export default Health
