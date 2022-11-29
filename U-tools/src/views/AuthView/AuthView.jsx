import {Routes, Route, useNavigate} from 'react-router-dom';
import classes from './AuthView.module.scss';

import LoginForm from "../../components/Login/Login";
import RegisterForm from "../../components/Register/Register";
import {useUserContext} from "../../context/UserContext";

import {useEffect} from 'react';

const AuthView = () => {
  const navigate = useNavigate();
  const {login, register, user} = useUserContext();

  const onLoginHandler = async (identifier, password) => {
    await login(identifier, password);
  }

  const onRegisterHandler = async (username, email, password) => {
    await register(username, email, password);
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={classes["container"]}>
        <div className={classes["card"]}>
            <Routes>
            <Route path='signin' element={<LoginForm onLogin={onLoginHandler} />} />
            <Route path='signup' element={<RegisterForm onRegister={onRegisterHandler} />} />
            <Route path='*' element={<navigate to="/not-found" />} />
            </Routes>
        </div>
    </div>
    )
}
export default AuthView;