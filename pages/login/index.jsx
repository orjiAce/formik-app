import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import SignupStyles from '../../styles/Login.module.scss'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Field,
    Input
} from "@chakra-ui/react"
import {FaPaperPlane} from "react-icons/fa";
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
            password: Yup.string().min(3, "Too short")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={SignupStyles.signupWrap}>
<div className={SignupStyles.title}>
    <h3>
        Chief, This is where we login!
    </h3>
</div>

        <form onSubmit={formik.handleSubmit} className={SignupStyles.signupForm}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}

            
            <label htmlFor="email">Email Address</label>

            <input id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}





                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...formik.getFieldProps('password')}  />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}


            <button type="submit"><FaPaperPlane /> Submit</button>
        </form>
        </div>
    );
};

export default SignupForm