import React, {useState} from 'react';
import styles from '../../styles/Home.module.scss'
import Image from "next/image";
import {useRouter} from "next/router";
import {FaPaperPlane} from "react-icons/fa";



const NotFound = () => {

    const router = useRouter()
let [count, setCount] = useState(0)

    const teleport = () =>{
        setTimeout(() => {
            // router.go(-1)
            // router.go(1)
            router.push('/')
        }, 5000)

        setInterval(() =>{
            setCount(count++)
        },1000)
    }
    return (
        <div className={styles.notfound}>

            <div>
                hey! You are not supposed be here
            </div>
            <div className={styles.message}>
                <h5>You are lost</h5>
            </div>


<Image src='/octopus.png' width={600} height={400}/>
            <div>
                <button className={styles.teleBtn} onClick={teleport}>
                    <FaPaperPlane/> { count < 1 ? 'Teleport in 5sec' : 'Teleporting in ' + count}
                </button>

            </div>
        </div>
    );
};

export default NotFound;
