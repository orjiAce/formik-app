import React,{useEffect} from 'react'
import {useFormik, Formik} from 'formik';
import * as Yup from 'yup';
import SignupStyles from '../../styles/Login.module.scss'
import {TimelineLite, Power3, gsap} from 'gsap'
import LoginForm from "../../component/LoginForm";
import LoginSchema from "../../component/LoginSchema";
import {motion} from "framer-motion"
import {useToast} from '@chakra-ui/react'
import Head from "next/head";

const pageTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: "-10vh",
    }
}


const SignupForm = () => {
    let t1 = new TimelineLite();
    const toast = useToast();

//this is for animating some text on page transition
    useEffect(() =>{
        t1.from('.title', {
            opacity: 0,
            y: -10,
            ease: Power3.easeIn,
        }).from('.titleSmall', {
            opacity: 0,
            Y: 10,
            ease: Power3.easeInOut,
        })
    },[])


    const handleSubmit = (values) =>{
       // alert(JSON.stringify(values, null, 2));
        //to get your input values
        //you can destructure them like so

        const {firstName, password, lastName, email} = values
        //do whatever you want with them
console.log({
    firstName,
    password,
    lastName,
    email
})
        //this is simple toast message that pops up if all inputs fields are correctly filed
        toast({
            title: "Good boy!",
            description: "You're in!",
            duration: 6000,
            position: "top",
            status: "success",
            isClosable: true,
        })
    }
    return (
        <div className={SignupStyles.signupWrap}>
            <Head>
                <title>Next app | Formik</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={SignupStyles.title}>
                <span className='title'>
                    SIGNUP
                </span>
            </div>
            <div className={SignupStyles.title}>

                <small className='titleSmall'>
                    Chief, This is where the magic happens!
                </small>
            </div>
{/*
motion.div for our awesome page transition using framer-motion
*/}
            <motion.div exit="out" initial="out" animate="in" variants={pageTransition}>
                {/*
                FORMIK
                */}
            <Formik initialValues={{firstName: '',
                lastName: '',
                email: '',
                password: '' }} validationSchema={LoginSchema} component={LoginForm} onSubmit={handleSubmit}/>
        </motion.div>
        </div>
    );
};

export default SignupForm