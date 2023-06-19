import React, { useState } from "react";
import { fakeData } from "../../assets/fakeData";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import Menu from "../../component/menu";
import { useSelector, useDispatch } from "react-redux";
import UserIcon from "../../component/Icon/userIcon";
import ShopIcon from "../../component/Icon/shopIcon";
import ExitIcon from "../../component/Icon/exit";
import { valid } from "../../store/reducers/user";
import CheckIcon from "../../component/Icon/check";

export default function Header() {

    const { isValid, activeUserData } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const bookMarkCount = JSON.parse(localStorage.getItem("bookMark"))?.length

    const handleExit = () => {
        dispatch(valid(false))
        navigate("/login")
        localStorage.setItem("activeUser", JSON.stringify(""))
    }
    const handleNavigate = () => navigate("bookMark")

    const handleClosed = () => {
        setMenu(false)
        setUserMenu(false)
    }
    const handleMenu = (e) => {
        e.stopPropagation(e)
        setMenu(!menu)
        setUserMenu(false)
    }
    const handleUser = (e) => {
        e.stopPropagation()
        setMenu(false)
        setUserMenu(!userMenu)
    }
    return (
        <header
            className={menu || userMenu ? "header-active" : "header"}
            onClick={handleClosed}>
            <div className="header-container">
                <nav className='nav-container'>
                    <NavLink
                        to="/"
                        className="nav-block-li-link nav-logo"
                    ><img src={logo} alt="logo" className="nav-logo" /></NavLink>
                    <ul className='nav-block'>
                        {
                            fakeData.pageLink.map((link) => {
                                return <li
                                    className='nav-block-li'
                                    key={link.id}>
                                    <NavLink
                                        to={link.path}
                                        className="nav-block-li-link"
                                    >{link.page}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                    <div className="menu-block">
                        {
                            isValid ? <UserIcon
                                width={80}
                                height={80}
                                click={(e) => handleUser(e)}
                            /> : <NavLink
                                to="login"
                                className="nav-block-li-link"
                            >Login</NavLink>
                        }
                        <Menu
                            pushed={menu ? "pushed" : ""}
                            click={(e) => handleMenu(e)}
                        />
                        {
                            menu ? <div className="menu">
                                <div className="user-flex-link">
                                    {
                                        fakeData.pageLink.map((link) => {
                                            return <li
                                                className='menu-link'
                                                key={link.id}>
                                                <NavLink
                                                    to={link.path}
                                                    className="nav-block-li-link"
                                                >{link.page}</NavLink>
                                            </li>
                                        })
                                    }
                                </div>
                            </div> : null
                        }
                        {

                            userMenu ? <div className="user">
                                <div className="user-name-div">
                                    <span>{activeUserData?.lastName} {activeUserData?.firstName}. </span>
                                    <CheckIcon
                                        width={50}
                                        height={50}
                                        primary="white"
                                    />
                                </div>
                                <div className="user-name-div">
                                    <span>BookMark</span>
                                    <ShopIcon
                                        width={100}
                                        height={100}
                                        click={handleNavigate}
                                        count={bookMarkCount ? bookMarkCount : 0}
                                    />
                                </div>
                                <div className="user-name-div">
                                    <span>Exit</span>
                                    <ExitIcon
                                        click={handleExit}
                                    />
                                </div>
                            </div> : null
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}