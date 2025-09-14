import React from 'react'

import Footer from '../components/Footer.jsx';

const Contact = () => {
  return (
    <div className='cn'>
      <h1 className='cn1'>𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐮𝐬</h1>
      <p className='pp'>If you have a question regarding our services, feel free to contact us using the form below.</p>
       <div className='cn2'> 
      <div className='cn3'>
        <div  className='cn5'>      
        <input className='cn6' type='text' placeholder='Enter your name*'/>
        <input  className='cn6'type='text' placeholder='Enter your Subject'/>
        <input  className='cn6'type='email' placeholder='Enter your Email*'/>
        <input className='cn6' type='number'placeholder='Enter your Phone number'/>
        </div>
        <div>
          <textarea className='cn7' placeholder='Enter your Message*'/>
        </div>
        <button className='cn8'>Submit</button>
      </div>
     <div>
      <h1 className='cn9'>𝐀𝐝𝐯𝐞𝐫𝐭𝐢𝐬𝐞 𝐰𝐢𝐭𝐡 𝐮𝐬</h1>
      <div className='cn4'>
      <h4 className='hhh'>𝐀𝐝𝐝𝐫𝐞𝐬𝐬</h4>
      <p className='pp'>#302, 5th Floor, ALHK-2247 ek, Settlers Lane, New York.</p>
<br/>
<br/>
    <h4 className='hhh'>𝐄𝐦𝐚𝐢𝐥 𝐀𝐝𝐝𝐫𝐞𝐬𝐬</h4>

 <p className='pp'>mail@example.com</p>
 <br/>
<br/>

<h4 className='hhh'>𝐏𝐡𝐨𝐧𝐞 𝐍𝐮𝐦𝐛𝐞𝐫</h4>
<p className='pp'>+12 324-016-695</p>
<br/>
<br/>


      </div>
      </div>







       </div>






<Footer/>


    </div>
  )
}

export default Contact
