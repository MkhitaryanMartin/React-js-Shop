import React,{forwardRef} from "react";
import module from "./style.module.css";
import {motion} from 'framer-motion';
import StarIcon from "../Icon/star";
import {pullAllBy} from "lodash";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataChecked } from "../../store/reducers/product";

export const Cards=forwardRef(({
      item={},
      width="",
      height="",
      on=false,
    },ref)=>{
  const dispatch = useDispatch()
      const featureAnimation = {
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: custom => ({
          y: 0,
          opacity: 1,
          transition: { delay: custom * 0.2},
        }),
      }
    const handleSave=()=>{
      dispatch(dataChecked(item.id))
      const star = JSON.parse(localStorage.getItem("bookMark"))
      if(!star.length){
        localStorage.setItem("bookMark", JSON.stringify([...star, {...item, complited: true}]))
      }else{
        if(star.some(elem => elem.id === item.id)){
          const newStar = pullAllBy(star, [item], "id")
          localStorage.setItem("bookMark", JSON.stringify(newStar))
        }else{
          localStorage.setItem("bookMark", JSON.stringify([...star, {...item, complited: true}]))
        }
      }
      
    }
    return(
      
            <motion.li 
                key={item.id}
                className={`${module["category-block-li"]}`}
                custom={1} 
                variants={featureAnimation}
                ref={ref}
                style={{
                  width:width,
                  height:height
                }}
            >
                        <div  className={module["img-div"]}>
                            <img src={item.image} alt="img" className={module["category-img"]}/>
                        {
                             !on ? <StarIcon 
                              className={item.complited ? module["star-active"]: module.star}
                              primary={item.complited ? "gold":"white"}
                              secondary={item.complited ? "gold":"white"}
                              click={handleSave}
                            />: null
                        }
                        </div>
                        <div className={module["text-div"]}>
                            <h4>{`${item.price}$`}</h4>
                            <p>{item.title.substr(0, 12)}</p>
                        </div>
                        <div className={module["button-div"]}>
                        <Button 
                            mode="sliding-button"
                            style={{
                              width: 150,
                              height: 40
                            }}
                          >{<Link to={`/product/${item.id}`}>BUY</Link>}</Button>
                        </div>
                    </motion.li>
    )
})




export const MYCards = motion(Cards);
