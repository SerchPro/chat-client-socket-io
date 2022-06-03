import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {

  const [ form, setForm ] = useState({
    email: "nuevo@gmail.com",
    password: "123456",
    name: "ser"
  });

  const onchange = ({target}) => {
    const { name, value} = target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const isOk = () =>{
    return !( form.email.length > 0 && form.password.length > 0  && form.name.length > 0) ? true : false;
  }

  return (
      <form className="login100-form validate-form flex-sb flex-w">
        <span className="login100-form-title mb-3">
          Chat - Registro
        </span>

        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="text" 
            name="name" 
            placeholder="Name" 
            value = { form.name }
            onChange = { onchange }
            />
          <span className="focus-input100"></span>
        </div>

        
        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="email" 
            name="email" 
            placeholder="Email"
            value = { form.email }
            onChange = { onchange }
            />
          <span className="focus-input100"></span>
        </div>
        
        
        <div className="wrap-input100 validate-input mb-3">
          <input 
            className="input100" 
            type="password" 
            name="password" 
            placeholder="Password"
            value = { form.password }
            onChange = { onchange }
            />
          <span className="focus-input100"></span>
        </div>
        
        <div className="row mb-3">
          <div className="col text-right">
            <Link to="/auth/login" className="txt1">
            Login
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button 
            className="login100-form-btn"
            type='submit'
            disabled = {isOk()}
            >
            Create account
          </button>
        </div>

      </form>
  )
}
