
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  size?: 'default' | 'large';
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '', 
  size = 'default',
  placeholder = 'Search for articles, tutorials, FAQs...'
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center ${className}`}>
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`kb-search-input ${size === 'large' ? 'py-4 text-lg' : 'py-2'}`}
        />
      </div>
      <button
        type="submit"
        className={`kb-search-button ${size === 'large' ? 'py-4 px-6' : 'py-2 px-4'}`}
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;
