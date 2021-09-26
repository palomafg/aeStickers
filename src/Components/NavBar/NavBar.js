import React from 'react';
import logo from '../../multimedia/aeStickersLOGO.svg';
import "./NavBarStyle.css";
import { FiSun } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { GiNoseFront, GiLips } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';

const NavBar = () => {
    return (
        <div className="navBar row justify-content-center">
            <div className="logo col-10 col-md-8 col-xl-6 my-3">
                <img className="logo__img" src={logo} alt="logo"/>
            </div>

            <div className="nav col-12 col-md-10 col-xl-8 row">
                <button id="modoClaro" className="nav__item btn col-1 my-2 p-1">
                    <FiSun />
                </button>
                
                <a className="nav__item col-1 m-2 p-1" href=""> <ImEye/> </a>
                <a className="nav__item col-1 m-2 p-1" href=""> <GiNoseFront/> </a>
                <a className="nav__item col-1 m-2 p-1" href=""> <GiLips/> </a>

                <button id="buscar" className="nav__item btn col-1 my-2 p-1">
                    <BiSearchAlt />
                </button>
                
            </div>
        </div>
    );
};

export default NavBar;
