import { useEffect, useState } from 'react';
import MatchCard from '../../components/MatchCard';
import SearchBar from '../../components/SearchBar';
import StatusBadge from '../../components/StatusBadge';
import { Match } from '../../types';

const MatchesPage = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch('/data/matches.json');
            const data = await response.json();
            setMatches(data);
            setFilteredMatches(data);
        };

        fetchMatches();
    }, []);

    useEffect(() => {
        const filtered = matches.filter(match => {
            const matchesSearchTerm = match.teamA.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                       match.teamB.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || match.status === statusFilter;
            return matchesSearchTerm && matchesStatus;
        });
        setFilteredMatches(filtered);
    }, [searchTerm, statusFilter, matches]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Matches</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="mb-4">
                <label htmlFor="status" className="mr-2">Filter by Status:</label>
                <select
                    id="status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border p-2"
                >
                    <option value="all">All</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="live">Live</option>
                    <option value="finished">Finished</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMatches.map(match => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
        </div>
    );
};

export default MatchesPage;