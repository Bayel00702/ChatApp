import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {authUser} from "../../redux/reducers/auth";
import axios from "../../utils/axios";

const Form = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        mode: "onBlur"
    });


    const handleRegister = (data) => {
        axios.post('/register', {...data})
            .then(res =>
            {
                dispatch(authUser(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };

    const loginUser = (data) => {
        axios.post('/login', data)
            .then(res =>
            {
                dispatch(authUser(res.data));
                navigate('/');
                console.log(data)
            })
            .catch((err) =>  console.log(err));
    };

    const submitForm = (data) => {
        let {...user} = data;

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            handleRegister(user)
        }
    };

    return (
        <section className='register'>
            <div className="container">
                <form onSubmit={handleSubmit(submitForm)}  className="register__form">
                    <h2 className="register__title">Sign Up</h2>
                    <label htmlFor="" className="register__label">
                        <h3 className="register__subtitle">Name:</h3>
                        <input {...register('name')} placeholder='Enter your name' className='register__input' type="text"/>
                    </label>
                    <label htmlFor="" className="register__label">
                        <h3 className="register__subtitle">Email:</h3>
                        <input {...register('email')} placeholder='Enter your email' className='register__input' type="email"/>
                    </label>
                    <label htmlFor="" className="register__label">
                        <h3 className="register__subtitle">Password:</h3>
                        <input {...register('password')} placeholder='Create password' className='register__input' type="password"/>
                    </label>

                    <button className="register__btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Form;