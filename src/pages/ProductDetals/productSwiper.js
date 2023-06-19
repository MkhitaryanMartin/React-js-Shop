import React,{useState} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { uniqueId } from "lodash";


export default function ProductSwiper({data, anotherData}){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swipArray = anotherData ? anotherData.images : Array.from({length: 4})
    return (
        <>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
     {
        swipArray.map((img)=>{
            const mainData = anotherData ? img : data.image
            return (
                <SwiperSlide key={uniqueId()}>
                    <img src={mainData}/>
                </SwiperSlide>
            )
        })
     }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
      {   
        swipArray.map((img)=>{
            const mainData = anotherData ? img : data.image
            return (
                <SwiperSlide key={uniqueId()}>
                    <img src={mainData} />
                </SwiperSlide>
            )
        })
     }
      </Swiper>
        </>
    )
}