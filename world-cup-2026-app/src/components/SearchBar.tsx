import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search matches or teams..."
                className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white rounded-lg p-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;