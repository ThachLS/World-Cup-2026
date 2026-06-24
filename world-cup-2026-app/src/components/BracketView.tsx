import React from 'react';

const BracketView: React.FC<{ matches: any[] }> = ({ matches }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Knockout Rounds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {matches.map((match, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md">
                        <h3 className="text-lg font-semibold">{match.teamA} vs {match.teamB}</h3>
                        <p className="text-sm">Venue: {match.venue}</p>
                        <p className="text-sm">Kickoff: {match.kickoffTime}</p>
                        <p className="text-lg font-bold">{match.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketView;