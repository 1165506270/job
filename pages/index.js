import Link from 'next/link'
import Layout from '../components/layout'
export default () => {
    return (
        <Layout>
            <p>hello word</p>
            <Link href="/demo"><a style={{ fontSize: 20 }}>demo</a></Link>
            <style jsx>{`
                h1, a {
                    font-family: "Arial";
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: red;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    )
}