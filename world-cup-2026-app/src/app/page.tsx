import React from 'react';
import MatchCard from '../components/MatchCard';
import Navigation from '../components/Navigation';
import { matchesData } from '../data/matches.json';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Navigation />
            <h1 className="text-2xl font-bold mb-4">World Cup 2026 Dashboard</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Featured Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchesData.slice(0, 6).map(match => (
                        <MatchCard key={match.id} match={match} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-xl font-semibold">Live/Latest Scores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchesData.filter(match => match.status === 'live' || match.status === 'finished').map(match => (
                        <MatchCard key={match.id} match={match} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;