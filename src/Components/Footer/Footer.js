import React from 'react';

import './FooterStyle.css';
import logoWhite from '../../multimedia/logoWhite.svg';

const Footer = () => {
    return (
        <div className="footer col-12 row justify-content-center">
            <div className="col-12 col-lg-9 row m-0 p-0">
                <div className="col-5 col-xl-4 my-4 ms-2 me-auto logoFooter">
                    <img className="logoFooter__img" src={logoWhite} alt="logo"/>
                </div>

                <div className="col-4 col-sm-3 my-4 ms-auto me-2 ayuda">
                    <button className="ayuda__btn">Cómo usarlos?</button>
                </div>

                <div className="col-8 my-4 ms-2 me-auto creditos">
                    <p className="creditos__des my-2">Desarrollado x Paloma González</p>
                    <p className="creditos__dis my-2">Diseñado x Ailín Carlés</p>
                    <p className="creditos__ano my-2">- 2021 -</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
