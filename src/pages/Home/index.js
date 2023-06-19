import React from "react";
import Block from "./block";
import { fakeData } from "../../assets/fakeData";
import module from "./style.module.css";
import Slider from "../../component/swiper";
import Category from "./category";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Spinner from "../../component/SVG/spinner";

export default function Home() {
    const { isLoading, error } = useSelector((state) => state.product)

    const textAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    }
    return (
        <div className={module["home-container"]}>
            {
                error ? <h2 className="error">{error}</h2> : <>
                    {
                        isLoading ? <Spinner /> : <>
                            <div className={module['home-block']}>
                                {
                                    fakeData.home.text.blockText.map((el,) => {
                                        return <Block text={el.text} title={el.title} key={el.id} color={el.color} />
                                    })
                                }
                            </div>
                            <div className={module["home-slider-container"]}>
                                <Slider
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={{
                                        enabled: true,
                                        delay: 10000,
                                    }}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    speed={1000}
                                    data={fakeData.home.sliderImg}
                                />
                            </div>
                            <Category />
                        </>
                    }
                </>
            }

            <div
                className={module['poster-container']}
            >
                <motion.div
                    className={module['poster-text-block']}
                    custom={1}
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                >
                    <h2 >{fakeData.home.posterText.title}</h2>
                    <p>{fakeData.home.posterText.text}</p>
                    <p>{fakeData.home.posterText.price}</p>
                </motion.div>
            </div>
        </div>
    )
}