import Layout from '../components/Layout';
import Link from 'next/link';

const ProfileLink = (props) => (
    <div>
        <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
            <a>Go to {props.profile}'s profile</a>
        </Link>
    </div>
);

const Index = (props) => (
    <Layout>
        <h1>Friends List</h1>
        <ProfileLink profile="Jake" />
        <ProfileLink profile="Peter" />
        <ProfileLink profile="Yumi" />
    </Layout>
);

// Index.getInitialProps = async function() {
//     const res = await fetch('http://keystonemc.com/TEST/name.json');
//     const data = await res.json();

//     console.log(data.name);
    
//     return {
//         profiles: data.map(profile => profile.name)
//     }
// }

export default Index;