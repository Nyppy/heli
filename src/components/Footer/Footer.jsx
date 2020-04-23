import React, {Component} from "react";

import {withRouter, Link} from "react-router-dom";

import "./Footer.css"

import logo from "../../assets/img/logo-header.png"
import jscorplogos from "../../assets/img/jscorplogos.png"
import { FaVk,FaFacebookF,FaInstagram } from "react-icons/fa";


class Main extends Component {
    render() {
        return (
            <footer>
                <div className={"container-footer"}>
                    <div className="footer-wrapper">
                        <div className="footer-elem-1">
                            <img className="footerLogo" src={logo} alt=""/>

                            <div className={"footer-elem-1__items"}>
                                <a className={"footer-elem-1__item"} href="#"><FaVk className={"footer-elem-1__icon"}/></a>
                                <a className={"footer-elem-1__item"} href="#"><FaInstagram className={"footer-elem-1__icon"}/></a>
                                <a className={"footer-elem-1__item"} href="#"><FaFacebookF className={"footer-elem-1__icon"}/></a>
                            </div>

                            <div className={"footer-elem-1__info"}>
                                <p>info@heli.com</p>
                                <span>8 (900) 000-00-00</span>
                            </div>
                        </div>

                        <div className="footer-elem-2">
                            <a className={"footer-elem-2__item"} href="#">
                                <div className={"footer-elem-2__items"}>
                                Политика конфиденциальности
                             </div>
                            </a>
                            <span>|</span>
                            <a className={"footer-elem-2__item"} href="#">
                                <div className={"footer-elem-2__items"}>
                                Условия использования
                                </div>
                            </a>

                            <span>|</span>
                            <a className={"footer-elem-2__item"} href="#">
                                <div className={"footer-elem-2__items"}>
                                    Условия оферты
                                </div>
                            </a>

                        </div>
                        <div className="footer-elem-3">
                             <div className="footer-elem-3-item1">© {new Date().getFullYear()} HELI technology ltd.</div>
                                <div className="footer-elem-3-item2">
                                     Информация, представленная на сайте, не может быть использована для
                                     постановки диагноза, назначения лечения и не заменяет прием врача.
                                </div>
                                <div className={"footer-jscorp"}>
                                    <div className={"footer-jscorp__text"}  >При поддержке:</div>
                                    <div className={"jscorp-bgr"}>
                                    <div className={"jscorp"}>
                                         <a href="https://jscorp.ru/" className="footer-elem-3-logo"><img className="footer-logojs" src={jscorplogos}/></a>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default withRouter(Main);
