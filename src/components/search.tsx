import React from 'react';

interface SearchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-4">
      <input
        className="px-4 py-2 bg-slate-100 rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Digite sua busca..."
        value={query}
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
