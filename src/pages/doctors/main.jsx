import React,{Component} from "react"
import Header from '../../components/Header/Header'
import '../../pages/doctors/main.css'
import Popup from 'reactjs-popup'
import doctor from  '../../assets/img/doctors_main.png'
import img1 from '../../assets/img/3299743.png'
import img2 from '../../assets/img/614.png'
import habr from '../../assets/img/habr-1.png'
import regnum from '../../assets/img/regnum.png'
import digital from  '../../assets/img/digital.png'
import admin from '../../assets/img/admin.png'
import edinorog from '../../assets/img/edinorog.png'
import Footer from "../../components/Footer/Footer";
import Feedback from "./forms/Feedback";


class Doctors extends Component {

    state = {
        username:'',
        surname: '',
        email:'',
        specialization:'',
        city:'',
        information:'',
        feedback:false

    }

    openModal =()=> {
        this.setState({ feedback: true });
    }

    closeModal =()=> {
        this.setState({ feedback: false });
    }

    handleUserChange=(ev)=> {
        this.setState({
            [ev.target.name]:ev.target.value,
        })
    }

    save = (ev) => {
        ev.preventDefault()
        this.setState({
            ...this.state,
            username:'',
            surname: '',
            email:'',
            specialization:'',
            city:'',
            information:''
        })
    }

    sendEmail =(type) => {
        let data = {
            template_params: {
                username: this.state.username,
                surname: this.state.surname,
                email: this.state.email,
                specialization: this.state.specialization,
                city: this.state.city,
                information: this.state.information,
                type: type
            }
        }
    }

