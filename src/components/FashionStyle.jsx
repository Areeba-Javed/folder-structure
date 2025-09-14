import React from "react";
import Footer from "../components/Footer.jsx";
import fashionproductlist from "../Blogdata/Fashiondata.jsx";
import { Link } from "react-router-dom";


const FashionStyle = () => {
  

  return (
    <div className="lst">
      <h1 className="ht">𝐅𝐚𝐬𝐡𝐢𝐨𝐧 𝐚𝐧𝐝 𝐬𝐭𝐲𝐥𝐞</h1>
      <p className="pp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        voluptates.
      </p>
      <div className="ls1">
        {fashionproductlist.map((ele, index) => (
          <div className="ls" key={index}>

            <Link to={`/fashion/${ele.id}`}>
              <img className="ims" src={ele.photo} alt={ele.heading} />
            </Link>
            
            <br />
            <h4 className="stl">
              <b>{ele.heading}</b>
            </h4>
            <p className="ls2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati eius optio quae incidunt{" "}
            </p>
            <img className="im2" src="./public/images/e11.jpg" />
            <b>Isabella ava</b>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FashionStyle;