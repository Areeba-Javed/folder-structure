import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import beautydata from '../Blogdata/Beautydata';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";

import { MdEmojiEmotions } from "react-icons/md";





const Beautypage = () => {
  let params = useParams();
  let filterData = beautydata.find(ele => ele.id == params.pid);

  // Toggle state for emoji visibility
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div>
      <div className='main1'>
        <div className='main2'>
          {filterData.img && (
            <img className='main2' src={filterData.img} alt="Fashion Item" width={900} height={600} />
          )}
        </div>

        <h1 className='main3'>{filterData.heading}</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio adipisci mollitia magni 
          illum, error tempora eveniet architecto eligendi, numquam voluptas provident repudiandae, ipsum 
          itaque suscipit voluptates...
        </p>

<hr/>
        {/* Toggle Emoji Line */}
        {!showFullContent ? (
          <p className='item' style={{ fontSize: "24px" }}>
            😊 😂 😍 🤩 🥳 🤗 
            <button className='item1' onClick={() => setShowFullContent(true)}>+</button>
          </p>
        ) : (
          <div>
            <p style={{ fontSize: "24px" ,backgroundColor:"aliceblue",width:"300px",height:"70px",
              borderRadius:"20px"
             }}>
              😊 😂 😍 🤩 🥳 🤗 
              <button  className='item1' onClick={() => setShowFullContent(false)}>-</button>
            </p>
            <EmojiPicker />
            
          </div>
        )}
        <hr/>

        {/* Back Button */}
        <div>

          <div className='item3'>
            <div className='item4'>
            < AiFillLike style={{ fontSize: "30px", marginTop: "7px" }} />
              <p style={{ fontSize: "20px", marginTop: "7px" }}>Like</p>
            

            </div>
            <div className='item4'>
            <FaCommentDots  style={{ fontSize: "30px", marginTop: "7px" }}/>

              <p style={{ fontSize: "20px", marginTop: "7px" }}>Comment</p>
            </div>
            <div className='item4'>
            <FaShare style={{ fontSize: "30px", marginTop: "7px" }}  />
              <p style={{ fontSize: "20px", marginTop: "7px" }}>Share</p>
            </div>



          </div>
          <hr/>
          <div className='item5'>
            <div className='item6'>

            </div>
            <div className='item7'>

           <input  className='item8' type='text' placeholder='Write a comment'/>
           < AiFillLike style={{ fontSize: "30px", marginLeft: "20px" }}/>
           <MdEmojiEmotions   style={{ fontSize: "30px", marginLeft: "10px" }}/>
           <FaCamera  style={{ fontSize: "30px", marginLeft: "10px" }} />
           <MdOutlineGifBox  style={{ fontSize: "30px", marginLeft: "10px" }} />

            </div>










          </div>
          <Link to={`/beauty`}>
            <button className='main11'>Back</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Beautypage;
