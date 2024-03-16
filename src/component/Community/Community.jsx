import React from "react";
import "./Community.scss";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";



const Community = () => {
  return (
    <section className="community">
      <div className="wrap_container">
        <div className="box_container">
          <h1>Promotion for Member</h1>
          <h3>
            Sign up now and get <span>$50</span> coupon
          </h3>
          <button>join rewards</button>
        </div>
        <div className="box_container">
          <img src="https://pbs.twimg.com/media/F7qOcCPaAAAeF0u.jpg" alt="" />
        </div>
      </div>
      <div className="wrap_title">
        <div className="title_text">
            <span>join the community</span>
            <button>Become our KOLs</button>
        </div>
        <div className="title_info">
            <button><IoLogoInstagram />
</button>
            <button><FaTiktok />
</button>
        </div>
      </div>
      <div className="wrap_container">
        <div className="box_container">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2015/06/johnny_depp_dior.jpg?w=2000&h=1126&crop=1" alt="" />
        </div>
        <div className="box_container">
          <img src="https://bazaarvietnam.vn/wp-content/uploads/2023/08/harper-bazaar-phim-cua-daniel-radcliffe-daniel9340-3.jpg" alt="" />
        </div>
        <div className="box_container">
          <img src="https://assets2.htv.com.vn/Images/TAP%20CHI%20HTV/THE%20GIOI%20NGHE%20SI/DUONG/HENRY%20CAVILL/henry1.jpg" alt="" />
        </div>
        <div className="box_container">
          <img src="https://variety.com/wp-content/uploads/2019/11/chris-evans-feat-image.jpg" alt="" />
        </div>
      </div>
      <div className="about_us">
        <h1>Confidence from within</h1>
        <h3>
            Post your pictures on your instagram or facebook with hashtag<span>#flexfy</span>
          </h3>
          <button>about us</button>
      </div>
    </section>
  );
};
export default Community;
