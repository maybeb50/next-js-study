import Layout from '../components/Layout';
import Link from 'next/link';

const ProfileLink = (props) => (
    <div>
        <Link href={`/profile?name=${props.name}`}>
            <a>Go to {props.name}'s profile</a>
        </Link>
    </div>
);

const Index = () => (
    <Layout>
        <h1>Friends List</h1>
        <ProfileLink name="jake" />
        <ProfileLink name="peter" />
        <ProfileLink name="yumi" />
    </Layout>
);

export default Index;