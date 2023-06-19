import React, { useState } from "react";
import "./style.css";
import Button from "../../../component/Button/button";
import { fakeData } from "../../../assets/fakeData";
import { uniqueId } from "lodash";

export default function INfoBlock({
    item = {},
    parametr = {},
    incriment,
    dicriment,
    handleOpenM,
    handleSize,
    handleColor
}) {

    const [index, setIndex] = useState(0)

    const handleOpen = (e) => {
        if (fakeData.buyTitle.indexOf(e.target.textContent) === index) {
            setIndex(null)
        } else {
            if (fakeData.buyTitle.includes(e.target.textContent)) {
                setIndex(fakeData.buyTitle.indexOf(e.target.textContent))
            } else {
                setIndex(null)
            }
        }
    }
    return (
        <div className="info-block">
            <h2 className="info-h2">{item.title}</h2>
            <p>${item.price}</p>

            <div className="info-input-block">
                <input className="info-input" type="text" value={parametr.count} readOnly />
                <div className="increment">
                    <button onClick={incriment}>+</button>
                    <button onClick={dicriment}>-</button>
                </div>
                <Button
                    style={{
                        width: 150,
                        height: 40,
                    }}
                    onClick={handleOpenM}

                >BUY</Button>

            </div>
            <h4>color</h4>
            <ul className="ul">
                {
                    fakeData.sizeAndColor.map((el, i) => {
                        return <li
                            key={el.id}
                            style={{
                                backgroundColor: el.color
                            }}
                            className={parametr.colorIndex === i ? "activeColors sizeColor" : ""}
                            onClick={(e) => handleColor(e, i)}
                        ><i>{el.color}</i></li>
                    })
                }
            </ul>
            <h4>size</h4>
            <ul>
                {
                    fakeData.sizeAndColor.map((el, i) => {
                        return <li
                            key={el.id}
                            className={parametr.sizeIndex === i ? "activeColors sizeColor" : ""}
                            onClick={(e) => handleSize(e, i)}
                        >{el.size}</li>
                    })
                }
            </ul>
            <div className="info-text-block" onClick={(e) => handleOpen(e)}>
                {
                    fakeData.buyTitle.map((title, i) => {
                        return (
                            <div key={uniqueId()}>
                                <hr />
                                <h4>{title}</h4>
                                <p className={i === index ? "show-text" : "hidden"}>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}