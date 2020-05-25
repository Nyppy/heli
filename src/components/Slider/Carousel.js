import React from "react";
import Slider from "react-slick";

import "./Slider.css";

import rev1 from "../../assets/img/rev1.png";
import rev2 from "../../assets/img/rev2.png";
import rev3 from "../../assets/img/rev3.png";
import working2 from "../../assets/img/working2.png";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500
    };
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div>Отзыв 1</div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${rev1})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
                <div>
                    <div>Отзыв 2</div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${rev2})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
                <div>
                    <div>Отзыв 3</div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${rev3})`,
                            height: `${window.innerHeight}px`
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;