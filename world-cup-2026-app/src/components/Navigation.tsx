import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">World Cup 2026</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/matches" className="text-gray-300 hover:text-white">Matches</Link>
                    </li>
                    <li>
                        <Link href="/teams" className="text-gray-300 hover:text-white">Teams</Link>
                    </li>
                    <li>
                        <Link href="/standings" className="text-gray-300 hover:text-white">Standings</Link>
                    </li>
                    <li>
                        <Link href="/brackets" className="text-gray-300 hover:text-white">Brackets</Link>
                    </li>
                    <li>
                        <Link href="/qualification" className="text-gray-300 hover:text-white">Qualification</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;