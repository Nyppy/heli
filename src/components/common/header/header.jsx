import React, {Component} from "react";

import "./header.css"

import {Link } from "react-router-dom";

import logo_header from "../../../assets/img/logo-header.png"

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="header-logo-div">
                        <img src={logo_header} alt="Логотип"/>
                    </div>

                    <div className="header-menu">
                        <Link className="header-menu-elem" to="">Для вас</Link>
                        <Link className="header-menu-elem" to="">Продукты</Link>

                        <span className="header-button">Войти</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;