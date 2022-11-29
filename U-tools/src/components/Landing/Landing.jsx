import React from "react";

import calendar from '../../assets/calendar.png';
import landing from '../../assets/landing.png';
import lan2 from '../../assets/landing2.png';
import lan3 from '../../assets/landing3.png';
import svg from '../../assets/home.svg'
import cum from '../../assets/cum.png'
import nota from '../../assets/nota.png'
import './Landing.css'
//import AOS from 'aos';
//import 'aos/dist/aos.css'; 
//import {Scrollbar} from 'smooth-scrollbar-react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useUserContext} from '../../context/UserContext';
import axios from 'axios';




const Landing = () => {
    const navigate = useNavigate();
    const { logout, user} = useUserContext();   
    
    logout();
    



    return (    
        /* <section>   
        <section className={classes["landing-page"]} id={styles["landing1"]}>
                <div id={styles["landing-h"]}>
                    <h1>U-TOOLS</h1>
                    <h2>
                        U-TOOLS es una web de herramientas y utilidades pensado por y para los estudiantes, que tiene como
                        objetivo ayudar a la organización de sus actividades, tareas, exámenes, etc.
                    </h2>
                   
                   
                    <div id={styles["buttons-div"]}>
                    
                        <button onClick={()=> navigate("/auth/signin")}
                        className={classes["botones"]}>
                            LOGIN
                        </button>
                   
                  
                        <button onClick={()=> navigate("/auth/signup")}
                        className={classes["botones"]} 
                        id={styles["invisible"]}>
                            REGISTER
                        </button>
                  
                    </div>
                </div>
                <div id={styles["img-calendar"]}>
                    <img src={calendar} />
                </div>
        </section>

        <section className={classes["landing-page"]} id={styles["landing3"]}>
            <div id={styles["landing-h"]} data-aos="fade-right">
                <h1>CALCULADORA DE NOTA</h1>
                <h2>
                    Registra tus notas y nosotros te mostramos las notas mínimas que necesitas para que apruebes la materia.
                </h2>
            </div>
            <div className={classes["img-calendars"]} data-aos="fade-left">
                <img src={ lan2 }/>
            </div>
        </section>

        <section className={classes["landing-page"]} id={styles["landing4"]}>
            <div id={styles["landing-h"]} data-aos="fade-right">
                <h1>CALCULADORA DE CUM</h1>
                <h2>
                    Todo es automático. Al registrarte ingresas tu historial académico y nosotros calculamos tus “UV” y unidades de mérito,  con tus notas actuales calculamos tu CUM acumulado.
                </h2>
            </div>
            <div className={classes["img-calendars"]} data-aos="fade-left">
                <img src={ lan3 }/>
            </div>
        </section>

    </section>
 }*/



 <div>
    <section className="home" id="home">
    
        <div className="content">
            <h3>U-TOOLS</h3>
            <p>Web de herramientas y utilidades pensada por y para estudiantes universitarios, que tiene como objetivo ayudar a la organización de sus actividades escolares. </p>
            <div className="brotones">
                <button className="btn" onClick={()=> navigate("/auth/signin")}>LOGIN</button> 
                <button className="btn2" onClick={()=> navigate("/auth/signup")}>REGISTER</button>
            </div>
        </div>
    
        <div className="image">
            <img src= {svg} />
        </div>
    
    </section>
    
    
    <section className="features" id="features">
    
        <div className="box-container">
    
            <div className="box">
                <img src= {nota} />
                <h3>Calculadora de nota</h3>
                <p>Todos queremos saber cómo vamos en nuestras materias, nosotros nos encargamos de los cálculos, tú solo ingresas los datos</p>
            </div>
    
            <div className="box">
                <img src={cum} alt=""/>
                <h3>Calcura de CUM</h3>
                <p>Una calculadora totalmente automática, tenemos la única calculadora de coeficiente de unidades online</p>
               
            </div>
    
        </div>
    
    </section>
 </div>
 





        
    );
}


export default Landing;