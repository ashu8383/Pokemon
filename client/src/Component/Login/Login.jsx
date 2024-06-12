import React, { useState } from 'react';
import './Login.css';
import Input from '../Form/Input/Input';
import { LoginValidation } from '../../Validation/ValidationError';
import { NavLink, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../../constants/LOCAL_STORAGE_KEYS.JS';
import { API } from '../../utililty/API';
import Header from '../Header/Header';
import { inputFields } from '../../constants/Inputfields';

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { setItem } = useLocalStorage();
  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginvalidationError = LoginValidation(loginFormData);

    setLoginErrors(loginvalidationError);

    if (Object.keys(loginvalidationError).length === 0) {
      try {
        const response = await API.post(
          'http://localhost:5000/v3/user/login',
          loginFormData
        );
        setItem(LOCAL_STORAGE_KEYS.AUTH_KEY, response.data);
        navigate('/pokemons');
      } catch (error) {
        alert('Email Or Passwoed Not Match');
        setLoginFormData({ email: '', password: '' });
        console.error('Data not Found', error);
      }
    }
  };

  return (
    <>
      <div className='login-outter-container'>
        <Header />

        <div className='login-form-container'>
          <form
            className='login-form-inner-container'
            onSubmit={handleSubmit}
          >
            <p className='login-heading'>Login to Pokedex</p>
            <div className='login-user-details-fields'>
              {inputFields.map((field) => {
                return (
                  <Input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={loginFormData[field.name]}
                    errors={loginErrors}
                    onChange={handleChange}
                  />
                );
              })}
              <button
                type='submit'
                className='login-button'
              >
                Login
              </button>
            </div>
          </form>
          <div className='new-user-container'>
            Don't have an account?{'    '}
            <NavLink
              className='new-user-notification'
              to='/signup'
            >
              Create new
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
