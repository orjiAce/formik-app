import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import {TimelineLite, Power3} from 'gsap'
import React,{useEffect} from 'react'
import {motion} from "framer-motion"


//this is used together with framer motion for page transition animation
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


export default function Home() {
    let t1 = new TimelineLite();

    useEffect(() =>{
        t1.from('.welcomeTxt', {
            opacity: 0,
            y: -10,
            ease: Power3.easeInOut,
        }).from('.subText', {
            opacity: 0,
            y: -10,
            ease: Power3.easeInOut,
        })
    },[])
    return (
        <div className={styles.container}>
            <Head>
                <title>Next app | Formik</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <motion.div exit="out" initial="out" animate="in" variants={pageTransition} className={styles.main}>
                <h2 className='welcomeTxt'>Hey buddy you're welcome</h2>
                <div className='subText'>

                    <small>This is just a quick, easy and simple formik and NextJs collaboration</small>
                </div>
                <div><small>As you copy and paste may you be blessed!</small></div>
                <Link href='/signup'>
                    <button className={styles.customBtn}>
                        Start here &rarr;
                    </button>

                </Link>

            </motion.div>


        </div>
    )
}
