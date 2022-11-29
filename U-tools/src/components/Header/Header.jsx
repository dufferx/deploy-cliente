import React, { useState } from "react";
import classes from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { VscMenu } from "react-icons/vsc";
import './Header.css'

const Header = () => {

    const [isActive, setActive]= useState("false")


    const { logout, user} = useUserContext();   
    const navigate = useNavigate();

    const redirectHandler = (e) => {
        e.preventDefault();
        navigate('/cumcalculator');
        }

    const redirectHandler2 = (e) => {
            e.preventDefault();
            navigate('/gradecalculator');
        }

    const redirectHandler3 = (e) => {
        e.preventDefault();
        navigate('/toolsmenu');
    }

    const redirectHandler4 = (e) => {
        e.preventDefault();
        logout();
        navigate('/');
    }

    const hambclick =(e) =>{
        setActive(!isActive);
    }

    return (

        <header>
        <nav>
       <div className="containernav">
    <img onClick={redirectHandler3}
    className="nav-imagen" src={logo}/>
        <div className="menu">
            <a onClick={redirectHandler2} >Calculadar Nota</a>
            <a onClick={redirectHandler}>Calcular CUM</a>
            <a onClick={redirectHandler4} class="is-active">LOGOUT</a>
        </div>
    
        <button 
        className={isActive ? "hamburguer": "hamburguer is-active"}
        onClick={hambclick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
       </div>
    </nav>

        <div className={isActive ? "mobile-menu": "mobile-menu is-open"}>
        <a onClick={redirectHandler2} >Calculadar Nota</a>
            <a onClick={redirectHandler}>Calcular CUM</a>
            <a onClick={redirectHandler4} class="is-active">LOGOUT</a>
        </div>

    </header>
    );
}

export default Header;

