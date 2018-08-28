import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/layout.js'

const Tv = (props) => {
    return (
        <Layout>
            <h1>Batman TV Shows</h1>
            <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <a>{show.name}</a>
                </Link>
                </li>
            ))}
            </ul>
        </Layout>
    )
} 

Tv.getInitialProps = async () => {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    const data = res.data;

    return {
        shows: data
    }
}
export default Tv


