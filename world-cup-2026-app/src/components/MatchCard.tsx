import React from 'react';

interface MatchCardProps {
    homeTeam: string;
    awayTeam: string;
    homeScore: number | null;
    awayScore: number | null;
    status: 'scheduled' | 'live' | 'finished';
    kickoffTime: string;
    venue: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    status,
    kickoffTime,
    venue,
}) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">{homeTeam}</div>
                <div className="text-lg font-bold">{awayTeam}</div>
            </div>
            <div className="flex justify-between items-center mt-2">
                <div className="text-xl">
                    {homeScore !== null && awayScore !== null
                        ? `${homeScore} - ${awayScore}`
                        : 'N/A'}
                </div>
                <div className={`status-badge ${status}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
                <div>{venue}</div>
                <div>{new Date(kickoffTime).toLocaleString()}</div>
            </div>
        </div>
    );
};

export default MatchCard;