    render () {

        const {feedback}= this.state
        let modalContent
        if(feedback) {
            modalContent = <Feedback  onClose ={this.closeModal} />
        }
        return (
            <div className={"wrapper-doctors"}>
                <Header />
                <Popup
                    open={feedback}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="modal-main">
                        <button className="close-btn" onClick={this.closeModal}></button>
                        { modalContent}
                    </div>
                </Popup>
                <div className={'content-block-1 content-block-1__option'}>
                    <div className={'container'}>
                        <div className={'content-block-1__inner'}>
                            <div className={'content-block-1__wrapper'}>
                                 <div className={'content-block-1__elements'}>
                                        <img className={'content-block-1__element'} src={doctor} alt="doctor"/>
                                 </div>
                                 <div className={'content-block-1__items'}>
                                         <div className={'content-block-1__title'}>
                                        Консультируйте ваших
                                        пациентов вместе с <span >HELI</span>
                                         </div>
                                         <div className={'content-block-1__subtitle'}>
                                        Мы создаем экосистему по комплексному уходу
                                        за здоровьем, где вы можете эффективно
                                        использовать свое время и консультировать
                                        большее количество ваших пациентов.
                                         </div>
                                        <button type="submit"  className={"form__btn"}  onClick={()=>this.openModal()}>Присоединиться</button>
                                 </div>
                            </div>
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
                                <form  className={"form"} onSubmit={this.save}>
                                    <input className={"input"} type="text" placeholder={"Имя"}  value={this.state.username} onChange={this.handleUserChange} name="username"/>
                                    <input className={"input"} type="text" placeholder={"Фамилия"} value={this.state.surname}   onChange={this.handleUserChange} name={"surname"}/>
                                    <input className={"input"} type="Email" placeholder={"Email"}  value={this.state.email}   onChange={this.handleUserChange} name={"email"}/>
                                    <input className={"input"} type="text" placeholder={"Специализация"} value={this.state.specialization}  onChange={this.handleUserChange} name={"specialization"}/>
                                    <input className={"input"} type="text" placeholder={"Город"} value={this.state.city}    onChange={this.handleUserChange} name={"city"}/>
                                    <input className={"input"} type="text" placeholder={"Откуда узнали о HELI?"} value={this.state.information}   onChange={this.handleUserChange} name={"information"}/>
                                    <div className={"content-checkbox"}>
                                        <input className={"checkbox"} type="checkbox" id={"checkbox-id"} name={"checkbox"}/>
                                        <label className={"label"} htmlFor="checkbox-id">
                                            принимаю условия <span>политики конфиденциальности</span>
                                        </label>
                                    </div>
                                    <button type="sabmit"  className={"form__btn"} onClick={this.sendEmail} >Присоединиться</button>
                                    {/*<a href={"#"} className="main-content-button content-block-3__button">Присоединиться</a>*/}
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
                        <div className={"content-block-4__wrapper"}>
                            <div className={"content-block-4__title"}>
                                КОМПЛЕКСНОЕ УЛУЧШЕНИЕ ЗДОРОВЬЯ
                                ВАШИХ ПАЦИЕНТОВ
                                ВМЕСТЕ С ПЛАТФОРМОЙ HELI
                            </div>
                        </div>
                        <div className={"content-block-4__inner"}>
                            <div className={"content-block-4__items"}>
                                <div className={"content-block-4__item"}>
                                    <img src={img1} alt=""/>
                                    <div className={"content-block-4__text"}>
                                        ФИЗИЧЕСКАЯ
                                        АКТИВНОСТЬ
                                    </div>
                                </div>
                                {/*<div className={"content-block-4__item"}>*/}
                                    {/*<img src={img1} alt=""/>*/}
                                    {/*<div className={"content-block-4__text"}>*/}
                                        {/*эмоциональное*/}
                                        {/*состояние*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <div className={"content-block-4__item"}>
                                    <img src={img1} alt=""/>
                                    <div className={"content-block-4__text"}>
                                        работа
                                        сердца
                                    </div>
                                </div>
                                <div className={"content-block-4__item"}>
                                    <img src={img1} alt=""/>
                                    <div className={"content-block-4__text"}>
                                        состояние
                                        органов
                                    </div>
                                </div>
                                <div className={"content-block-4__item"}>
                                    <img src={img1} alt=""/>
                                    <div className={"content-block-4__text"}>
                                        анализы
                                        пациентов
                                    </div>
                                </div>
                            </div>
                            {/*<div className={"content-block-4__elements"}>*/}
                                    {/*<div className={"content-block-4__element"}>*/}
                                        {/*<div className={"content-block-4__img"}>*/}
                                            {/*<div className={"content-block-4__item"}>*/}
                                                {/*<img src={img1} alt=""/>*/}
                                                {/*<div className={"content-block-4__text"}>*/}
                                                    {/*Семейный*/}
                                                    {/*доктор*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className={"content-block-4__item"}>*/}
                                                {/*<img src={img1} alt=""/>*/}
                                                {/*<div className={"content-block-4__text"}>*/}
                                                    {/*корпоративный*/}
                                                    {/*доктор*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className={"content-block-4__title  content-block-4__BUSINESS"}>*/}
                                            {/*Подключиться к HELI FAMILY*/}
                                            {/*или HELI  BUSINESS*/}
                                        {/*</div>*/}
                                        {/*<form  className={"form"} onSubmit={this.save}>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Доктор"}  value={this.state.username} onChange={this.handleUserChange} name="username"/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"HALI FAMILY"} value={this.state.surname}   onChange={this.handleUserChange} name={"surname"}/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Имя"}  value={this.state.email}   onChange={this.handleUserChange} name={"email"}/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Фамилия"} value={this.state.specialization}  onChange={this.handleUserChange} name={"specialization"}/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Специальность"} value={this.state.city}    onChange={this.handleUserChange} name={"city"}/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Город"} value={this.state.information}   onChange={this.handleUserChange} name={"information"}/>*/}
                                            {/*<input className={"input input-option"} type="text" placeholder={"Телефон"} value={this.state.information}   onChange={this.handleUserChange} name={"information"}/>*/}
                                            {/*<div className={"content-checkbox"}>*/}
                                                {/*<input className={"checkbox"} type="checkbox" id={"checkbox-id1"} name={"checkbox"}/>*/}
                                                {/*<label className={"label"} htmlFor="checkbox-id1">*/}
                                                    {/*принимаю условия <span>политики конфиденциальности</span>*/}
                                                {/*</label>*/}
                                            {/*</div>*/}
                                            {/*<button type="sabmit"  className={"form__btn"} onClick={this.sendEmail} >Присоединиться</button>*/}
                                            {/*/!*<a href={"#"} className="main-content-button content-block-3__button">Присоединиться</a>*!/*/}
                                        {/*</form>*/}
                                    {/*</div>*/}
                                    {/*<div className={"content-block-4__element2"}>*/}
                                        {/*<img src={img2} alt=""/>*/}
                                        {/*<div className={"content-block-4__text2"}>*/}
                                            {/*Наблюдайте сразу за всей семьей*/}
                                            {/*или целой компанией*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={"content-block-5"}>
                    <div className={"container-block-5"}>
                        <div className={"content-block-5__inner"}>
                             <div className={"content-block-5__title"}>
                                 О нас в сети
                             </div>
                            <div className={"content-block-5__wrapper"}>
                                       <a className={"content-block-5__item"} href="https://habr.com/ru/post/495362/" target={"_blank"} rel="noreferrer noopener"><img src={habr} alt="habr"/></a>
                                       <a className={"content-block-5__item"} href="https://regnum.ru/news/society/2893845.html" target={"_blank"} rel="noreferrer noopener"><img src={regnum} alt="regnum"/></a>
                                       <a className={"content-block-5__item"} href="https://leadersofdigital.ru/db/novosti/9485e7b24b1170e1" target={"_blank"} rel="noreferrer noopener"><img src={digital} alt="digital"/></a>
                                       <a className={"content-block-5__item"} href="https://t.me/Theedinorogblog/1118" target={"_blank"} rel="noreferrer noopener"><img className={"content-block-5__edinorog"} src={edinorog} alt="edinorog"/></a>
                                       <a className={"content-block-5__item"} href="https://adm.rkursk.ru/index.php?id=13&mat_id=105426&query=HELI" target={"_blank"} rel="noreferrer noopener">
                                           <img className={"content-block-5__img"} src={admin} alt="admin"/>
                                          <div className={"content-block-5__text"}>
                                              Админстрация Курской области
                                          </div>
                                       </a>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer/>
            </div>
        )
    }
}
export default Doctors