import React,{Component} from 'react'
import './modal.css'


 class Modal extends  Component {


     componentDidMount() {
         window.addEventListener('keyup', this.handleKeyUp, false)
         document.addEventListener('click', this.handleOutsideClick, false)
     }

     componentWillUnmount() {
         window.removeEventListener('keyup', this.handleKeyUp, false)
        document.removeEventListener('click', this.handleOutsideClick, false)
     }

     handleKeyUp =(e)=> {

         const keys = {
             27: () => {
                 e.preventDefault()
                 this.props.onCloseModal()
                 window.removeEventListener('keyup', this.handleKeyUp, false)
             }
         }

         if (keys[e.keyCode]) { keys[e.keyCode]() }
     }

     handleOutsideClick =(e) => {

         if (this.modal) {
             if (!this.modal.contains(e.target)) {
                this.props.onCloseModal()
                 document.removeEventListener('click', this.handleOutsideClick, false)
             }
         }
     }

     render() {



         return (
             <div className={"modal"}>
                 <div
                     className="modal-body"
                     ref={node => (this.modal = node)}
                 >

                     <button
                         type="button"
                         className="btn-close"
                         onClick={this.props.onCloseModal}
                     />
                     {this.props.modalContent}
                 </div>
             </div>
         )
     }







}

export default Modal