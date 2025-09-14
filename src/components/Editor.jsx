import React from 'react'
import { Link } from 'react-router-dom'

const Editor = () => {
  return (
    <div>
    <h1 className='h1'>𝐄𝐝𝐢𝐭𝐨𝐫'𝐬 𝐏𝐢𝐜𝐤𝐬</h1>
    {/* *******************Editors Picks code*************************************************** */}
    <div className='edit'>
       
       
            <div className='e2'>
            
                  {/* Editor pic 1 code */}
        <div className='e21'>

            <img className='im1' src='./public/images/e1.jpg'/>
            <Link to='/beauty'>
            <button  className='bi1'>Beauty</button>
            </Link>
            <br/>
            <h4 className='stl'>  𝐓𝐡𝐞 𝟑 𝐄𝐲𝐞𝐬𝐡𝐚𝐝𝐨𝐰 𝐩𝐚𝐥𝐞𝐭𝐭𝐞𝐬 𝐈 𝐨𝐰𝐧 & 𝐇𝐨𝐰 𝐭𝐨 𝐝𝐨𝐰𝐧𝐬𝐢𝐳𝐞 𝐲𝐨𝐮𝐫 𝐬𝐭𝐚𝐬𝐡</h4>
            <p className='stl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ratione!</p>
            <img  className='im2' src='./public/images/e11.jpg'/>
            <b>Isabella ava</b>
        </div>
                  {/* Editor pic 2 code */}
        <div className='e22'>
            <img className='im1' src='./public/images/e2.jpg'/>
            <Link to='/fashion'>
            <button  className='bi1'>Fashion</button>
            </Link>
            <br/>
            <h4 className='stl'> 𝟐 𝐍𝐞𝐰 𝐨𝐮𝐭𝐟𝐢𝐭 𝐟𝐨𝐫𝐦𝐮𝐥𝐚𝐬 𝐭𝐨 𝐚𝐝𝐝 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐂𝐚𝐩𝐬𝐮𝐥𝐞  𝐖𝐚𝐫𝐝𝐫𝐨𝐛𝐞</h4>
            <p className='stl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ratione!</p>
            <img  className='im2' src='./public/images/e22.jpg'/>
            <b>Charlotte mia</b>
        </div>
      </div>
      {/************************************************  Topic******************************* */}
      <div className='edit2' >
      <h1>𝐓𝐨𝐩𝐢𝐜𝐬</h1>
                  {/* topic beauty */}
           <Link to='/beauty'style={{textDecoration:'none'}}>      
      <div className='ed1'>
        <div className='ed11'><img  className='im3'src='./public/images/bath-tub.png'/></div>
      
              <b className='bb'>beauty</b>
      </div>
      </Link> 
                {/* topic Fashion and style */}
                <Link to='/fashion' style={{textDecoration:'none'}}>
      <div className='ed1'>
      <div className='ed11'>    <img  className='im3'src='./public/images/woman.png'/></div>
 
              <b className='bb'>Fashion and style</b>
      </div>
      </Link> 
             {/* topics health and wellness */}
             <Link to='/health' style={{textDecoration:'none'}}>
      <div className='ed1'>
      <div className='ed11'>     <img  className='im3'src='./public/images/cutlery.png'/></div>
 
              <b className='bb'>Health and wellness</b>
      </div>
      </Link> 
                  {/*  topics lifestyle */}
                  <Link to='/lifestyle' style={{textDecoration:'none'}}>
      <div className='ed1'>
      <div className='ed11'>   <img  className='im3'src='./public/images/pie-chart.png'/></div>
 
              <b className='bb'>Lifestyle</b>
      </div>
      </Link> 
      {/* sponser code */}
      <h1>𝐎𝐮𝐫 𝐬𝐩𝐨𝐧𝐬𝐞𝐫𝐬</h1>
      <div>
        <img className='im4' src='./public/images/sponser.jpg'/>
      </div>

      </div>
    </div>
    {/* advertise code */}
    <div className='a1'>
    <h1>𝐀𝐝𝐯𝐞𝐫𝐭𝐢𝐬𝐞 𝐰𝐢𝐭𝐡  𝐮𝐬</h1>
    <button className='b4'>Learn more</button>
</div>
  {/* ***************************************Top picks ****************************/}
<h1 className='tp'>𝐓𝐨𝐩 𝐏𝐢𝐜𝐤'𝐬 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐦𝐨𝐧𝐭𝐡</h1>
<div className='tp3'>
                           {/* trending update div 1 code */}
  <div class='tp1'>
  <img src="https://p.w3layouts.com/demos_new/template_demo/11-08-2020/newsblog-liberty-demo_Free/1950211435/web/assets/images/pic1.jpg" alt="Background Image"/>
  <div class='tp2'><b>Fashion is Creating your beauty image New Fashion start here</b></div>
</div>
                            {/* trending update div 2 code */}

<div class='tp1'>
  <img src="https://p.w3layouts.com/demos_new/template_demo/11-08-2020/newsblog-liberty-demo_Free/1950211435/web/assets/images/pic2.jpg" alt="Background Image"/>
  <div class='tp2'><b>The 5 Nonnegotiables of a Healthy Quarantine food that a Doctor Approved</b></div>
</div>
                            {/* trending update div 3 code */}

<div class='tp1'>
  <img src="./public/images/pexels-valeriya-1639557.jpg" alt="Background Image"/>
  <div class='tp2'><b>Right food baked with natural ingredient, the use of best quality products</b></div>
</div>
</div>
   {/*****************************Fashion and style page ***********************/}
<div className='ff'>
  <div className='fff'>
  <h1 className='hh'>𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐚𝐧𝐝 𝐬𝐭𝐲𝐥𝐞</h1>
  <Link to='/fashion'>  <button className='bii'>View More</button></Link>

  </div>
      <div className='f1'>
             {/* fashion div 1 code */}
          <div className='f21'>
          <img className='im5' src='./public/images/fs1.jpg'/>

          <br/>
          <h4 className='stl'>𝐀𝐧 𝐞𝐚𝐬𝐲 𝐆𝐮𝐢𝐝𝐞 𝐭𝐨 𝐛𝐮𝐲𝐢𝐧𝐠 𝐃𝐞𝐧𝐢𝐦 & 𝐌𝐲 𝐟𝐚𝐯𝐨𝐮𝐫𝐢𝐭𝐞 𝐬𝐭𝐲𝐥𝐞𝐬  </h4>
          <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
          </div>
         {/* fashion div 2 code */}
          <div className='f21'>
          <img className='im5' src='./public/images/fs2.jpg'/>
          <br/>
          <h4 className='stl'>𝐓𝐡𝐞 𝐒𝐚𝐭𝐢𝐧 𝐒𝐤𝐢𝐫𝐭 & 𝐇𝐨𝐰 𝐭𝐨 𝐖𝐞𝐚𝐫 𝐢𝐭 𝐚𝐥𝐥 𝐲𝐞𝐚𝐫 𝐢𝐭 𝐚𝐥𝐥 𝐲𝐞𝐚𝐫 𝐫𝐨𝐮𝐧𝐝 𝐟𝐚𝐬𝐡𝐢𝐨𝐧</h4>
          <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
          </div>
          {/* fashion div 3 code */}
          <div className='f21'>
          <img className='im5' src='./public/images/fs3.jpg'/>
          <br/>
          <h4 className='stl'>𝐖𝐡𝐚𝐭 𝐈'𝐥𝐥 𝐛𝐞 𝐖𝐞𝐚𝐫𝐢𝐧𝐠 𝐭𝐡𝐢𝐬 𝐏𝐚𝐫𝐭𝐲 𝐒𝐞𝐚𝐬𝐨𝐧 & 𝐭𝐡𝐞 𝐅𝐞𝐬𝐭𝐢𝐯𝐞 𝐞𝐝𝐢𝐭</h4>
          <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
          </div>

</div>
</div>
   {/* ******************************Beauty page *****************************/}
<div className='but'>
     <div className='fff'>
     <h1 className='hh'>𝐁𝐞𝐚𝐮𝐭𝐲</h1>
     <Link to='/beauty'>
     <button className='bii'>View More</button>
     </Link>
     </div>
                       {/* beauty div 1 and div 2 code */}
<div className='but1'>
   <div className='but11'>
    <div>   <img className='im6' src='./public/images/bs1.jpg'/>
    </div>
  <div>
  <h4 className='hb1'>𝐍𝐚𝐭𝐮𝐫𝐚𝐥 𝐒𝐩𝐚 - 𝐖𝐡𝐞𝐫𝐞 𝐲𝐨𝐮 𝐟𝐞𝐞𝐥 𝐮𝐧𝐢𝐪𝐮𝐞 𝐚𝐧𝐝 𝐬𝐩𝐞𝐜𝐢𝐚𝐥</h4>
  <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
  </div>
 </div>
   <div className='but11'>
    <div>  <img className='im6' src='./public/images/bs2.jpg'/></div>
   <div>
   <h4 className='hb1'>𝐇𝐨𝐰 𝐭𝐨 𝐠𝐞𝐭 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐜𝐨𝐥𝐨𝐫𝐢𝐧𝐠 𝐇𝐢𝐠𝐡𝐥𝐢𝐠𝐡𝐭𝐬 𝐭𝐡𝐢𝐬 𝐰𝐞𝐚𝐤</h4>
   <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
   </div>
   </div>
</div>
                     {/* beauty div 3 and div 4 code  */}
<div className='but1'>
   <div className='but11'>
    <div>  
      <img className='im6' src='./public/images/bs3.jpg'/>
    </div>
 <div>
  <h4 className='hb1'>𝐍𝐞𝐰 𝐇𝐚𝐢𝐫 𝐒𝐭𝐲𝐥𝐞𝐬 𝐜𝐚𝐧 𝐥𝐨𝐨𝐤 𝐟𝐚𝐛𝐮𝐥𝐨𝐮𝐬 𝐚𝐧𝐝 𝐬𝐡𝐢𝐧𝐲</h4>
  <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
          </div>
   </div>

   <div className='but11'>
    <div>   <img className='im6' src='./public/images/bs4.jpg'/></div>
<div>
   <h4 className='hb1'>𝐇𝐨𝐰 𝐨𝐮𝐫 𝐝𝐫𝐞𝐚𝐦𝐬 𝐬𝐡𝐨𝐮𝐥𝐝 𝐬𝐡𝐢𝐧𝐞 𝐚𝐧𝐝 𝐬𝐩𝐫𝐚𝐲 𝐛𝐞𝐚𝐮𝐭𝐲 𝐭𝐨 𝐮𝐬</h4>
   <img  className='im2' src='./public/images/e11.jpg'/>
          <b>Isabella ava</b>
          </div>
          
   </div>
</div>
</div>
 {/*************** ***********trending page *************************************************/}
<div className='td'>
<h1 className='hh'>𝐓𝐫𝐞𝐧𝐝𝐢𝐧𝐠 𝐔𝐩𝐝𝐚𝐭𝐞𝐬</h1>
<div className='td1'>
                  {/* trending update div 1 code */}
      <div className='td11'>
        <div className='i1'>
     <img className='imi' src='./public/images/td1.jpg'/>
     </div>
     <div className='i2'>     
      <h4 className='hb1'><b>Playing footbal with your feet is one thing </b></h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, atque?</p>
      <br/>
      <img  className='im2' src='./public/images/e11.jpg'/>
            <b>Isabella ava</b>
     </div> 
    </div>
               {/* trending update div 2 code  */}

     <div className='td11'>
      <div className='i1'>
    <img className='imi' src='./public/images/td2.jpg'/>
    </div>
    <div className='i2'>    
      <h4 className='hb1'><b>Experience the state of the air fitness!Fitness on track</b></h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque!</p>
      <img  className='im2' src='./public/images/e11.jpg'/>
            <b>Isabella ava</b>
    </div>

         </div>


</div>
</div>
           {/**************************  News letter code *******************************/}

<div className='n1'>
              <h1 className='hh'>𝐍𝐞𝐰𝐬𝐥𝐞𝐭𝐭𝐞𝐫</h1>

  <div className='n2'>
    <h1 className='n3'>𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐭𝐨 𝐨𝐮𝐫 𝐧𝐞𝐰𝐬𝐥𝐞𝐭𝐭𝐞𝐫!</h1>
    <p className='n4'>We'll send you the best of our blog just once a month .We promise</p>
    <input className='n6' type='email' placeholder='Enter your email here'/>
    <button className='n5'>Subscribe</button>

  </div>









</div>


    </div>
       
       
  )
}

export default Editor
