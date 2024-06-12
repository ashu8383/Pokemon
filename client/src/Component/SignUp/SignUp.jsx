import React, { useState } from 'react';
import './Signup.css';
import Input from '../Form/Input/Input';
import { SignUpValidator } from '../../Validation/ValidationError';
import { useNavigate } from 'react-router-dom';
import { API } from '../../utililty/API';
import Header from '../Header/Header';
import { signinputFieldSignup } from '../../constants/Inputfields';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    confirmPassword: '',
    fullname: '',
    age: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = SignUpValidator(formData);
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        const { confirmPassword, ...sendData } = formData;
        await API.post('http://localhost:5000/v3/user/register', sendData);

        navigate('/');
      } catch (error) {
        console.error('Registration Error:', error);
        alert('User Already Registered');
        // setFormData({
        //   fullname: '',
        //   age: '',
        //   email: '',
        //   password: '',
        //   confirmPassword: '',
        // });
      }
    }
  };

  return (
    <div className='signup-outter-header'>
      <Header />
      <div className='signup-form-container'>
        <div className='signup-form-inner-container'>
          <p className='heading'>Signup to Pokedex</p>
          <form
            className='signup-form'
            onSubmit={handleSubmit}
          >
            <div className='user-details-fields'>
              {signinputFieldSignup.map((Field) => {
                return (
                  <Input
                    key={Field.name}
                    type={Field.type}
                    name={Field.name}
                    placeholder={Field.placeholder}
                    value={FormData[Field.name]}
                    errors={errors}
                    onChange={handleChange}
                  />
                );
              })}
            </div>
            <button
              type='submit'
              className='signup-button'
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
