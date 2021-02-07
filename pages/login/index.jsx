import React from 'react';
import {useFormik, Formik} from 'formik';
import * as Yup from 'yup';
import SignupStyles from '../../styles/Login.module.scss'

import LoginForm from "../../component/LoginForm";
import LoginSchema from "../../component/LoginSchema";
import {FaEnvelope, FaKey, FaPaperPlane, FaUser} from "react-icons/fa";
import MyInput from "../../component/Input";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(3, "Passowrd Too short")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));



        },
    });

    const handleSubmit = (values) =>{
        alert(JSON.stringify(values, null, 2));

    }
    return (
        <div className={SignupStyles.signupWrap}>
            <div className={SignupStyles.title}>
                <span>
                    SIGNUP
                </span>
            </div>
            <div className={SignupStyles.title}>

                <small>
                    Chief, This is where the magic happens!
                </small>
            </div>
            
            <Formik initialValues={{firstName: '',
                lastName: '',
                email: '',
                password: '' }} validationSchema={LoginSchema} component={LoginForm} onSubmit={handleSubmit}/>

        </div>
    );
};

export default SignupForm