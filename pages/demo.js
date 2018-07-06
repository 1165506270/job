import Layout from '../components/layout'
import PostLink from '../components/PostLink'

export default () => {
    return (
        <Layout>
            <ul>
                <PostLink id="HelloNext.js" title="Hello Next.js"/>
                <PostLink id="LearnNext.js is awesome" title="Learn Next.js is awesome"/>
                <PostLink id="DeployappswithZeit" title="Deploy apps with Zeit"/>
            </ul>
        </Layout>
    )
}