import React from 'react';

import './FooterStyle.css';
import logoMin__white from '../../multimedia/logoMin__white.svg';

const Footer = () => {
    return (
        <div className="footer col-12 row p-0 pb-2 px-md-3 justify-content-center">

            <div className="col-12 col-lg-10 col-xl-8 col-xxl-10 row m-0 p-0">
                <div className="col-5 col-xl-4 mt-5 ms-4 me-auto logoFooter">
                    <img className="logoFooter__img" src={logoMin__white} alt="logo"/>
                </div>

                <div className="col-5 col-sm-3 mt-5 ms-auto me-2 ayuda">
                    <button className="ayuda__btn">Cómo usarlos?</button>
                </div>

                <div className="col-11 mt-4 mb-5 mb-md-3 ms-auto me-2 creditos">
                    <p className="creditos__des my-2">Desarrollado x Paloma González</p>
                    <p className="creditos__dis my-2">Diseñado x Ailín Carlés</p>
                    <p className="creditos__ano my-2">- 2021 -</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
