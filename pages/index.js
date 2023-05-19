import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.navContainer}>
          <Link className={styles.customLink} href="/">Home</Link>
          <Link className={styles.customLink} href="/about">About</Link>
          <Link className={styles.customLink} href="/contacts">Contacts</Link>
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <Image
          src="/images/guillermo-alvarez-kF5nFbHBG5E-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by Guillermo Álvarez on Unsplash"
        />

        <Image
          src="/images/nathan-anderson-9rNyml9OKfI-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by Nathan Anderson on Unsplash"
        />

        <Image
          src="/images/joshua-sortino-f3uWi9G-lus-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by Joshua Sortino on Unsplash"
        />

        <Image
          src="/images/chuttersnap--gS54SWrHMg-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by CHUTTERSNAP on Unsplash"
        />

        <Image
          src="/images/venti-views-bS5OwMjMc1I-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by Venti Views on Unsplash"
        />

        <Image
          src="/images/eugene-z0j9Qf9jZ58-unsplash.jpg"
          height={400}
          width={600}
          alt="Photo by Eugene on Unsplash"
        />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  )
}
