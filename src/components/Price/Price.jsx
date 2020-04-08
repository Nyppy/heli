import {Link} from "react-router-dom";
import React from "react";
import PriceItem from "./PriceItem/PriceItem";

const Price = (props) => {
    return (
        <section className="content-main-block-2">
            <div className="text-block-2">
                <h2 className="text-head-block-2">Поликлиника в кармане</h2>
                <div className="contentMainBlock2Text">
                    Круглосуточное наблюдение за вашими<br/>
                    показателями организма с&nbsp;использованием<br/>
                    исскуственного интеллекта.
                </div>
            </div>
            <div className="block-price">
                <PriceItem head="Популярный тариф!" price="1499" term="1 месяц"
                           footnote="Не входит стоимость браслета"/>
                <PriceItem head="Экономный тариф!" price="11400" term="6 месяцев"
                           footnote="Не входит стоимость браслета" customStyle={{height: '510px'}}/>
                <PriceItem head="Супер предложение!" price="17100" term="9 месяцев"
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