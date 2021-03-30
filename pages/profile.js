import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Profile() {
    const router = useRouter();
    return(
        <Layout>
            <p>Hello, My name {router.query.name}. I use next.js</p>
        </Layout>
    );
}