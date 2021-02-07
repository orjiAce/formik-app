import React,{useEffect} from 'react'
import {useFormik, Formik} from 'formik';
import * as Yup from 'yup';
import SignupStyles from '../../styles/Login.module.scss'
import {TimelineLite, Power3, gsap} from 'gsap'
import LoginForm from "../../component/LoginForm";
import LoginSchema from "../../component/LoginSchema";
import {motion} from "framer-motion"
import {useToast} from '@chakra-ui/react'

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
           // alert(JSON.stringify(values, null, 2));



        },
    });

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

            <motion.div exit="out" initial="out" animate="in" variants={pageTransition}>
            <Formik initialValues={{firstName: '',
                lastName: '',
                email: '',
                password: '' }} validationSchema={LoginSchema} component={LoginForm} onSubmit={handleSubmit}/>
        </motion.div>
        </div>
    );
};

export default SignupForm