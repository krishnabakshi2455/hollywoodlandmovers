// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-6">Dashboard Kit</h1>
            <nav>
                {['Overview', 'Trucks', 'Dispatchers', 'Drivers', 'Settings'].map((item) => (
                    <Link key={item} href={`/${item.toLowerCase()}`} className="block py-2 px-4 hover:bg-gray-800 rounded">
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
