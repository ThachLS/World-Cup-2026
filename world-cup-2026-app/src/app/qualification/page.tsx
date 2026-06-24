import React from 'react';
import { Team } from '../../types';
import teamsData from '../../data/teams.json';

const QualificationPage: React.FC = () => {
    const topTeams = teamsData.filter((team: Team) => team.qualificationStatus === 'qualified');
    const thirdPlacedTeams = teamsData.filter((team: Team) => team.qualificationStatus === 'third-placed');

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Qualification Projections</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold">Top 2 Teams from Each Group</h2>
                <ul className="list-disc pl-5">
                    {topTeams.map((team: Team) => (
                        <li key={team.id}>{team.name} - Group {team.group}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-xl font-semibold">Best Third-Placed Teams</h2>
                <ul className="list-disc pl-5">
                    {thirdPlacedTeams.map((team: Team) => (
                        <li key={team.id}>{team.name} - Group {team.group}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default QualificationPage;