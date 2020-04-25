import React, {Component} from "react";

import {withRouter, Link} from "react-router-dom";

import "./Footer.css"
// import Modal from './modal/modal'
import logo from "../../assets/img/logo-header.png"
import jscorplogos from "../../assets/img/jscorplogos.png"
import { FaVk,FaFacebookF,FaInstagram,FaTelegramPlane } from "react-icons/fa";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,
        };
    }
    showPopup = () => {
        this.setState({openPopup: true})
    };

    hidePopup = (e) => {
        if (e.target.id === 'modal')
            this.setState({openPopup: false})
    }
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
                                <a className={"footer-elem-1__item"} href="#"><FaTelegramPlane className={"footer-elem-1__icon"}/></a>
                            </div>

                            <div className={"footer-elem-1__info"}>
                                <p>office@jscorp.ru</p>
                                <span>+79192105102</span>
                            </div>
                        </div>

                        <div className="footer-elem-2">
                            {
                                this.state.openPopup &&
                                <div id="modal" className="modal" onClick={this.hidePopup}>
                                    <div id="modalContent" className="modal__content"/>
                                    <div><span className="modal__close" id="close">&times;</span></div>
                                </div>
                            }
                            <Link onClick={this.showPopup}>Политика
                                конфиденциальности
                            </Link>
                            <span style={{marginRight: '1vh', marginLeft: '1vh'}}>|</span>
                            <Link  onClick={this.showPopup} style={{color: '#31383D'}} to="#">Условия использования</Link>
                            <span style={{marginRight: '1vh', marginLeft: '1vh'}}>|</span>
                            <Link  onClick={this.showPopup} style={{color: '#31383D'}} to="#">Условия оферты</Link>
                        </div>
                        <div className="footer-elem-3">
                            <div className="footer-elem-3-item1">© {new Date().getFullYear()} HELI technology ltd.</div>
                            <div className="footer-elem-3-item2">
                                Информация, представленная на сайте, не может быть использована для
                                постановки диагноза, назначения лечения и не заменяет прием врача.
                            </div>
                            <div className={"footer-jscorp"}>
                                <div className={"jscorp-bgr"}>
                                    <div className={"jscorp"}>
                                        <a href="https://jscorp.ru/" className="footer-elem-3-logo" target={'_blank'}><img className="footer-logojs" src={jscorplogos}/></a>
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