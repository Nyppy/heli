import React, {Component} from "react";

import {withRouter, Link} from "react-router-dom";

import "./Footer.css"

import logo from "../../assets/img/logo-header.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
import vk from "../../assets/img/vk.png"
import jscorplogos from "../../assets/img/jscorplogos.png"


class Main extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-elem-1">
                    <img className="footerLogo" src={logo} alt=""/>

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <img className="img-footer-social" src={vk} alt=""/>
                        <img className="img-footer-social" style={{margin: '0 1vh 0 1vh'}} src={twitter} alt=""/>
                        <img className="img-footer-social" src={facebook} alt=""/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', color: '#31383D', fontSize: '2.4vh'}}>
                        <span style={{marginBottom: '0.5vh'}}>info@heli.com</span>
                        <span>8 (900) 000-00-00</span>
                    </div>
                </div>

                <div className="footer-elem-2">
                    <Link style={{color: '#31383D'}} to="#">Политика конфиденциальности</Link>
                    <span style={{marginRight: '1vh', marginLeft: '1vh'}}>|</span>
                    <Link style={{color: '#31383D'}} to="#">Условия использования</Link>
                    <span style={{marginRight: '1vh', marginLeft: '1vh'}}>|</span>
                    <Link style={{color: '#31383D'}} to="#">Условия оферты</Link>
                </div>

                <div className="footer-elem-3">
                    <span
                        className="footer-elem-3-item">© {new Date().getFullYear()} HELI technology ltd.</span>
                    <span className="footer-elem-3-item" style={{color: '#31383D', width: '40vw'}}>
                        Информация, представленная на сайте, не может быть использована для 
                        постановки диагноза, назначения лечения и не заменяет прием врача.
                    </span>

                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: '2vh', alignItems: 'flex-end'}}>
                        <span style={{marginBottom: '1.2vh', fontSize: '2vh'}}>При поддержке:</span>
                        <a href="https://jscorp.ru/" className="footer-elem-3-logo"><img className="footer-logojs" src={jscorplogos}/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Main);
