import React from "react";

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
        <p className="blockPrice">₽<span className="blockPrice">{price}</span></p>
        <span className="blockTermsInfo">{term}</span>
        <span style={{color: '#FF0020', fontSize: '3vh', marginBottom: '1vh'}}>Возможности:</span>
        <span className="blockPriceText">
                                Все функции системыУдаленная консультация с врачом
                                Доступ в личный кабинет<br/>
                            </span>
        <span className="blockPriceText2"><span style={{color: '#FF0020'}}>*</span>{footnote}</span>
        <button className="button-shop">Приобрести</button>
    </div>;

};

export default PriceItem;