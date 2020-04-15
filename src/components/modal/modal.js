import React from "react";

class Modal extends React.Component {
    showPopup() {
        const conf = document.getElementById('conf');
        const modal = document.getElementById('modal');

        const OpenModal = () => {
            modal.style.display = 'block';
        };

        const CloseModal = () => {
            modal.style.display = 'none';
        };
        conf.addEventListener('click', OpenModal);
        modal.addEventListener('click', CloseModal);
    }
    render() {
        return (
            <div id="modal" className="modal">
            </div>
        )
    }
}

export default Modal;



