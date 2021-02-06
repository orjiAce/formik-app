import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h2>Hey buddy you're welcome</h2>
<small>This is just a quick, easy and simple formik and NextJs collaboration</small>
          <small>As you copy and paste may you be blessed!</small>
          <Link href='/login'>
              <button className={styles.customBtn}>
                  Login here &rarr;
              </button>

          </Link>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Anyone that has power
        </a>
      </footer>
    </div>
  )
}
