import React,{useEffect, useState} from "react";
import styles from './Cumcalculator.module.scss';
//import axios from "axios";
import Header from "../Header/Header";
import { useUserContext } from '../../context/UserContext';
import { useConfigContext } from '../../context/ConfigContext';


const Cumcalculator =()=>{


const { token } = useUserContext();
const { startLoading , stopLoading } = useConfigContext();
const [users, setUsers]=useState([])



const fetchData = ()=>{
    try{
    startLoading();
    fetch(`https://deploy-utools-api-production.up.railway.app/api/auth/find/${token}`, {headers: {authorization: `Bearer ${token}`}})
    .then(response =>{
        return response.json()
    })

    .then(data => {
        setUsers(data)
        stopLoading();
    })
    }catch(error){
        toast.error("error")
    }
}

useEffect(()=>{
    fetchData()
}, [])


    return(
        <div id={styles["big-container"]}>
        <Header />  
        <h1 id={styles["calcucum"]}>CALCULADORA DE CUM</h1>
        <div id={styles["sandbox"]}>
            <div id={styles["ciclosanteriores"]}>CICLOS ANTERIORES</div>
            <div id={styles["uv"]}>
            
            <h2>Unidades valorativas</h2>
         
            {users.map(user =>(
                <label key={user._id}>{user.uvs}</label>
            ))}
    
                </div>

             <div id={styles["um"]}>
            <h2>Unidades de Mérito</h2>
            {users.map(user =>(
                <label key={user._id}>{user.ums}</label>
            ))}
            </div>   
        </div>

        <div id={styles["resultado"]}>
            <h2>CUM HASTA EL CICLO PASADO</h2>
            {users.map(user =>(
                <label key={user._id}>{user.cum}</label>
            ))}
        </div>

    </div>
    );
}

export default Cumcalculator;