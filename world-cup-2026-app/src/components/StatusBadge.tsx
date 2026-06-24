import React from 'react';

interface StatusBadgeProps {
  status: 'scheduled' | 'live' | 'finished';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeColor;

  switch (status) {
    case 'scheduled':
      badgeColor = 'bg-blue-500';
      break;
    case 'live':
      badgeColor = 'bg-green-500';
      break;
    case 'finished':
      badgeColor = 'bg-gray-500';
      break;
    default:
      badgeColor = 'bg-gray-500';
  }

  return (
    <span className={`inline-flex items-center px-2 py-1 text-white text-xs font-bold rounded ${badgeColor}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;