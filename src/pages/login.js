import './style/login.css';
import React from 'react';
import { useHistory } from "react-router-dom";

const Login = ()=>{
  let history = useHistory();

  function handleLogin() {
    // Effettua l'autenticazione dell'utente
    // ...

    // Reindirizza l'utente alla pagina Home
    history.push("/home");
  }
  return (
   <div className="logincentrea">
    <div className="title-page"><h2>Login</h2></div>
    <div className="logincentre-inner padding-horizontal--48">
   <form id="stripe-login">
     <div className="field padding-bottom--24">
       <label htmlFor="email" className='username-title'>Username</label>
       <input type="email" name="email" className='inp'/>
     </div>
     <div className="field padding-bottom--24">
        <label htmlFor="password" className='psw-title'>Password</label>
        <input type="password" name="password" className="inp"/>
     </div>
     <div className="reset-pass">
        <a href="#" className='psw-dimenticata'>Password dimenticata?</a>
      </div>
        <button onClick={handleLogin} className='bottone' >Accedi</button>
     <div className="field">
     </div>
   </form>
   <div className="and-page">
    <hgroup className='and-main'>Edulink</hgroup>
    <hgroup className='and-sbutitle'>Un nuovo modo di fare scuola</hgroup>
   </div>
 </div>
 </div>
  );
}
export default Login;