import React from 'react';
import s from './HeliBand.module.css'

import runing2 from "../../assets/img/runing2.png";
import sleeping2 from "../../assets/img/sleeping2.png";
import hill2 from "../../assets/img/hill2.png";
import working2 from "../../assets/img/working2.png";
import logo1 from "../../assets/img/logo1.png";

const HeliBand = () => {

    return (
        <div className={s.heliBandWrapper}>
            <div className={s.head}>
                <h2 className={s.caption}>HELI BAND</h2>
                <h3 className={s.subCaption}>Пользуйтесь где вам удобно</h3>
                <span className={s.description}>
                    Наша экосистема это новый взгляд на вашу диагностику здоровья. Удобный умный браслет
                    даст возможность следить за вашим здоровьем в любом месте и в любое время, а искусственный
                    интеллект вовремя оповестит об изменениях в организме.
                </span>
            </div>
            <div className={s.run}>
                <span className={`${s.list_item} ${s.list_item_run}`}><span className={s.row}>&#8594;</span> На пробежке</span>
                <img src={runing2} className={s.image} alt=""/>
            </div>
            <div className={s.sleep}>
                <span className={`${s.list_item} ${s.list_item_sleep}`}><span className={s.row}>&#8594;</span> Когда спите</span>
                <img src={sleeping2} className={s.image} alt=""/>
            </div>
            <div className={s.hill}>
                <span className={`${s.list_item} ${s.list_item_hill}`}><span className={s.row}>&#8594;</span> Когда вы болеете</span>
                <img src={hill2} className={s.image} alt=""/>
            </div>
            <div className={s.work}>
                <span className={`${s.list_item} ${s.list_item_work}`}><span className={s.row}>&#8594;</span> Когда вы работаете</span>
                <img src={working2} className={s.image} alt=""/>
            </div>
            <div className={s.logo}>
                <img className={s.imageLogo} src={logo1} alt=""/>
            </div>
        </div>
    )
};

export default HeliBand;