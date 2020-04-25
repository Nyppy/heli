import React from "react";

import {withRouter, Link} from "react-router-dom";

import axios from 'axios'

import "./main.css";

import InputMask from 'react-input-mask';

import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"

import doctor_main from "../../assets/img/doctor-main.png"
import logo1 from "../../assets/img/logo1.png"
import doctor from "../../assets/img/doctor.png"
import heart from "../../assets/img/heart.png"
import sos from "../../assets/img/sos.png"
import ecg from "../../assets/img/ecg.png"
import pressure from "../../assets/img/pressure.png"
import lung from "../../assets/img/lung.png"
import stress from "../../assets/img/stress.png"
import cardiogram from "../../assets/img/cardiogram.png"

import pc from "../../assets/img/pc.png"
import guy from "../../assets/img/guy.png"
import facebook2 from "../../assets/img/facebook2.png"
import twitter2 from "../../assets/img/twitter2.png"
import vk2 from "../../assets/img/vk2.png"
import jscorplogos from "../../assets/img/jscorplogos.png"
import Price from "../../components/Price/Price";
import rev1 from "../../assets/img/rev1.png"
import rev2 from "../../assets/img/rev2.png"
import rev3 from "../../assets/img/rev3.png"
import rev4 from "../../assets/img/rev4.png"
import rev5 from "../../assets/img/rev5.png"
import rev6 from "../../assets/img/rev6.png"
import runing1 from "../../assets/img/runing1.png"
import working1 from "../../assets/img/working1.png"
import hill1 from "../../assets/img/hill1.png"
import sleeping1 from "../../assets/img/sleeping1.png"
import HeliBand from "../../components/HeliBand/HeliBand";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            name: '',
            openPopup: false,
            text_send_message: '',
            send: false,
        };

        this.modal = React.createRef();
        this.name = React.createRef();
        this.phone = React.createRef()
        this.button_submit = React.createRef()
        this.message_send = React.createRef()
    }

    showPopup = () => {
        this.setState({openPopup: true})
    };

    hidePopup = (e) => {
        if (e.target.id === 'modal')
            this.setState({openPopup: false})
    };

    onChangePhone = e => {
        this.setState({...this.state, phone: e.target.value});
    };

    onChangeName = e => {
        this.setState({...this.state, name: e.target.value});
    };

    save = e => {
        e.preventDefault();

        this.sendEmail('Присоединиться')
        this.setState({...this.state, name: '', phone: ''})
    };

    sendEmail(type) {
        let data = {
            service_id: 'yandex',
            template_id: '1',
            user_id: 'user_uuAvsNRqtA75Exr9r8uiU',
            template_params: {
                name: this.state.name,
                phone: this.state.phone,
                type: type
            }
        }
        this.button_submit.current.id = 'hide-button'
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            .then((result) => {
                console.log(result);
                this.state.text_send_message = 'Ваша заявка отправлена!'
                this.message_send.current.style.display = 'block'
                this.button_submit.current.id = ''
            }, (error) => {
                this.message_send.current.style.display = 'block'
                this.state.text_send_message = 'Ваша заявка не отправлена! Повторите попытку позже!'
                console.log(error);
            });

        setTimeout(() => {
            this.message_send.current.style.display = 'none'
        }, 3000)
    }

    render() {
        return (
            <div className="wrapper-page-main">
                <Header/>

                <div className="content-page-main">
                    <div className="content-main-block-1">
                        <div className="main-img-doctor">
                            <img className="main-img-doctor" src={doctor_main} alt=""/>
                        </div>

                        <div className="info-main-block-1">
                            <p className="info-main-block-1-h-text">Современное решение в истории ранней
                                диагностики
                                <span style={{color: '#FF0017'}}> COVID-19</span> и мониторинга
                                состояния здоровья
                            </p>
                            <div className="infoblock1">
                            <span className="infoblock1_text">
                                Вы можете контролировать свое здоровье, зная, что их данные
                                автоматически передаются искусственному интеллекту или медицинскому работнику по вашему выбору. Не нужно
                                лишний раз ходить к врачу, искусственный интеллект HELI сделает анализ вашего здоровья самостоятельно.
                            </span>
                            </div>
                            <span className="main-content-button">ОФОРМИТЬ ПРЕДЗАКАЗ</span>
                            {/*<div className="main-content-button-app">*/}
                            {/*    <Link to=""><img className="img-app-main" src={app_store} alt=""/></Link>*/}
                            {/*    <Link to=""><img className="img-app-main" src={app_google} alt=""/></Link>*/}
                            {/*</div>*/}
                            {/*<span className="blockTextApp">Установи приложение на свой телефон</span>*/}
                        </div>
                    </div>
                </div>

                <Price/>

                <div className="content-main-block-3">
                    <div className="main-elem-block-3-1p">
                        <div className="main-elem-block-3-1p-text">
                            <p className="content-main-block-3-text">Персональное ЭКГ с 1 отведением, а также с возможностью мониторинга
                                внутренних органов, <span style={{color: '#FF0020'}}>включая легкие</span>!</p>
                        </div>
                        <div>
                        <img src={logo1} className="logo-content-block-3" alt=""/>
                        </div>
                    </div>
                    <div className="main-elem-block-3">
                        <div className="elem-block-3">
                            <div className="elem-block-3-h">
                                <img src={doctor} style={{width: '28px', height: '32px'}} alt=""/>
                                <span>После операции</span>
                            </div>
                            <div className="elem-block-3-text">HELI - это удобный способ
                                контролировать рецидив AFib 
                                после операции на сердце.
                            </div>
                        </div>

                        <div className="elem-block-3">
                            <div className="elem-block-3-h">
                                <img src={heart} style={{width: '31px', height: '28px'}} alt=""/>
                                <span>Качество жизни</span>
                            </div>
                            <div className="elem-block-3-text">
                                Самоконтроль с HELI улучшает
                                обнаружение AFib и самооценку
                                качества жизни.
                            </div>
                        </div>

                        <div className="elem-block-3">
                            <div className="elem-block-3-h">
                                <img src={sos} style={{width: '32px', height: '32px'}} alt=""/>
                                <span>Экстренный вызов</span>
                            </div>
                            <div className="elem-block-3-text">Ваши родственники или врач
                                получат уведомление о том, что
                                с вашим здоровьем что&nbsp;-&nbsp;то&nbsp;не&nbsp;так.
                            </div>
                        </div>
                    </div>

                    <div className='main-elem-block-3-1'>
                        <div className="elem-block-3-1">
                            <img src={ecg} style={{width: '58px', height: '101px'}} alt=""/>
                            <span>ЭКГ</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={pressure} style={{width: '78px', height: '101px'}} alt=""/>
                            <span>Давление</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={cardiogram} style={{width: '107px', height: '97px'}} alt=""/>
                            <span>Пульс</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={stress} style={{width: '76px', height: '94px'}} alt=""/>
                            <span>Стресс</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={lung} style={{width: '94px', height: '94px'}} alt=""/>
                            <span>Дыхание</span>
                        </div>
                    </div>
                </div>

                {/*<input type="button" onClick={this.sendEmail} value="Send" />*/}

                <HeliBand />


                <div className="content-main-block-5">
                    <div className='main-elem-block-5-1'>
                        <div className="block-5-1">
                            <p className="block-5-1-h">
                                <span style={{color: '#FF0020'}}>Новый способ</span> превратить свободное
                                время в <span style={{color: '#FF0020'}}>положительный</span> результат
                                и доход для вашей практики.
                            </p>

                            <p className="block-5-1-text">
                                <span style={{color: '#FF0020'}}>HELI</span> уникальная разработка для удаленного мониторинга
                                пациентов. Следите за первичными показателями пациентов
                                на расстоянии, ведите карту,назначайте лечение или
                                онлайн консультацию, когда вам это удобно. Теперь
                                монетизировать удаленный мониторинг пациентов стало
                                проще, чем когда-либо.
                            </p>

                        </div>

                        <img src={pc} alt=""/>
                    </div>
                    <div className="">
                        <button className="block5Button">Присоединиться
                        </button>
                    </div>

                    <div className='main-elem-block-5-2'>
                        <img src={guy} alt=""/>

                        <div className="block-5-1">
                            <div className="block5-1-h">
                                <p className="content-main-block-5-h">
                                    Снижаем риск госпитализации <span style={{color: '#FF0020'}}>COVID-19 </span>
                                    на <span style={{color: '#FF0020'}}>76%</span></p>
                            </div>
                            <p className="content-main-block-5-text">
                                Благодаря искусственному интеллекту мы можем выявлять нарушения в работе
                                дыхательной системы на ранних стадиях. Вам не нужно лишний раз ходить к врачу,
                                чтобы узнать о вашем здоровье, HELI работает 24/7 на благо вашего здоровья.
                            </p>

                            <button style={{fontSize: '18px'}}
                                    className="button-shop content-main-block-5-button">Узнать подробнее
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content-main-block-6">
                    <h className="block6-h-text">Упражнения для продления жизни</h>
                    <p className="block6-text">
                        Дыхательная терапия поможет улучшить вашу дыхательную систему,
                        контроль стресса и мониторинг сна улучшат ваше здоровье в комплексе.
                        Взгляните на мир глазами здорового человека.
                    </p>

                    <button className="button-shop button-form-6-block"
                            style={{}}>Узнать
                        подробнее
                    </button>
                </div>

                <div className="content-main-block-7">
                    <span className="content-main-block-7-h-text">Записаться на тестирование</span>
                    <p className="content-main-block-7-text">Оставьте свой номер телефона,
                        и наш специалист свяжется с вами, чтобы рассказать возможности и все особенности системы.</p>

                    <span ref={this.message_send}
                          style={{margin: '10px 0 10px 0', display: 'none'}}>Заявка отправлена!</span>
                    <form onSubmit={this.save} className="form-elem-7">
                        <div>
                        <input className='input-form-7 input-form-7-user' defaultValue={this.state.name} required
                               onChange={this.onChangeName} placeholder="Имя *" type="text"/>
                        <InputMask className='input-form-7 input-form-7-2 input-form-7-phone' mask="8(999)999-99-99" ref={this.phone}
                                   placeholder="Телефон *" defaultValue={this.state.phone}
                                   onChange={this.onChangePhone}
                                   id="phone" maskChar={null} required placeholder="+7(___)___ __ __*"/>
                            <button className='input-form-7 button-form-7 button-form-7-block input-form-7-3'
                                    type="submit"
                                    ref={this.button_submit}
                            >Записаться
                            </button>
                        </div>
                        <label className="blockConditions">
                            <input type="checkbox" style={{fontSize: '2vh'}} required/>
                            Принимаю условия <span style={{color: '#FF0020'}}>политики конфиденциальности</span>
                        </label>
                    </form>
                </div>

                <div className="content-main-block-8">
                    <span className="review-block-h">Отзывы</span>

                    <div className="review-block">
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev1} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Анастасия Разумовская</span>
                                    <span className="reviewWorkBlock">Работаю в банке</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        Используя браслет HELI, я могу каждый день
                                        наблюдать за своими показателями здоровья.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev2} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Александр  Смирнов</span>
                                    <span  className="reviewWorkBlock">Работаю юристом</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        Мое давление всегда под контролем. Теперь я могу его измерять в любой момент.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-block">
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev3} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Олег Воронов</span>
                                    <span className="reviewWorkBlock">Спортсмен</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        Я слежу за своим пульсом во время тренировок, теперь они намного эффективнее.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev4} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Татьяна Миронова</span>
                                    <span className="reviewWorkBlock">Работаю в рекламе</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        Теперь я вижу, когда уровень стресса повышается, и я могу во время прекратить
                                        работать.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-block">
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev5} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Евгений Стародубцев</span>
                                    <span className="reviewWorkBlock">Предприниматель</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        Мне сделали операцию на сердце и благодаря HELI, я могу следить за ним всегда.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={rev6} alt=""/>
                                <div className="reviewDesc">
                                    <span className="reviewNameBlock">Мария Попова</span>
                                    <span className="reviewWorkBlock">Работаю в строительной компании</span>
                                    {/*<span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>*/}
                                    <p className="imageBoxText">
                                        C HELI мой день эффективнее. Я получаю рекомендации, как улучшить свое здоровье.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>


            </div>
        )
    }
}

export default withRouter(Main);