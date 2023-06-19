import React from "react";
import "./style.css"
import { MYCards } from "../../component/cards";
import {useSelector } from "react-redux";
import Store from "../../component/animate/store";

export default function Bookmark(){

const data= JSON.parse(localStorage.getItem("bookMark"))
const originData = useSelector((state)=> state.product.data)
    return(
        <div className="bookMark-container">
            {
                data?.length ?  <h2>Your favorite product</h2> : <h2>You don't have selected products</h2>
            }
            {
                data?.length ?  null : <Store/>
            }
            <div className="card-container">
           {
            data && data.map((item)=>{
                return <MYCards 
                        item={item}
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2,  once: true }}
                        width={300}
                        height={450}
                        
                    />
            })
           }
           </div>
           {
            data?.length ? null:<div className="margin-bootom"></div>
           }
        </div>
    )
}