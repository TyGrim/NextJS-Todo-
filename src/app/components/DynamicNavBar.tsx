// components/NavBar.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface NavItem {
    id: number;
    title: string;
    link: string;
}

interface NavBarProps {
    navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-900 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Kood Fight</h1>
                <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:space-x-4`}>
                    {navItems.map(item => (
                        <li key={item.id}><Link href={item.link}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
