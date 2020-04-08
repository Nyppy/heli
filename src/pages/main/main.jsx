import React from "react";

import {withRouter, Link} from "react-router-dom";

import "./main.css";

import InputMask from 'react-input-mask';

import Header from "../../components/Header/Header.jsx"

import doctor_main from "../../assets/img/doctor-main.png"
import app_store from "../../assets/img/app-store.png"
import app_google from "../../assets/img/app-google.png"
import logo from "../../assets/img/logo-header.png"
import doctor from "../../assets/img/doctor.png"
import heart from "../../assets/img/heart.png"
import sos from "../../assets/img/sos.png"
import ecg from "../../assets/img/ecg.png"
import pressure from "../../assets/img/pressure.png"
import sleep from "../../assets/img/sleep.png"
import stress from "../../assets/img/stress.png"
import cardiogram from "../../assets/img/cardiogram.png"

import run from "../../assets/img/run.png"
import sleep_1 from "../../assets/img/sleep-1.png"
import wokr from "../../assets/img/work.png"
import bol from "../../assets/img/bol.png"
import pc from "../../assets/img/pc.png"
import car from "../../assets/img/car.png"
import person from "../../assets/img/person.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
import vk from "../../assets/img/vk.png"
import js_logo from "../../assets/img/js-logo.png"
import jscorplogos from "../../assets/img/jscorplogos.png"
import Price from "../../components/Price/Price";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            name: ''
        }

        this.name = React.createRef()
        this.phone = React.createRef()
    }

    onChangePhone = e => {
        this.setState({...this.state, phone: e.target.value});
    }

    onChangeName = e => {
        this.setState({...this.state, name: e.target.value});
    }

    save = e => {
        e.preventDefault()

        console.log(this.state.phone, this.state.name)

        this.setState({...this.state, name: '', phone: ''})
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
                            <p className="info-main-block-1-h-text">Современное решение в истории<br/>
                                <span style={{color: '#FF0017', fontSize: '3.5vh'}}>homecare</span> девайсов
                            </p>
                            <div>
                            <span style={{marginTop: '3vh', fontSize: '2.2vh', color: '#565A5E'}}>
                                Вы можете контролировать свое здоровье, зная, что их данные
                                автоматически передаются медицинским работникам. Не нужно
                                лишний раз ходить к врачу c HELI врач будет с вами всегда
                                на связи.
                            </span>
                            </div>
                            <span className="main-content-button">Узнать подробности</span>
                            <div className="main-content-button-app">
                                <Link to=""><img className="img-app-main" src={app_store} alt=""/></Link>
                                <Link to=""><img className="img-app-main" src={app_google} alt=""/></Link>
                            </div>
                            <span className="blockTextApp">Установи приложение на свой телефон</span>
                        </div>
                    </div>
                </div>

                <Price/>

                <div className="content-main-block-3">
                    <img src={logo} className="logo-content-block-3" alt=""/>
                    <span className="content-main-block-3-h-text">Персональное ЭКГ с 1 отведением</span>
                    <span className="content-main-block-3-text">Равным образом консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития. </span>

                    <div className="main-elem-block-3">
                        <div className="elem-block-3">
                            <div>
                                <img src={doctor} alt=""/>
                                <span>После операции</span>
                            </div>
                            <span>HELI - это удобный способ 
                                контролировать рецидив AFib 
                                после операции на сердце.
                            </span>
                        </div>

                        <div className="elem-block-3">
                            <div>
                                <img src={heart} alt=""/>
                                <span>Качество жизни</span>
                            </div>
                            <span>Самоконтроль с HELI улучшает 
                                обнаружение AFib и самооценку 
                                качества жизни.
                            </span>
                        </div>

                        <div className="elem-block-3">
                            <div>
                                <img src={sos} alt=""/>
                                <span>Экстренный вызов</span>
                            </div>
                            <span>Ваши родственники или врач
                                получат уведомление о том, что
                                с вашим здоровьем что-то не так.
                            </span>
                        </div>
                    </div>

                    <div className='main-elem-block-3-1'>
                        <div className="elem-block-3-1">
                            <img src={ecg} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={pressure} style={{width: '4vw'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={cardiogram} style={{width: '6vw'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={stress} style={{width: '4.2vw'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>

                        <div className="elem-block-3-1">
                            <img src={sleep} style={{width: '6vw'}} alt=""/>
                            <span>Нужен текст</span>
                        </div>
                    </div>
                </div>

                {/* Закоментил на время, пока не разберемся с фото */}
                {/* <div className="content-main-block-4">
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
                            <img src={sleep_1} style={{width: '48vw', height: '40vh', marginTop: '20vh'}} alt=""/>

                        </div>
                        <div>
                            <span
                                style={{position: 'absolute', margin: '93vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>Когда вы болеете</span>
                            <img src={bol} style={{width: '30vw', height: '80vh', marginTop: '20vh'}} alt=""/>

                        </div>

                    </div>
                    
                    <span style={{position: 'absolute', margin: '90vh 0 0 10vh', color: '#fff', fontSize: '3vh'}}>Когда вы работаете</span>
                    <img src={wokr} style={{width: '45vw', height: '40vh', marginTop: '-40.3vh'}} alt=""/>
                    
                    <div>
                        <img className="blockLogoHeli" src={logo} alt=""/>
                    </div>
                </div> */}


                <div className="content-main-block-5">
                    <div className='main-elem-block-5-1'>
                        <div className="block-5-1">
                            <p style={{marginBottom: '2vw', fontSize: '3vh'}}>
                                Новый способ превратить свободное
                                время в положительный результат
                                и доход для вашей практики.
                            </p>

                            <p style={{fontSize: '2.2vh'}}>
                                HELI уникальная разработка для удаленного мониторинга
                                пациентов. Следите за первичными показателями пациентов
                                на расстоянии, ведите карту,назначайте лечение или
                                онлайн консультацию, когда вам это удобно. Теперь
                                монетизировать удаленный мониторинг пациентов стало
                                проще, чем когда-либо.
                            </p>

                        </div>

                        <img style={{width: '40vw'}} src={pc} alt=""/>
                    </div>
                    <div className="">
                        <button className="button-shop block5Button" style={{
                            backgroundColor: '#FF0020',
                            padding: '1vh 4vh 1vh 4vh',
                            fontSize: '3vh'
                        }}>Присоединиться
                        </button>
                    </div>

                    <div className='main-elem-block-5-2'>
                        <img style={{width: '70vw'}} src={car} alt=""/>

                        <div className="block-5-1">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginBottom: '2vw',
                                alignItems: 'center'
                            }}>
                                <p style={{fontSize: '3vh'}}>
                                    Cнижаем риск повторной<br/> госпитализации на
                                </p>

                                <span style={{fontSize: '7vh', color: '#FF0020', marginLeft: '4vh'}}>76%</span>
                            </div>


                            <p className="content-main-block-5-text">
                                Равным образом консультация с
                                широким активом позволяет выполнять
                                важные задания по разработке дальнейших
                                направлений развития.
                            </p>

                            <button className="button-shop content-main-block-5-button">Узнать подробнее
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content-main-block-6">
                    <p className="block6-h-text">Упражнения для продления жизни</p>
                    <p className="block6-text">
                        Дыхательная терапия, контроль стресса и мониторинг сна
                        улучшат ваше здоровье. Взгляните на мир глазами здорового человека.
                    </p>

                    <button className="button-shop"
                            style={{backgroundColor: '#FF0020', padding: '1vh 4vh 1vh 4vh', fontSize: '3vh'}}>Узнать
                        подробнее
                    </button>
                </div>

                <div className="content-main-block-7">
                    <span className="content-main-block-7-h-text">Записаться на тестирование</span>

                    <p className="content-main-block-7-text">Равным образом
                        консультация с широким активом позволяет выполнять важные задания по разработке дальнейших
                        направлений развития. </p>

                    <form onSubmit={this.save} className="form-elem-7">
                        <input className='input-form-7' defaultValue={this.state.name} required
                               onChange={this.onChangeName} placeholder="Имя *" type="text"/>
                        <InputMask className='input-form-7' mask="8(999)999-99-99" ref={this.phone}
                                   placeholder="Телефон *" defaultValue={this.state.phone} onChange={this.onChangePhone}
                                   id="phone" maskChar={null} required placeholder="Ваш телефон *"/>
                        <label className="blockConditions">
                            <input type="radio" style={{fontSize: '2vh'}} required/>
                            Принимаю условия политики конфиденциальности
                        </label>

                        <button className='input-form-7 button-form-7 ' type="submit">Присоединиться</button>
                    </form>
                </div>

                <div className="content-main-block-8">
                    <span style={{color: '#31383D', fontSize: '4.2vh'}}>Отзывы</span>

                    <div className="review-block">
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>

                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>

                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>
                    </div>

                    <div className="review-block">
                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>

                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>

                        <div className="review-elem">
                            <div className="imageBox">
                                <img src={person} alt=""/>

                                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2vh'}}>
                                    <span style={{color: "#707070", fontSize: '2.6vh'}}>Анастасия Разумовская</span>
                                    <span style={{color: '#A2A2A2', fontSize: '1.8vh'}}>Владелец ветклиники </span>
                                    <span style={{color: '#FF0020', fontSize: '2.2vh'}}>“Клиника”</span>
                                </div>
                            </div>

                            <p className="imageBoxText">
                                Мы начали сотрудничество с Clinic более года назад.
                                Наши четвероногие пациенты теперь получают помощь
                                оперативнее...
                            </p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-elem-1">
                            <img className="footerLogo" src={logo} alt=""/>

                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={vk} alt=""/>
                                <img style={{margin: '0 1vh 0 1vh'}} src={twitter} alt=""/>
                                <img src={facebook} alt=""/>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', color: '#31383D'}}>
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