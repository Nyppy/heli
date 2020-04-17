import React from "react";
import {Link } from "react-router-dom";
import logo_header from "../../assets/img/logo-header.png"
import s from "./Header.module.css"

class Header extends React.Component {
    render() {
        return (
            <div className={s.headerWrapper}>
                <div className={s.headerContent}>
                    <div className={s.headerLogoDiv}>
                        <img src={logo_header} alt="Логотип"/>
                    </div>
                    <div className={s.headerMenu}>
                        <Link className={s.headerMenuElem} to="">Для&nbsp;вас</Link>
                        <Link className={s.headerMenuElem} to="">Продукты</Link>
                        <Link className={s.headerMenuElem} to="/doctors">Для врачей</Link>
                        <span className={s.headerButton}>Войти</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;