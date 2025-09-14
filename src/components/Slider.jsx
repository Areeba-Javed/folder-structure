import React from 'react';

 import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

 import 'swiper/css/pagination';
 import 'swiper/css';
import { Pagination } from 'swiper/modules';

 
 

const Slider= () => {
  
  return (
    <Swiper
    
     slidesPerView={1}
     pagination={{ clickable: true   }}
      modules={[Pagination]}
 
      
    >
      <SwiperSlide>
        <div className='slider1'>
          <div className='d1'>
          <button  className='b1'>Beauty</button>
          <h1 className='C1'> 𝐂𝐫𝐞𝐚𝐭𝐞 𝐚𝐧 𝐀𝐫𝐭 𝐭𝐡𝐚𝐭 <br/> 𝐬𝐡𝐨𝐰𝐬 𝐭𝐡𝐞 𝐛𝐞𝐚𝐮𝐭𝐲 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞'𝐬 𝐢𝐝𝐞𝐚𝐬 𝐨𝐟 𝐟𝐥𝐚𝐰𝐬</h1>
          <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
             facilis nesciunt ullam, dolorem reiciendis possimus incidunt culpa dolore deserunt libero 
             cum consequatur similique esse? Cum sunt sed incidunt repellendus quam omnis aperiam. Explicabo
              temporibus placeat mollitia optio atque beatae ipsa.
             Quasi accusantium voluptatibus cum doloremque libero vero nobis molestiae?</p>
          </div>
          <div className='d2'>
          <img className='I1' src='./images/slide 1.jpg' alt="Slider 1"/>
          
          </div>
          

      </div>
</SwiperSlide>
      <SwiperSlide>
      <div className='slider1'>
          <div className='d1'>
          <button  className='b1'>Fashion and styles</button>
          <h1 className='C1'> 𝐀𝐝𝐝𝐢𝐜𝐭𝐞𝐝 𝐭𝐨 𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐢𝐬 𝐭𝐡𝐞 <br/>𝐀𝐫𝐦𝐨𝐫 𝐭𝐨 𝐬𝐮𝐫𝐯𝐢𝐯𝐞 𝐭𝐡𝐞 𝐫𝐞𝐚𝐥𝐢𝐭𝐲 𝐨𝐟 𝐄𝐯𝐞𝐫𝐲𝐝𝐚𝐲 𝐋𝐢𝐟𝐞</h1>
          <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
             facilis nesciunt ullam, dolorem reiciendis possimus incidunt culpa dolore deserunt libero 
             cum consequatur similique esse? Cum sunt sed incidunt repellendus quam omnis aperiam. Explicabo
              temporibus placeat mollitia optio atque beatae ipsa.
             Quasi accusantium voluptatibus cum doloremque libero vero nobis molestiae?</p>
          </div>
          <div className='d2'>
          <img className='I1' src='./images/slide 2.jpg' alt="slider 1"/>
          </div>


      </div>
</SwiperSlide>
      <SwiperSlide>
      <div className='slider1'>
          <div className='d1'>
          <button  className='b1'>Health and Wellness</button>
          <h1 className='C1'> 𝐂𝐫𝐞𝐚𝐭𝐞 𝐡𝐞𝐚𝐥𝐭𝐡𝐲 𝐡𝐚𝐛𝐢𝐭𝐬 ,𝐧𝐨𝐭 <br/>𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭𝐢𝐨𝐧𝐬. 𝐖𝐞𝐥𝐥𝐧𝐞𝐬𝐬 𝐢𝐬 𝐚 𝐭𝐚𝐬𝐭𝐞 𝐨𝐟 𝐛𝐞𝐢𝐧𝐠</h1>
          <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
             facilis nesciunt ullam, dolorem reiciendis possimus incidunt culpa dolore deserunt libero 
             cum consequatur similique esse? Cum sunt sed incidunt repellendus quam omnis aperiam. Explicabo
              temporibus placeat mollitia optio atque beatae ipsa.
             Quasi accusantium voluptatibus cum doloremque libero vero nobis molestiae?</p>
          </div>
          <div className='d2'>
          <img className='I1' src='./images/Slide 3.jpg'alt='slider1' />
          </div>


      </div>
</SwiperSlide>
      <SwiperSlide> <div className='slider1'>
          <div className='d1'>
          <button  className='b1'>Lifestyle</button>
          <h1 className='C1'> 𝐓𝐨 𝐬𝐮𝐜𝐜𝐞𝐞𝐝 𝐢𝐧 𝐋𝐢𝐟𝐞 ,𝐲𝐨𝐮 𝐧𝐞𝐞𝐝 𝟑 <br/>𝐭𝐡𝐢𝐧𝐠𝐬 : 𝐚 𝐰𝐢𝐬𝐡𝐛𝐨𝐧𝐞 𝐚 <br/>𝐛𝐚𝐜𝐤𝐛𝐨𝐧𝐞, 𝐚 𝐟𝐮𝐧𝐧𝐲 𝐛𝐨𝐧𝐞</h1>
          <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odit
             facilis nesciunt ullam, dolorem reiciendis possimus incidunt culpa dolore deserunt libero 
             cum consequatur similique esse? Cum sunt sed incidunt repellendus quam omnis aperiam. Explicabo
              temporibus placeat mollitia optio atque beatae ipsa.
             Quasi accusantium voluptatibus cum doloremque libero vero nobis molestiae?</p>
          </div>
          <div className='d2'>
          <img className='I1' src='./images/Slide 4.jpg'alt='slider1' />
          </div>

          
      </div>

  
</SwiperSlide>

        </Swiper>
  
  );
};
    export default Slider