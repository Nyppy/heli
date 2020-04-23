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
                    Круглосуточый мониторинг состояния здоровья
                    с использованием рекомендаций исскуственного интеллекта.
                    +30% к вашему здоровью с экосистемой HELI
                </div>
            </div>
            <div className="backImg" className="block-price">
                <PriceItem blockPriceImg="blockPriceImg" head="Популярный тариф!" price="19'000" term="4 месяца"
                           footnote="Не входит стоимость браслета" blockBox="block-price-elem block-price-1"/>
                <PriceItem blockPriceImg="blockPriceImg" head="Экономный тариф!" price="24'000" term="8 месяцев"
                           footnote="Не входит стоимость браслета" blockBox="block-price-elem block-price-1 blockPriceSecondary"/>
                <PriceItem blockPriceImg="blockPriceImg" head="Супер предложение!" price="30'000" term="12 месяцев"
                           footnote="Не входит стоимость браслета" blockBox="block-price-elem block-price-1"/>
            </div>
            <div className="text-button-block-2 text-block-2">
                <span>Подробнее о тарифах вы сможете узнать у&nbsp;наших консультантов.</span>
                <Link className="button-info-price" to="">Узнать подробности</Link>
            </div>
        </section>
    )
};

export default Price;