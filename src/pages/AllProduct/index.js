import React, { useEffect, useRef, useState} from "react";
import "./styles.css"
import {uniqueId} from "lodash"
import { useDispatch, useSelector } from "react-redux";
import { fetchingOn, fetchNext, fetchNextColor } from "../../store/reducers/allProduct";
import { fetchAllProduct } from "../../store/reducers/actionCreators";
import ProductSwiper from "../ProductDetals/productSwiper";
import { backgraundColor } from "../../assets/fakeData";
import Search from "../../component/Icon/search";

function AllProduct (){

const {data, isfetshing, next, nextColor}= useSelector((state)=> state.allProduct)
const dispatch = useDispatch();
const ref= useRef();
const [search, setSearch]= useState("")

useEffect(()=>{
    if(isfetshing){
        dispatch(fetchAllProduct(next))
        dispatch(fetchNext())
        dispatch(fetchNextColor())
    }
},[isfetshing])// eslint-disable-line react-hooks/exhaustive-deps


useEffect(()=>{
    document.addEventListener("scroll", scrollHandler)
   return ()=>{
    document.removeEventListener("scroll", scrollHandler)
   }
},[next])// eslint-disable-line react-hooks/exhaustive-deps

const scrollHandler=(e)=>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)< 700 && next < 1000 ){
       dispatch(fetchingOn())
       ref.current.style = backgraundColor[nextColor]  
    }
}
const handleSubmit =(e)=>{
    e.preventDefault()
    setSearch(e.target.search.value)
}
    return (     
       <section ref={ref} className="allProduct-section">
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="search" name="search"/>
                <button type="submit"><Search/></button>
            </form>
        <hr/>
         <div className="allProduct-container" ref={ref}>
                {
                    data && data.filter((el)=>{
                        if(search){
                            if(el.title.toLowerCase().includes(search)){
                                return el
                            }
                        }else{
                            return el
                        }
                    }).map((item)=>{
                        return <div className="allProduct-img-block" key={uniqueId()}>
                           <ProductSwiper anotherData={item}/>
                        </div>
                    })
                }
                
            </div>
       </section>
    )
}

export default AllProduct