import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h2>Hey buddy you're welcome</h2>
                <div>

                    <small>This is just a quick, easy and simple formik and NextJs collaboration</small>
                </div>
                <div><small>As you copy and paste may you be blessed!</small></div>
                <Link href='/login'>
                    <button className={styles.customBtn}>
                        Start here &rarr;
                    </button>

                </Link>

            </main>


        </div>
    )
}
