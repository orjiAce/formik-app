import React, {useEffect} from 'react';
import styles from '../../styles/Home.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";


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


const NotFound = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            // router.go(1)
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className={styles.notfound}>

            <div>
                hey! You are not suppose be here
            </div>
            <div className={styles.message}>
                <h5>You are lost</h5>
            </div>


<Image src='/octopus.png' width={600} height={400}/>
            <div>
                <small className={styles.teleMsg}>Teleporting in 3sec...</small>
            </div>
        </div>
    );
};

export default NotFound;
