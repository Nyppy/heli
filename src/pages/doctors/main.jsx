import React,{Component} from "react"
import Header from '../../components/Header/Header'
import '../../pages/doctors/main.css'
import doctor from  '../../assets/img/doctors_main.png'
import block4 from '../../assets/img/3299743.png'
import img1 from "../../assets/img/614.png"

class Doctors extends Component {

    render () {
        return (
            <div className={"wrapper-doctors"}>
                <Header />
                <div className="content-page-main">
                    <div className="content-main-block-1">
                        <div className="main-img-doctor">
                            <img className="main-img-doctor" src={doctor} alt="doctor"/>
                        </div>

                        <div className="info-main-block-1">
                            <p className="info-main-block-1-h-text">Консультируйте ваших
                                пациентов вместе с <span style={{color: '#FF0017', fontSize: '3.5vh'}}>HELI</span>
                            </p>
                            <div>
                            <span style={{marginTop: '3vh', fontSize: '2.2vh', color: '#565A5E'}}>
                                Мы создаем экосистему по комплексному уходу
                                за здоровьем, где вы можете эффективно
                                использовать свое время и консультировать
                                большее количество ваших пациентов.
                            </span>
                            </div>
                            <a href={"#"} className="main-content-button">Присоединиться</a>
                        </div>
                    </div>
                </div>
                <section className={"content-block-2"}>
                        <div className={"container"}>
                            <div className="content-block-2-inner">
                                    <div className={"content-block-2__title"}>
                                         ЕСТЬ ТОЛЬКО ОДИН СПОСОБ ПОПАСТЬ К НАМ
                                    </div>
                                    <div className="content-block-2__text">
                                           Подайте заявку, чтобы подключиться к экосистеме удаленного мониторинга за здоровье ваших пациентов.
                                           Пригласите ваших пациентов на платформу HELI,
                                           чтобы эффективнее вести наблюдение за ними. Получайте новых пациентов с HELI.
                                    </div>
                            </div>
                        </div>
                </section>
                <div className={"content-block-3 content-block-3__option"} >
                    <div className={"container"}>
                        <div className="content-block-3__inner">
                            <div className={"content-block-3__step1"}>
                                <div className={"content-block-3__title"}>ШАГ 1</div>
                                <div className={"content-block-3__subtitle"}>РЕГИСТРАЦИЯ</div>
                                <form  className={"form"}>
                                    <input className={"input"} type="text" placeholder={"Имя"}/>
                                    <input className={"input"} type="text" placeholder={"Фамилия"}/>
                                    <input className={"input"} type="Email" placeholder={"Email"}/>
                                    <input className={"input"} type="text" placeholder={"Специализация"}/>
                                    <input className={"input"} type="text" placeholder={"Город"}/>
                                    <input className={"input"} type="text" placeholder={"Откуда узнали о HELI?"}/>
                                    <div className={"content-checkbox"}>
                                        <input className={"checkbox"} type="checkbox" id={"checkbox-id"}/>
                                        <label className={"label"} htmlFor="checkbox-id">
                                            принимаю условия <span>политики конфиденциальности</span>
                                        </label>
                                    </div>
                                    <a href={"#"} className="main-content-button content-block-3__button">Присоединиться</a>
                                </form>
                            </div>
                            <div className={"content-block-3__step2"}>
                                <div className={"content-block-3__title content-block-3__steps2 "}>ШАГ 2</div>
                                <div className={"content-block-3__img"}>
                                    <div className={"content-block-3__text"}>
                                        Наблюдайте за показателями
                                        ваших пациентов и при необходимости
                                        проводите с ними консультации по
                                        улучшению их здоровья
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"content-block-4 content-block-4__option"}>
                    <div className={"container"}>
                        <div className={"content-block-4__inner"}>
                            <div className={"content-block-4__title"}>
                                КОМПЛЕКСНОЕ УЛУЧШЕНИЕ ЗДОРОВЬЯ
                                ВАШИХ ПАЦИЕНТОВ
                                ВМЕСТЕ С ПЛАТФОРМОЙ HELI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Doctors