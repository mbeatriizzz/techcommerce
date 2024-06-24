import React from 'react';
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({ query, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-4">
      <div className="relative">
        <input
          className="px-4 py-2 pl-10 bg-slate-100 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Digite sua busca..."
          value={query}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 left-3 flex items-center pl-2 pointer-events-none">
          <IoSearch className="text-blueMarine-700" />
        </div>
      </div>
    </form>
  );
};

export default Search;
