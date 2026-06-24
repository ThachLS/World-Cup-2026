import React from 'react';
import { Group } from '../types';

interface GroupTableProps {
  groups: Group[];
}

const GroupTable: React.FC<GroupTableProps> = ({ groups }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Played</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wins</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Draws</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Losses</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {groups.map((group) => (
            <React.Fragment key={group.id}>
              {group.teams.map((team) => (
                <tr key={team.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.played}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.wins}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.draws}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.losses}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.points}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;