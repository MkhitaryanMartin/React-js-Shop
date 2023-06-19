import React, { useState } from "react";
import { useSelector } from "react-redux";
import module from "./style.module.css"
import { uniqueId } from "lodash";
import { MYCards } from "../../../component/cards";
import { sorted } from "../../../HOF/sort";
import Menu from "../../../component/menu";

export default function Category() {

    const data = useSelector((state) => state.product.data)
    const [category, setCategory] = useState("ALL")
    const [index, setIndex] = useState(0);
    const [menu, setMenu] = useState(0);
    let x = 0
    const handleClick = (e) => {
        const i = ["all", ...sorted(data)].indexOf(e.target.textContent.toLowerCase())
        setIndex(i)
        setCategory(e.target.textContent)
    }
    const handleMenu = (e) => {
        e.stopPropagation()
        setMenu(!menu)
    }
    const handleMenuClose = (e) => {
        e.stopPropagation()
        setMenu(false)
    }
    return (
        <div className={module['category-container']} onClick={(e) => handleMenuClose(e)}>
            <div
                className={[module["menuIcon-block"]]}
            >
                <h2>NEW ARRIVALS</h2>
                <div className={module["menu-hidenShow"]}>
                    <Menu
                        click={(e) => handleMenu(e)}
                        pushed={menu ? "pushed" : null}
                    />
                </div>
            </div>
            <ul className={`${module.header}  ${menu ? module.flex : module.hidden}`} onClick={(e) => handleClick(e)} >
                {
                    data && ["all", ...sorted(data)].map((el, i) => {
                        return <li
                            key={uniqueId()}
                            className={i === index ? module.actives : ""}
                        >{el.toUpperCase()}</li>
                    })
                }
            </ul>
            <ul className={module["category-block"]}>
                {
                    data && data.filter((el) => {
                        if (category === "ALL") {
                            return el
                        } else if (el.category.toUpperCase() === category) {
                            return el
                        }else{
                            return null
                        }
                        
                    }).map((item, i) => {
                        if (x < 0.9) {
                            x += 0.33
                        } else {
                            x = 0
                        }
                        return <MYCards
                            item={item}
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: x, once: true }}
                        />
                    })
                }
            </ul>
        </div>
    )
}