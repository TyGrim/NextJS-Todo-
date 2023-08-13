//dynamic NavBar
import Link from "next/link"

interface NavItem {
    id: number
    title: string
    link: string
}

interface DynamicNavBarProps {
    navItems: NavItem[];
}

const DynamicNavBar: React.FC<DynamicNavBarProps> = ({ navItems }) => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <h1 className=" uppercase ">Kood Fight</h1>
            <ul className="flex gap-2">
                {navItems.map(item => (
                    <li key={item.id} className="flex bg-pink-400 border border-white px-4 py-2 rounded">
                        <Link className="cursor-pointer p-1" href={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default DynamicNavBar;