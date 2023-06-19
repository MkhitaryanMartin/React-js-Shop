import React from "react";
import { Modal } from "../../component/modal/modal";
import Confetti from "react-confetti";
import Button from "../../component/Button/button";
import { useSelector } from "react-redux";
import Auto from "../../component/animate/auto";


export default function ModalBloack({
  isModal = false,
  handleBuy,
  handleClose,
  data = {},
  parametr = {},
  buyModal = false,
}) {
  const { phone, lastName, firstName, email } = useSelector((state) => state?.user?.activeUserData)
  return (
    <>
      {
        isModal && <Modal
          isVisible={isModal}
          title={<>{firstName} {lastName}</>}
          content={
            <div className="user-info">
              <h4>phone: <i>{phone}</i></h4>
              <h4>email: {email}</h4>
            </div>
          }

          footer={
            <div className="modals-footer">
              <Button
                onClick={handleBuy}
                style={{
                  width: 100,
                  height: 35
                }}
              >Buy</Button>
              <Button
                onClick={handleClose}
                style={{
                  width: 100,
                  height: 35
                }}
              >Cancel</Button>
            </div>
          }
          onClose={handleClose}
        >
          <div className="check">
            <p>name : {data.title.substring(0, 10)}</p>
            <p>Price : {data.price * parametr.count}$</p>
            <p>Count : {parametr.count}</p>
            <p>size : {parametr.size}</p>
            <p>color: {parametr.color}</p>
          </div>
        </Modal>
      }
      <Modal
        isVisible={buyModal}
        title="Congratulations"
        content={<Auto text={<>Your item will be delivered<br/> within a few days</>} />}
        footer={<Button
          onClick={handleClose}
          style={{
            width: 100,
            height: 35
          }}
        >Cancel</Button>}
        onClose={handleClose}
      >{
          <Confetti numberOfPieces={150} width="1620" height={1000} />
        }</Modal>
    </>
  )
}