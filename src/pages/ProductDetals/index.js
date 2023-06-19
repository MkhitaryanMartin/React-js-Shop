import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import INfoBlock from "./infoBlock";
import { useSelector, useDispatch } from "react-redux";
import { fetchBuy } from "../../store/reducers/actionCreators";
import "./style.css";
import ModalBloack from "./modalBlock";
import ProductSwiper from "./productSwiper";
import Confetti from "react-confetti";
import Auto from "../../component/animate/auto";
import Spinner from "../../component/SVG/spinner";




export default function Product() {
  const {data, isLoading, error} = useSelector((state) => state.buy)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [parametr, setParametr] = useState({
    count: 0,
    sizeIndex: 0,
    colorIndex: 0,
    size: "",
    color: ""
  })
  const [isModal, setModal] = useState(false)
  const [buyModal, setBuyModal] = useState(false)
  const [canfeti, setCanfeti] = useState(false)
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    dispatch(fetchBuy(id))
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  const handleOpen = () => {
    setModal(true)
  }
  const handleClose = () => {
    setModal(false)
    setBuyModal(false)
    setTimeout(() => {
      setCanfeti(false)
    }, 10000)

  }

  const increment = () => {
    if (parametr.count <= 10) {
      setParametr({ ...parametr, count: parametr.count + 1 })
    }
    if (isModal) {
      setModal(true)
    }
  }
  const dicriment = () => {
    if (parametr.count !== 0) {
      setParametr({ ...parametr, count: parametr.count - 1 })
    }
    if (isModal) {
      setModal(true)
    }
  }
  const handleBuy = () => {
    setSpinner(true)
    setTimeout(()=>{
      setBuyModal(true)
      setCanfeti(true)
      setSpinner(false)
    },600)
    setModal(false)
  }
  const handleSize = (e, i) => {
    e.stopPropagation()
    setParametr({ ...parametr, sizeIndex: i, size: e.target.textContent })
  }
  const handleColor = (e, i) => {

    setParametr({ ...parametr, colorIndex: i, color: e.target.textContent })
  }
  return (
    <div className="product-container">
      {
        error ? <h2 className="error">{error}</h2> : isLoading ? <Spinner/> : <>
        <div className="swiper-container">
        <ProductSwiper data={data} />
      </div>
      {
        data && <INfoBlock
          item={data}
          parametr={parametr}
          incriment={increment}
          dicriment={dicriment}
          handleOpenM={handleOpen}
          handleSize={handleSize}
          handleColor={handleColor}
        />
      }
      {
        spinner ? <div className="spinner-block"><Spinner/></div>:null
      }
      <ModalBloack
        handleBuy={handleBuy}
        handleClose={handleClose}
        handleOpen={handleOpen}
        isModal={isModal}
        data={data}
        parametr={parametr}
        buyModal={buyModal}
      />
      {
        canfeti ? <Confetti numberOfPieces={300} className="confetti" /> : null
      }
        </>
      }
    </div>
  );
}