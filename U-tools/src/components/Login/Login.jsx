import classes from './Login.module.scss';
import styles from './Login.module.scss';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const LoginForm = ({ onLogin = () => { } }) => {

    const navigate = useNavigate();

    //const [username, setUsername] = useState('');
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
  
    const errors = {
      "identifier": !identifier,
      "password": !password,
    }
  
    const hasErrors = () => Object.values(errors).some(error => error);
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
  
      if (hasErrors()) {
        toast.warn("Wrong fields");
        return;
      }
  
      onLogin(identifier, password);
      navigate('/toolsmenu');


    }
  
    return(
        <form onSubmit={onSubmitHandler}>
        <section id={styles["regist-sect"]}>
        <div id={styles["regist"]}>
            <img src={ logo } className={classes["imglog"]}/>
            <input type="email" placeholder="Correo electrónico" id={styles["correo"]} className={classes["inputs"]} value={identifier}
            onChange={({ target }) => { setIdentifier(target.value) }}/>
            <input type="password" placeholder="Contraseña" id={styles["pass"]} className={classes["inputs"]} value={password}
            onChange={({ target }) => { setPassword(target.value) }}/>

            <button type="submit" disabled={hasErrors()}>
                LOGIN
            </button>

        </div>
    </section>
    </form>

/*     <section className={classes["container"]}>
        <h3> Tell us who you are... </h3>

        <form onSubmit={onSubmitHandler}>
            <label>
            I am... *
            <input
                className={errors["identifier"] ? classes["error"] : ""}
                type={"text"}
                name="identifier"
                autoComplete='username'
                value={identifier}
                onChange={({ target }) => { setIdentifier(target.value) }} />
            </label>

            <label>
            Passphrase... *
            <input
                className={errors["password"] ? classes["error"] : ""}
                type={"password"}
                name="password"
                autoComplete='current-password'
                value={password}
                onChange={({ target }) => { setPassword(target.value) }} />
            </label>

            <button type="submit" disabled={hasErrors()}>
            Sign in
            </button>
        </form>
        </section> */
    );
}

export default LoginForm;