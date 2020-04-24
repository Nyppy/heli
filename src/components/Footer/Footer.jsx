import React, {Component} from "react";

import {withRouter, Link} from "react-router-dom";

import "./Footer.css"
import Modal from './modal/modal'

import PolicyComponent  from "./ComponetFooter/policy"
import ConditionComponent from "./ComponetFooter/conditions"
import OfferComponent from "./ComponetFooter/offer"
import logo from "../../assets/img/logo-header.png"
import jscorplogos from "../../assets/img/jscorplogos.png"
import { FaVk,FaFacebookF,FaInstagram,FaTelegramPlane } from "react-icons/fa";



class Main extends Component {


    state={
        policy:false,
        conditions:false,
        offer:false
    }



    onCloseModal = () => (
        this.setState({
            policy:false,
            conditions:false,
            offer:false
        })
    )




    render() {



        const { policy, conditions, offer}= this.state


        let modalContent
        if(policy) {
            modalContent = <PolicyComponent/>
        }
        else if(conditions) {
            modalContent = <ConditionComponent/>
        }
        else if  (offer) {
            modalContent = <OfferComponent/>
        }

        if(policy || conditions || offer) {
            return (
                <Modal
                    modalContent = {modalContent}
                    onCloseModal ={this.onCloseModal}
                />
            )
        }


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
                                {/*<Modal  text={"Политика конфиденциальности"}/>*/}
                            {/*<span>|</span>*/}
                                {/*<Modal  text={"Условия использования"}/>*/}
                            {/*<span>|</span>*/}
                                {/*<Modal  text={"Условия оферты"}/>*/}
                            <button className={"footer-elem-2__item"} onClick={()=>this.setState({ policy: true })} >
                                <div className={"footer-elem-2__items"}>
                                    Политика конфиденциальности
                                </div>
                            </button>
                                <span>|</span>
                            <button className={"footer-elem-2__item"} onClick={()=>this.setState({ conditions: true })} >
                                <div className={"footer-elem-2__items"}>
                                    Условия использования
                                </div>
                            </button>
                            {/*<span>|</span>*/}
                            {/*<button className={"footer-elem-2__item"} onClick={()=>this.setState({ offer: true })} >*/}
                                {/*<div className={"footer-elem-2__items"}>*/}
                                    {/*Условия оферты*/}
                                {/*</div>*/}
                            {/*</button>*/}
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
