import React from 'react';
import Footer from '../components/Footer.jsx';
import beautydata from '../Blogdata/Beautydata.jsx'
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';

const Beauty = () => {
  

  return (
    <div className='bt'>  
        <h1 className='ht'>𝐁𝐞𝐚𝐮𝐭𝐲</h1>
        <p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptates.</p>
   
    <div className='bty1' >
      
  
      {beautydata.map((ele, index) => (
        <div className='but12' key={index}>
          <div>
            <Link  to={`/beauty/${ele.id}`}>
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
      );
};

export default Beauty;
