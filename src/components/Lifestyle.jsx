import React from 'react'
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import lifestyledata from '../Blogdata/Lifestyledata.jsx';




const Lifestyle = () => {
  
  return (
    <div className='fst'>
<h1 className='ht'>𝐋𝐢𝐟𝐞𝐬𝐭𝐲𝐥𝐞</h1>
<p className='pp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptates.</p>
          <div className='fs1'>
      
  
      {lifestyledata.map((ele, index) => (
                  <div className='fs' key={index}>
                    <Link to={`/lifestyle/${ele.id}`}>  
                  <img className='imf' src={ele.img} alt={ele.heading}/>
                  </Link>
                  <br/>
                  <h4 className='stl'><b>{ele.heading}</b></h4>
                  <img  className='im2' src='./public/images/e11.jpg'/>
                  <b>Isabella ava</b>
                  </div>
        
        ))}
    </div>
<Footer/>
      
    </div>
  )
}

export default Lifestyle
