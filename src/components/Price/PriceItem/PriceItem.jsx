import React from "react";
import icon from '../../../assets/img/icon.png'

const advantages = [
    'Снятия показателей здоровья',
    'Анализ искусственного интеллекта',
    'Экстренное оповещение',
    'Умный браслет'
];

const advantagesItems = advantages.map((advantage) => <li><span>{advantage}</span></li>);

const PriceItem = (props) => {
    const {
        head,
        price,
        term,
        customStyle,
        blockBox,
        blockPriceImg,
    } = props;


    return <div className={blockBox} style={customStyle}>
        <img src={icon} className={blockPriceImg} />
        <p className="blockHeader">{head}</p>
        <p className="blockPriceR">₽<span className="blockPrice">{price}</span></p>
        <span className="blockTermsInfo">{term}</span>
        <ul className="blockPriceText">
            <li className="blockCapabilities">Возможности:</li>
            <li>
                {advantagesItems}
            </li>
        </ul>
        {/*<span className="blockPriceText2"><span style={{color: '#FF0020'}}>*</span>{footnote}</span>*/}
        <button className="button-shop">Приобрести</button>
    </div>;

};

export default PriceItem;