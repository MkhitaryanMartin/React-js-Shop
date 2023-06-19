import React, { useEffect, useState } from "react";
import Input from "../../component/input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { joinSchema } from "../../costant/validation";
import module from "../Login/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { error } from "../../store/reducers/user";
import Button from "../../component/Button/button";
import Message from "../../component/animate/message/message";
import Spinner from "../../component/SVG/spinner";
import { Modal } from "../../component/modal/modal";

export default function Join() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [joinData, setJoinData] = useState({})
   const errorMessage = useSelector(state => state.user.errorMessage)
   const [message, setMessage] = useState(false)
   const [spinner, setSPinner] = useState(false)
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid, isDirty },
   } = useForm({
      resolver: yupResolver(joinSchema),
      mode: "onChange",
   });

   useEffect(() => {
      dispatch(error(false))
   }, [])
   const onSubmit = (data) => {
      const user = JSON.parse(localStorage.getItem("user"))
      const usersData = JSON.parse(localStorage.getItem("usersData"))

      if (!user.includes(data.email)) {
         user.push(data.email)
         localStorage.setItem("user", JSON.stringify(user))
         localStorage.setItem("usersData", JSON.stringify({ ...usersData, [data.email]: data }))
         dispatch(error(false))
         setJoinData(data)
         // navigate("/login")
         setTimeout(() => {
            setSPinner(false)
            setMessage(true)
         }, 1300)

         setSPinner(true)

      } else if (user.includes(data.email)) {
         dispatch(error(true))
         reset()
      }

   };
   const handleMessageClose = () => {
      setMessage(false)
      if (message) {
         navigate("/login")
      }

   }
   return (
      <section className={module.container} >
         {
            errorMessage ? <p className={module.errorText}>This email is already registered</p> : null
         }
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className={module["form-input-block"]}>
               <Input
                  name={register("firstName")}
                  errorText={errors.firstName && errors.firstName.message}
                  dirty={isDirty}
               />
               <Input
                  name={register("lastName")}
                  errorText={errors.lastName && errors.lastName.message}
               />
               <Input
                  name={register("phone")}
                  errorText={errors.phone && errors.phone.message}
               />
               <Input
                  name={register("email")}
                  errorText={errors.email && errors.email.message}
               />
               <Input
                  name={register("password")}
                  errorText={errors.password && errors.password.message}
               />

               <Input
                  name={register("confirmPassword")}
                  errorText={errors.confirmPassword && errors.confirmPassword.message}
               />
            </div>

            <Button
               type="submit"
               disabled={!(isValid && isDirty)}
               value="JOIN"
            >JOIN</Button>
         </form>
         <Link to="/login" className={module["join-login-link"]}>Login</Link>
         {
            spinner ? <Spinner /> : message ? <Modal
               isVisible={true}
               onClose={handleMessageClose}
               contentStyle={{ height: 400 }}
            >
               <Message
               >
                  <div className={module["message-div"]}>
                     <p><i>{joinData.lastName}</i><i>{joinData.firstName}</i></p>
                     <p>You have successfully registered, now all functions of the site are available to you</p>
                  </div>
               </Message>
            </Modal> : null

         }
      </section>
   )
}