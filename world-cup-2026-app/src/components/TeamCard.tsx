import React from 'react';

interface TeamCardProps {
    teamName: string;
    group: string;
    logoUrl: string;
    stats: {
        matchesPlayed: number;
        wins: number;
        draws: number;
        losses: number;
        goalsFor: number;
        goalsAgainst: number;
        points: number;
    };
}

const TeamCard: React.FC<TeamCardProps> = ({ teamName, group, logoUrl, stats }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img src={logoUrl} alt={`${teamName} logo`} className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-bold">{teamName}</h2>
            <p className="text-gray-600">Group: {group}</p>
            <div className="mt-2">
                <p>Matches Played: {stats.matchesPlayed}</p>
                <p>Wins: {stats.wins}</p>
                <p>Draws: {stats.draws}</p>
                <p>Losses: {stats.losses}</p>
                <p>Goals For: {stats.goalsFor}</p>
                <p>Goals Against: {stats.goalsAgainst}</p>
                <p>Points: {stats.points}</p>
            </div>
        </div>
    );
};

export default TeamCard;