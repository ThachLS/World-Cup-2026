import React from 'react';

interface HighlightButtonProps {
    highlightLink: string;
}

const HighlightButton: React.FC<HighlightButtonProps> = ({ highlightLink }) => {
    return (
        <a
            href={highlightLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Watch Highlights
        </a>
    );
};

export default HighlightButton;