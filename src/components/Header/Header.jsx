import React, {Component} from "react";
import {Link } from "react-router-dom";
import logo1h from "../../assets/img/logo1h.png"
import s from "./Header.module.css"

class Header extends React.Component {
    render() {
        return (
            <div className={s.headerWrapper}>
                <div className={s.headerContent}>
                    <div className={s.headerLogoDiv}>
                        <img src={logo1h} alt="Логотип"/>
                    </div>
                    <div className={s.headerMenu}>
                        <Link className={s.headerMenuElem} to="">Для&nbsp;вас</Link>
                        <Link className={s.headerMenuElem} to="">Для&nbsp;врачей</Link>
                        <Link className={s.headerMenuElem} to="">Продукты</Link>
                        <span className={s.headerButton}>КУПИТЬ</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;