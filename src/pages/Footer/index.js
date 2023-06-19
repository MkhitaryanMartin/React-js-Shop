import React from "react";
import "./style.css"
import { fakeData } from "../../assets/fakeData";
import { Link } from "react-router-dom";
import { uniqueId } from "lodash";
import { 
    PinterestIcon,
    FbIcon,
   TwitterIcon,
   LinkedinIcon,
   YoutubeIcon
 } from "../../component/SVG/index.js";

export default function Footer(){
    return(
        <div className="footer-container">
           <div className="footer-flex logo-block">
                <div className="footer-logo">
                    <Link to="/"><img src={fakeData.link.logo} alt="logo"/></Link>
                    <address> 2023 &copy; All rights reserved | This template is made with  by Colorlib</address>
                </div>
                <ul className="footer-link">
                    {
                        fakeData.link.about.map((link)=>{
                            return <li key={uniqueId()}><Link to="#" key={uniqueId}>{link}</Link></li>
                        })
                    }
                </ul>
                 <ul className="footer-link">
                 {
                        fakeData.link.myAcount.map((link)=>{
                            return <li key={uniqueId()}><Link to="#">{link}</Link></li>
                        })
                    }
                </ul>
           </div>
           <hr/>
           <ul className="footer-flex site">  
               <li><Link to="#"><PinterestIcon/></Link></li>
               <li><Link to="#"><FbIcon/></Link></li>
               <li><Link to="#"><TwitterIcon/></Link></li>
               <li><Link to="#"><LinkedinIcon/></Link></li>
               <li><Link to="#"><YoutubeIcon/></Link></li>
            </ul>

        </div>
    )
}