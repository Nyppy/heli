import {Link} from "react-router-dom";
import React from "react";
import PriceItem from "./PriceItem/PriceItem";
import car from "../../assets/img/car.png";
import back from "../../assets/img/back.png"

const Price = (props) => {
    return (
        <section className="content-main-block-2">
            <div className="text-block-2">
                <h2 className="text-head-block-2">Поликлиника в кармане</h2>
                <div className="contentMainBlock2Text">
                    Круглосуточый мониторинг состояния здоровья<br/>
                    с&nbsp;использованием рекомендаций исскуственного интеллекта.<br/>
                    +30% к вашему здоровью с экосистемой HELI
                </div>
            </div>
            <div className="backImg" className="block-price">
                <PriceItem head="Популярный тариф!" price="19'000" term="4 месяца"
                           footnote="Не входит стоимость браслета"/>
                <PriceItem head="Экономный тариф!" price="32'000" term="8 месяцев"
                           footnote="Не входит стоимость браслета" customStyle={{width: '398px', height: '460px'}}/>
                <PriceItem head="Супер предложение!" price="49'000" term="12 месяцев"
                           footnote="Не входит стоимость браслета"/>
            </div>
            <div className="text-button-block-2 text-block-2">
                <span>Подробнее о тарифах вы сможете узнать у&nbsp;наших консультантов.</span>
                <Link className="button-info-price" to="">Узнать подробности</Link>
            </div>
        </section>
    )
};

export default Price;