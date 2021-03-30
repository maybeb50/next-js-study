import Link from 'next/Link';

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/profile">
            <a style={linkStyle}>Profile</a>
        </Link>
    </div>
);

const linkStyle = {
    marginRight: 15
}

export default Header;