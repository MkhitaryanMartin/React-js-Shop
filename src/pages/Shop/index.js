import React, { useState } from "react";
import { fakeData } from "../../assets/fakeData";
import "./style.css";
import { uniqueId } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { MYCards } from "../../component/cards";
import Checkbox from "../../component/Checkbox";
import { checked } from "../../store/reducers/product";
import { useEffect } from "react";
import Spinner from "../../component/SVG/spinner";

export default function Shop() {
    const [max, setMax] = useState(200)
    const [index, setIndex] = useState(0);
    const { data, categoryList, error, isLoading } = useSelector(state => state.product);
    const dispatch = useDispatch()
    const [list, setlist] = useState([])
    let x = 0

    useEffect(() => {
        setlist(categoryList.map((el) => {
            if (el.name) {
                return el.name
            }
        }))
    }, [])

    const handleRange = (e) => {
        setMax(e.target.value)
    }
    const handleCalor = (i) => {
        setIndex(i)
    }
    const handlChecked = (e, id) => {

        categoryList.map((el) => {
            if (el.id === id) {
                setlist([...list, e.target.id])
                dispatch(checked(id))
            } else {
                return el
            }
        })

        if (!e.target.checked) {
            setlist(list.filter((name) => {
                if (e.target.id !== name) {
                    return name
                }
            }))
        }
    }

    return (
        <section className="shop-section">
            {
                error ? <h2 className="error">{error}</h2> : isLoading ? <Spinner /> : <>
                    <aside className="shop-aside">
                        <div className="shop-category-block">
                            <h3>Category</h3>
                            {
                                categoryList && categoryList.map((item) => {
                                    return <div className="shop-category-block-item" key={item.id}>
                                        <Checkbox
                                            item={item}
                                            onChange={handlChecked}
                                        />
                                        <hr />
                                    </div>
                                })
                            }
                        </div>
                        <input type="range" id="volume" name="volume"
                            min="1" max="200" onChange={(e) => handleRange(e)} />
                        <label htmlFor="volume">{`PRICE: $10 - ${max}`}</label>

                        <div className="color-block">
                            {
                                fakeData.shop.color.map((color, i) => {
                                    return <input
                                        type="color"
                                        id="head"
                                        name="head" value={color}
                                        className={i === index ? "color-input activeColor" : "color-input"}
                                        onClick={() => handleCalor(i)}
                                        onChange={() => ""}
                                        key={uniqueId()}
                                    />
                                })

                            }
                        </div>
                        <label htmlFor="head" className="color">FILTER BY COLOR</label>
                    </aside>
                    <div className="img-block">
                        {
                            data && data.filter((el) => {
                                if (list.includes(el.category) && el.price <= max) {
                                    return el
                                }
                            }).map((item, i) => {
                                if (x < 0.8) {
                                    x += 0.1
                                } else {
                                    x = 0
                                }
                                return <MYCards
                                    item={item}
                                    key={item.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: x, once: true }}
                                    width={300}
                                    height={450}
                                    custom={i}
                                />
                            })
                        }
                    </div>
                </>
            }
        </section>
    )
}