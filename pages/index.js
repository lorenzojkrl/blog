import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Layout from '../components/Layout/layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

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

        <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }     
      `}</style>
      </div>
    </Layout>
  )
}
