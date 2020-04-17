import React from "react";

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
        advantages,
        footnote,
    } = props;


    return <div className="block-price-elem block-price-1" style={customStyle}>
        <p className="blockHeader">{head}</p>
        <p className="blockPriceR">₽<span className="blockPrice">{price}</span></p>
        <span className="blockTermsInfo">{term}</span>
        <ul className="blockPriceText">
            <li style={{color: '#FF0020', fontSize: '22px', marginBottom: '1vh', listStyleType: 'none', marginLeft: '-20px'}}>Возможности:</li>
            <li>
                {advantagesItems}
            </li>
        </ul>
        {/*<span className="blockPriceText2"><span style={{color: '#FF0020'}}>*</span>{footnote}</span>*/}
        <button className="button-shop">Приобрести</button>
    </div>;

};

export default PriceItem;