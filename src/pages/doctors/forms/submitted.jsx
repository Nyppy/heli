import React,{Component} from 'react'
import './styles.css'
import img from '../../../assets/img/logo-sabmitted.png'
import logo from '../../../assets/img/logo-header.png'


export default class submitted extends Component {

    render () {
        return (
            <div className={'form-wrapper'}>
                <div className="form-logo"><img src={logo} alt="logo"/></div>
                <div className="form-title">Ваша заявка оформлена</div>
                <div className="form-text">
                    Наш менеджер с вами свяжется, как
                    только обработает вашу заявку.
                </div>
                    <div className="img-form"><img src={img} alt="logo"/></div>
                    <button type="submit"  className={"form-btn"} onClick={this.props.onClose} >Хорошо</button>
                <div className={"form-subtitle"}>
                    СПАСИБО ЧТО ВЫБРАЛИ НАС!
                </div>
            </div>
        )
    }
}