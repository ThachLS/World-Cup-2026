import React from 'react';
import GroupTable from '../../components/GroupTable';
import { Group } from '../../types';

const StandingsPage: React.FC = () => {
  const [groups, setGroups] = React.useState<Group[]>([]);

  React.useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetch('/data/groups.json');
      const data = await response.json();
      setGroups(data);
    };

    fetchGroups();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Standings</h1>
      {groups.map((group) => (
        <GroupTable key={group.id} group={group} />
      ))}
    </div>
  );
};

export default StandingsPage;