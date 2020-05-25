import React from "react";

import Carousel from './Carousel';

import "./Slider.css";

const Slider = () => {
    return (
        <div style={{ position: "relative" }}>
            <div className="event_name">
                <Carousel/>
                <div className="wrapper">React Meetting</div>
            </div>
        </div>
    );
};

export default Slider;