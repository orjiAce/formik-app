import {Form} from "formik";
import loginStyle from '../styles/Login.module.scss'
import MyInput from "./Input";
import {FaEnvelope, FaKey, FaPaperPlane, FaUser} from "react-icons/fa";
import SignupStyles from '../styles/Login.module.scss'
import React from "react";

export default (({handleChange, values, errors, isValid}) => {
    return (<Form className={SignupStyles.signupForm}>


        <MyInput icon={<FaUser/>} label='First name' input={<input type='text'
                                                                   onChange={handleChange}
                                                                   value={values.firstName}
                                                                   name='firstName'
                                                                   placeholder='Your First Name'/>}/>
        <div className={SignupStyles.error}>
            {errors.firstName}
        </div>


        <MyInput icon={<FaUser/>} label='First name' input={<input type='text'
                                                                   onChange={handleChange}
                                                                   value={values.lastName}
                                                                   name='lastName'
                                                                   placeholder='Your Last Name'/>}/>
        <div className={SignupStyles.error}>
            {errors.lastName}
        </div>



        <MyInput label='Your email address' icon={<FaEnvelope/>} input={<input type='email'
                                                                               onChange={handleChange}
                                                                               value={values.email}
                                                                               name='email'
                                                                               placeholder='Email'

        />}/>
        <div className={SignupStyles.error}>{errors.email}</div>


        <MyInput icon={<FaKey/>} label='Password' input={<input type='password'
                                                                onChange={handleChange}
                                                                value={values.password}
                                                                name='password'
                                                                placeholder='Your Password'/>}/>
        <div className={SignupStyles.error}>
            {errors.password}
        </div>



        <button type='submit' disabled={!isValid}>
            Signup
        </button>

    </Form>)
})