import React,{Component} from "react"
import Header from '../../components/Header/Header'
import '../../pages/doctors/main.css'
import doctor from  '../../assets/img/doctors_main.png'

class Doctors extends Component {

    render () {
        return (
            <div className={"wrapper-doctors"}>
                {/*<Header />*/}
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
                <div className={"content-block-3"} >
                    <div className={"container"}>
                        <div className="content-block-3__inner">
                            <div className={"content-block-3__step1"}>
                                <div className={"content-block-3__title"}>ШАГ 1</div>
                                <div className={"content-block-3__subtitle"}>РЕГИСТРАЦИЯ</div>
                                <form action="" className={"content-block-3__form"}>
                                    <input type="text" placeholder={"Имя"}/>
                                    <input type="text" placeholder={"Фамилия"}/>
                                    <input type="Email" placeholder={"Email"}/>
                                    <input type="text" placeholder={"Специализация"}/>
                                    <input type="text" placeholder={"Город"}/>
                                    <input type="text" placeholder={"Откуда узнали о HELI?"}/>
                                    <input type="checkbox"/> принимаю условия <span>политики конфиденциальности</span>
                                    <a href={"#"} className="main-content-button">Присоединиться</a>
                                </form>
                            </div>
                            <div className={"content-block-3__step2"}>
                                <div className={"content-block-3__title"}>ШАГ 2</div>
                                <div className={"content-block-3__img"}><img src="" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Doctors