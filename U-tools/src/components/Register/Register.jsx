import classes from './Register.module.scss';
import styles from './Register.module.scss';

import logo from '../../assets/logo.png';
import { useState } from 'react'

import { toast } from 'react-toastify';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useConfigContext } from '../../context/ConfigContext';
import axios from 'axios';

const RegisterForm = ({ onRegister = () => { } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");


  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
    "re-password": !rePassword || password !== rePassword
  }
  const navigate = useNavigate();


  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }
    onRegister(username, email, password);
    navigate('/auth/signin');

  }



    return(
        
        <section className={classes["regist-sect"]}>
        
        <div id={styles["regist"]}>
            <img src={ logo} className={classes["imglog"]} />
            <form onSubmit={onSubmitHandler}>
            <input 
            name= "username" 
            className={errors["username"] ? classes["error"] : ""}
            type="name" 
            placeholder="Nombre completo" id={styles["nombre"]} value={username}
            onChange={({ target }) => { setUsername(target.value) }} />
            <input 
            name= "email" 
            className={errors["email"] ? classes["error"] : ""}
            value={email}
            onChange={({ target }) => { setEmail(target.value) }} 
            type="email" 
            placeholder="Correo electrónico" id={styles["correo"]} />
            <input 
            name="password" 
            placeholder="Contraseña"
            className= { errors["password"] ? classes["error"] : ""}
            type="password"
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />
            
            <input username= "pass2" 
            className= { errors["re-password"] ? classes["error"] : ""}
            type="password" 
            name="re-password"
            placeholder="Confirmar Contraseña"
            value={rePassword}
            onChange={({ target }) => { setRePassword(target.value) }} />
           
                <button type="submit" disabled={hasErrors()}>
                    REGISTER
                </button>
          
                </form>

        </div>
    </section>

    );
} 
/*
import classes from './Register.module.scss';
import styles from './Register.module.scss';

import logo from '../../assets/logo.png';
import { useState } from 'react'

import { toast } from 'react-toastify';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useConfigContext } from '../../context/ConfigContext';
import axios from 'axios';

const RegisterForm = ({ onRegister = () => { } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
    "re-password": !rePassword || password !== rePassword
  }

  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }

    onRegister(username, email, password);
  }

  return (
    <section className={classes["container"]}>
      <h3> Join us... it's kind of free </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          I like to be known as... *
          <input
            className={errors["username"] ? classes["error"] : ""}
            type={"text"}
            placeholder="e.g. supernick33"
            autoComplete="username"
            name="username"
            value={username}
            onChange={({ target }) => { setUsername(target.value) }} />

          <div className={classes["hint"]}>
            Must have between 4 and 32 characters
          </div>
        </label>

        <label>
          My email is... *
          <input
            className={errors["email"] ? classes["error"] : ""}
            type={"email"}
            placeholder="e.g. example@example.com"
            autoComplete="email"
            name="email"
            value={email}
            onChange={({ target }) => { setEmail(target.value) }} />
          <div className={classes["hint"]}>
            Should be a valid email
          </div>
        </label>

        <label>
          Passphrase... *
          <input
            className={errors["password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="A strong password"
            name="password"
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />

          <div className={classes["hint"]}>
            Must have at least 1 uppercase, 1 lowercase, 1 number, and 8-32 characters
          </div>
        </label>

        <label>
          Repeat it, please... *
          <input
            className={errors["re-password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Repeat the strong password"
            name="re-password"
            value={rePassword}
            onChange={({ target }) => { setRePassword(target.value) }} />
        </label>

        <button type="submit" disabled={hasErrors()}>
          Sign in
        </button>
      </form>
    </section>
  )
}*/

export default RegisterForm;