import React from "react";
import Input from "../../component/input";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from "../../costant/validation";
import module from "./style.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { error, valid, activeUser } from "../../store/reducers/user";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../component/Button/button";


export default function Login() {
  const location = useLocation();
  // const path = location?.state?.from?.pathname || "/";
  const message = location?.state?.message || ""
  const { errorMessage } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user.includes(data.email)) {
      dispatch(valid(true))
      const userData = JSON.parse(localStorage.getItem("usersData"))[data.email]
      localStorage.setItem("activeUser", JSON.stringify(data.email))
      dispatch(activeUser(userData))
      navigate("/shop")
    } else {
      dispatch(error(true))
      setTimeout(() => {
        navigate("/join")
      }, 1000)
    }
    reset()
  };
  return (
    <section className={module.container}>
      {
        errorMessage ? <p className={module.errorText}>This user does not exist, please register</p> :  (
          message ? <p className={module.loginMessage}> {message}</p> : null
          ) 
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={register("email")}
          errorText={errors.email && errors.email.message}
        />
        <Input
          name={register("password")}
          errorText={errors.password && errors.password.message}
        />
        <Button
          type="submit"
          disabled={!(isValid && isDirty)}
          value="LOGIN"
        >LOGIN</Button>
      </form>
      <Link to="/join" className={module["join-login-link"]}>Join</Link>

    </section>
  )
}