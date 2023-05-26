import Link from 'next/link';
import Layout from '../components/Layout/layout';


export const getServerSideProps = async () => {
  const res = await fetch('https://wttr.in/London?format=j1');
  const data = await res.json();
  console.log(data);
  return { props: { data } };
};

export default function Weather({ data }) {
  const weather = data.current_condition[0]

  return <Layout>
    <Link href="/">Home</Link>
    <h2>Weather</h2>
    <div>
      Current weather in London
      <ul>
        <li>Temperature: {weather.temp_C}C / {weather.temp_F}F</li>
        <li>Conditions: {weather.weatherDesc[0].value}</li>
      </ul>
    </div>
  </Layout>
}