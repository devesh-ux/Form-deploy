import React from 'react';
import UseForm from './UseForm';
import validate from './validateInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePasswordToggle from './usePasswordToggle';
import './Signup.css';


const FormSignUp = ({ submitForm }) => {

    

    const [PassInputType,ToggleIcon] = usePasswordToggle();

    const {handleChange,values,handleSubmit,errors} = UseForm(submitForm,validate);

    

   
    return (
       <div className="form-content-right">
           <form className="form" onSubmit={handleSubmit}>
               <h1>Create Account</h1>
               <div className="form-inputs">
                   <label htmlFor="email" className="form-label">
                       <h4>Your Email</h4>
                   </label>
                   <input
                       id = "email"  
                       type="email"
                       name = "email"
                       className="form-input"
                       placeholder="enter your email"
                       value = {values.email}
                       onChange={handleChange}
                       />
                    {errors.email && <p>{errors.email}</p>}   
               </div>
               <div className="form-inputs">
                   <label htmlFor="password" className="form-label">
                       <h4>Password</h4>
                   </label>
                   <input
                       id = "password"
                       type = {PassInputType}
                    //    type="password"
                       name = "password"
                       className="form-input"
                       placeholder="enter your password"
                       value = {values.password}
                       onChange={handleChange}
                       />
                       <span className="password-toogle-icon">
                           {ToggleIcon}
                           </span>  
                    {errors.password && <p>{errors.password}</p>}    
               </div>
               {/* <div className="form-input-con">
                   <input type = "checkbox"/><span>I agree to the <a href="#">Terms & Condition </a> and <a href="#">Privacy Policy </a> </span>
                   {errors.Tnc && <p>{errors.Tnc}</p> }
               </div> */}
               <button className="form-input-btn" type="submit" >
                   Create account
               </button>
               <span className="form-input-login">
                   Already have an account? <a href="#">Log in</a>
               </span>
           </form>
       </div>
    )
}

export default FormSignUp
