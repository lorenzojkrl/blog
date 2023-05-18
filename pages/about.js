import Link from 'next/link';
import { Button } from '../components/Button/button'; // function keyword
import Layout from '../components/Layout/layout'; // ES6 function


export default function About() {
  return <Layout>
    <Link href="/">Home</Link>
    <h2>About</h2>
    <Button>Custom Button</Button>
  </Layout>
}