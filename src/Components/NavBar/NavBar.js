import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoBlack from '../../multimedia/logoBlack.svg';
import logoWhite from '../../multimedia/logoWhite.svg';
import "./NavBarStyle.css";
import { FiSun, FiMoon } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { GiNoseFront, GiLips } from 'react-icons/gi';
import CartWidget from '../Cart/CartWidget';
import { DarkContextUse } from '../../Contexts/DarkContext';

const NavBar = () => {

    const { dark, setDark } = DarkContextUse();

    const cambiarModo = () => {

        if(dark){
            setDark(false)
            console.log(dark)
        } else{
            setDark(true)
            console.log(dark)
        }
    }
    
    return (
        <div className={`${dark? 'navBarDark' : 'navBarLight'} fixed-top col-12 row m-0 p-0 px-3 justify-content-center`}>
            
            <div className={`${dark? 'logoDark' : 'logoLight'} col-10 col-sm-8 col-md-6 col-lg-5 col-xxl-4 my-3`}>
                <Link to="/aeStickers/">
                    <img className="logo__img" src={dark? logoWhite : logoBlack} alt="logo"/>
                </Link>
            </div>

            <div className="nav col-12 col-md-10 col-lg-8 col-xxl-9 row">
                <button id="modoClaro"
                        onClick={cambiarModo}
                        className={`${dark? 'nav__itemDark' : 'nav__itemLight'} btn col-1 my-1 p-1`}>
                    {
                    dark?
                        <FiMoon/>
                        :
                        <FiSun/>
                    }
                </button>

                <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                    <NavLink to="/aeStickers/categoria/ojos" activeClassName="nav__itemSelectedLight">
                        <ImEye/>
                    </NavLink>
                </div>

                <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                    <NavLink to="/aeStickers/categoria/narices" activeClassName="nav__itemSelectedLight">
                        <GiNoseFront/>
                    </NavLink>
                </div>

                <div className={`${dark? 'nav__itemDark' : 'nav__itemLight'} col-1 m-1 p-1`}>
                    <NavLink to="/aeStickers/categoria/bocas" activeClassName="nav__itemSelectedLight">
                        <GiLips/>
                    </NavLink>
                </div>

                <div id={`${dark? 'cartDark' : 'cartLight'}`} className="col-1 px-1">
                    <Link to="/aeStickers/carrito" style={{ textDecoration: 'none' }}>
                        <CartWidget/>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;
