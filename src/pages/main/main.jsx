import React from "react";

import {withRouter, Link} from "react-router-dom";

import axios from 'axios'

import "./main.css";

import InputMask from 'react-input-mask';

import Header from "../../components/Header/Header.jsx"

import doctor_main from "../../assets/img/doctor-main.png"
import app_store from "../../assets/img/app-store.png"
import app_google from "../../assets/img/app-google.png"
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
import rev6 from "../../assets/img/rev5.png"
import run from "../../assets/img/run.png"
import work from "../../assets/img/work.png"
import bol from "../../assets/img/bol.png"
import sleeping from "../../assets/img/sleeping.png"

import emailjs from 'emailjs-com';


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
                                <span style={{color: '#FF0017', fontSize: '49px'}}> COVID-19</span> и мониторинга
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
                                с вашим здоровьем что-то не так.
                            </div>
                        </div>
                    </div>

                    <div className='main-elem-block-3-1'>
                        <div className="elem-block-3-1">
                            <img src={ecg} style={{width: '58px', height: '101px'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={pressure} style={{width: '78px', height: '101px'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={cardiogram} style={{width: '107px', height: '97px'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={stress} style={{width: '76px', height: '94px'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={lung} style={{width: '94px', height: '94px'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>
                    </div>
                </div>

                {/*<input type="button" onClick={this.sendEmail} value="Send" />*/}

                {/* Закоментил на время, пока не разберемся с фото */}
                <div className="content-main-block-4">
                    <div className='content-block-4-text'>
                        <span style={{fontSize: '5.5vh', color: '#FF0020'}}>HELI BAND</span>
                        <span style={{color: '#31383D', fontSize: '3vh', marginBottom: '2vh'}}>Пользуйтесь где вам удобно</span>
                        <span style={{color: '#565A5E', fontSize: '2vh'}}>
                            Равным образом консультация с широким
                            активом позволяет выполнять важные задания
                            по разработке дальнейших направлений развития.
                            Таким образом сложившаяся структура организации
                            играет важную роль в формировании существенных
                            финансовых и административных условий.
                        </span>

                    </div>
                    <div className="cont-1-4">
                        <div>
                            <span
                                style={{position: 'absolute', margin: '54vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>На пробежке</span>
                            <img src={run} style={{width: '25vw', height: '60vh'}} alt=""/>

                        </div>
                        <div>
                            <span
                                style={{position: 'absolute', margin: '54vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>Когда спите</span>
                            <img src={sleeping} style={{width: '48vw', height: '40vh', marginTop: '20vh'}} alt=""/>

                        </div>
                        <div>
                            <span
                                style={{position: 'absolute', margin: '93vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>Когда вы болеете</span>
                            <img src={bol} style={{width: '30vw', height: '80vh', marginTop: '20vh'}} alt=""/>

                        </div>

                    </div>

                    <span style={{position: 'absolute', margin: '90vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>Когда вы работаете</span>
                    <img src={work} style={{width: '45vw', height: '40vh', marginTop: '-40.3vh'}} alt=""/>

                    <div>
                        <img className="blockLogoHeli" src={logo1} alt=""/>
                    </div>
                </div>


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
                        <img style={{width: '70vw'}} src={guy} alt=""/>

                        <div className="block-5-1">
                            <div className="block5-1-h">
                                <p style={{fontSize: '47px'}}>
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

                    <p className="content-main-block-7-text">Равным образом
                        консультация с широким активом позволяет выполнять важные задания по разработке дальнейших
                        направлений развития. </p>

                    <span ref={this.message_send}
                          style={{margin: '10px 0 10px 0', display: 'none'}}>Заявка отправлена!</span>
                    <form onSubmit={this.save} className="form-elem-7">
                        <input className='input-form-7' defaultValue={this.state.name} required
                               onChange={this.onChangeName} placeholder="Имя *" type="text"/>
                        <InputMask className='input-form-7 input-form-7-2' mask="8(999)999-99-99" ref={this.phone}
                                   placeholder="Телефон *" defaultValue={this.state.phone}
                                   onChange={this.onChangePhone}
                                   id="phone" maskChar={null} required placeholder="Ваш телефон *"/>
                        <label className="blockConditions">
                            <input type="radio" style={{fontSize: '2vh'}} required/>
                            Принимаю условия политики конфиденциальности
                        </label>
                        <button className='input-form-7 button-form-7 button-form-7-block input-form-7-3'
                                type="submit"
                                ref={this.button_submit}
                        >Записаться
                        </button>
                    </form>
                </div>

                <div className="content-main-block-8">
                    <span style={{color: '#31383D', fontSize: '4.2vh'}}>Отзывы</span>

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
                                        Мое давления всегда под контролем. Теперь я могу его измерять в любой момент.
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
                                        Теперь я вижу когда уровень стресса повышается, и я могу во время прекратить
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

                    <div className="footer">
                        <div className="footer-elem-1">
                            <img className="footerLogo" src={logo1} alt=""/>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img className="footer-icon" src={vk2} alt=""/>
                                <img className="footer-icon" style={{margin: '0 1vh 0 1vh'}} src={twitter2} alt=""/>
                                <img className="footer-icon" src={facebook2} alt=""/>
                            </div>

                            <div className="footer-block-text"
                                 style={{display: 'flex', flexDirection: 'column', color: '#31383D'}}>
                                <span style={{marginBottom: '0.5vh'}}>info@heli.com</span>
                                <span>8 (900) 000-00-00</span>
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
                            <button onClick={this.showPopup}>Политика
                                конфиденциальности
                            </button>
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

                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                                <span style={{marginBottom: '11vh'}}>При поддержке:</span>
                                <a className="footer-elem-3-logo"><img className="footer-logojs" src={jscorplogos}/></a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default withRouter(Main);