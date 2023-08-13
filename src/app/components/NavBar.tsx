// components/Layout.tsx
import DynamicNavBar from './DynamicNavBar';

function NavBar() {
    const navItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'About', link: '/about' },
        { id: 3, title: 'Pricing', link: '/pricing' },
        { id: 4, title: 'FAQ', link: '/faq' },
        { id: 5, title: 'Contact', link: '/contact' },
    ];

    return (
        <header>
            <DynamicNavBar navItems={navItems} />
        </header>
    );
}

export default NavBar;
