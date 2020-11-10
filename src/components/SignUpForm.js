import React from 'react'
import { useForm } from "react-hook-form";
import '../styles/SignUpForm.css'
import {Button} from './Button'
export default function SignUp() {
    const { handleSubmit, register, errors } = useForm();
    
    // const onRegisterSubmit = (data) => {
    //   axios
    //     .post(baseUrl + '/auth/register', {
    //       email: data.email,
    //       password: data.password,
    //     })
    //     .then(() => {
    //       axios
    //         .post(baseUrl + '/auth/login', {
    //           email: data.email,
    //           password: data.password,
    //         })
    //         .then((res) => {
    //           reset();
             
    //           history.push('/profile');
    //         });
    //     })
    //     .catch((err) => {
    //       // setRegisterError("Registration Error: " + err.response.data.error.message);
    //     });
    // };
    return (
      <div className='Form-wrapper'>
      <form handleSubmit={handleSubmit(handleSubmit)}>
        <label htmlFor='email' className='label'>
          Email
        </label>
        <input
          className='email'
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
        <label htmlFor='password' className='label'>
          Password
        </label>
        <input
           className='password'
           type='password'
           name='password'
           ref={register({ required: true })}
        />
        {errors.username && errors.username.message}
  
        <Button type="submit">GO!</Button>
      </form>
      </div>
    );
  };
  