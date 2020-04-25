import React,{Component} from 'react'
import './styles.css'
import logo from '../../../assets/img/logo-header.png'



export default class Feedback extends Component {

    state = {
        username:'',
        email:'',
        city:'',
        // OpenForm:true

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
            email:'',
            city:''


        })
        console.log('__1', this.state)
    }

    sendEmail =(type) => {

        let data = {
            template_params: {
                username: this.state.username,
                email: this.state.email,
                city: this.state.city,
                type: type
            }
        }
        // return (
        //     this.setState({
        //     OpenForm:false
        // })
        // )
    }


    render () {
        // const {OpenForm}=this.state
        // if (!OpenForm){
        //     return (
        //         <div className="className">
        //             false
        //         </div>
        //     )
        // }

      return (


          <div className={'form-wrapper'}>
              <div className="form-logo"><img src={logo} alt="logo"/></div>
              <div className="form-title">Обратная связь</div>
              <div className="form-text">
                  Заполните форму, чтобы наш
                  менеджер мог с вами связаться
              </div>
            <form  className={"forms"} onSubmit={this.save}>
                <input className={"forms-input"} type="text" placeholder={"ФИО"}  value={this.state.username} onChange={this.handleUserChange} name="username"/>
                <input className={"forms-input"} type="Email" placeholder={"Email"}  value={this.state.email}   onChange={this.handleUserChange} name={"email"}/>
                <input className={"forms-input"} type="text" placeholder={"Город"} value={this.state.city}    onChange={this.handleUserChange} name={"city"}/>
                <div className={"radio"}>
                    <input className={"radio-input"} type="radio" id={"radio-id"}  />
                    <label className={"radio-label"} htmlFor="radio-id">
                        принимаю условия <span>политики конфиденциальности</span>
                    </label>
                </div>
                <button type="sabmit"  className={"form-btn"} onClick={this.sendEmail}>Оставить заявку</button>
                {/*<a href={"#"} className="main-content-button content-block-3__button">Присоединиться</a>*/}
            </form>
          </div>


    )
        }


}