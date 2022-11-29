import React from "react";
import "./Toolsmenu.css";
import { BsFillCalculatorFill, BsCalendarPlusFill, BsYoutube } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { Link, redirect, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
//import {BrowserRouter as Router, Link} from 'react-router-dom';



const Toolsmenu = () => {
  const navigate = useNavigate();




  const redirectHandler = (e) => {
    e.preventDefault();
    navigate('/chooser');

  }

  const redirectHandler2 = (e) => {
    e.preventDefault();
    navigate('/gradecalculator');
  }

  const redirectHandler3 = (e) => {
    e.preventDefault();
    //location.href = 'https://www.youtube.com/@utoolsweb';
    window.open("https://www.youtube.com/@utoolsweb", "_blank");
   
  }



  return (
    <div class="nav">

      <Header />
      <div class="cont-grande">
        <div class="container">
          <div class="card"  >
            <div onClick={redirectHandler3} 
            class="face face1">
              <div class="content">
                <h3 class = "titulos">Videos explicativos</h3>
                <br />
                <BsYoutube size="14rem" class="iconcale" />
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p> Una lista de reproducción de videos tutoriales con los que podrás conocer el funcionamiento de nuestras herramientas.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div onClick={redirectHandler2}
              class="face face1">
              <div class="content">
                <h3 class = "titulos">Calculador de nota</h3>
                <br />
                <BsFillCalculatorFill size="14rem" class="iconca" />
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>Solo pon tus materias, sus actividades y la calificación de cada una
                  y te dará un aproximado de lo mínimo que necesitarías para aprobar, pero recuerda
                  siempre puedes tener una mejor nota.</p>

              </div>
            </div>
          </div>


          <div class="card">
            <div onClick={redirectHandler}
              class="face face1">
              <div class="content">
                <h3 class = "titulos">Calculadora de cum</h3>
                <br />
                <FaGraduationCap size="14rem" class="icongra" />
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p> Esta herramienta te ayudará a saber tu CUM al instante,
                  algo que es muy importante en la planificación de tu carrera,
                  elección de materias, consulta de becas u otras actividades.</p>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Toolsmenu;