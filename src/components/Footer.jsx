import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <div className='ft'>
              {/* div 1 */}
             <div className='ft1'>
              <div className='ft2'>
             <img className='image' src='./public/images/newsblog.png'/>
             <h1 className='heading' >Newsblog</h1>
             </div>
             <h4 className='ft3'>© 2020. All Rights Reserved</h4>
             <h6>Design by W3Layouts</h6>
             </div>
               {/* div 2 */}
             <div className='ft4'>
              <h4 className='ft5'>𝐔𝐬𝐞𝐟𝐮𝐥 𝐋𝐢𝐧𝐤𝐬</h4>
              
                <b className='bft'>food blogs</b>
                <br/>
                 <b className='bft'>Advertise with us</b>
                 <br/>
                 <b className='bft'>Our Authors</b>
                 <br/>
                 <b className='bft'>Get in touch</b>
                 <br/>
              

             </div>
             {/* div 3 */}
             <div className='ft4'>
              <h4 className='ft5'>𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐞𝐬</h4>
              
                <b className='bft'>Beauty</b>
                <br/>
                 <b className='bft'>Fashion and Style</b>
                 <br/>
                 <b className='bft'>Food and Wellness</b>
                  <br/>
                 <b className='bft'>Lifestyle</b>
                 <br/>
              

             </div>
             {/* div 4 */}
             <div className='ft6'>
              <h4 className='ft9'>𝐒𝐨𝐜𝐢𝐚𝐥  𝐌𝐞𝐝𝐢𝐚</h4>
              <div className='ft7'>
                <img className='ft8' src='./public/images/facebook.png'/>
                <h4>Facebook</h4>
              </div>
              {/* ************************************************* */}
                <div className='ft7'>
                <img className='ft8' src='./public/images/twitter.png'/>
                <h4>Twitter</h4>
              </div>
              {/* ********************************************* */}
              <div className='ft7'>
                <img className='ft8' src='./public/images/instagram.png'/>
                <h4>Instagram</h4>
              </div>
              {/* ************************************************ */}
             </div>



      </div>

    </div>
  )
}

export default Footer
