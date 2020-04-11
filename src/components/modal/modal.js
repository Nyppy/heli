import React from "react";

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

