import React from 'react';
import BracketView from '../../components/BracketView';

const BracketsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Knockout Rounds</h1>
            <BracketView />
        </div>
    );
};

export default BracketsPage;