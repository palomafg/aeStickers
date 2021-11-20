import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoBlack from '../../multimedia/logoBlack.svg';
import "./NavBarStyle.css";
import { FiSun } from 'react-icons/fi';
import { ImEye } from 'react-icons/im';
import { GiNoseFront, GiLips } from 'react-icons/gi';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
    
    return (
        <div className="navBar fixed-top col-12 row m-0 p-0 px-3 justify-content-center">
            
            <div className="logo col-10 col-sm-8 col-md-6 col-lg-5 col-xxl-4 my-3">
                <Link to="/">
                    <img className="logo__img" src={logoBlack} alt="logo"/>
                </Link>
            </div>

            <div className="nav col-12 col-md-10 col-lg-8 col-xxl-9 row">
                <button id="modoClaro" className="nav__item btn col-1 my-1 p-1">
                    <FiSun/>
                </button>

                <div className="nav__item col-1 m-1 p-1">
                    <NavLink to="/categoria/ojos" activeClassName="nav__itemSelected">
                        <ImEye/>
                    </NavLink>
                </div>

                <div className="nav__item col-1 m-1 p-1">
                    <NavLink to="/categoria/narices" activeClassName="nav__itemSelected">
                        <GiNoseFront/>
                    </NavLink>
                </div>

                <div className="nav__item col-1 m-1 p-1">
                    <NavLink to="/categoria/bocas" activeClassName="nav__itemSelected">
                        <GiLips/>
                    </NavLink>
                </div>

                <div id="cart" className="col-1 px-1">
                    <Link to="/carrito">
                        <CartWidget/>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;
