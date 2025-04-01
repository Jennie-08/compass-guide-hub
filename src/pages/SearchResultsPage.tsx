
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, FileText, Video, X } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { searchArticles, videos } from '@/data/knowledgeBaseData';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  useEffect(() => {
    if (query) {
      // Search for articles
      const articleResults = searchArticles(query);
      
      // Search for videos
      const lowercaseQuery = query.toLowerCase();
      const videoResults = videos.filter(
        video => 
          video.title.toLowerCase().includes(lowercaseQuery) || 
          video.description.toLowerCase().includes(lowercaseQuery) ||
          video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
      
      // Combine and sort results
      const combinedResults = [
        ...articleResults.map(article => ({ type: 'article', data: article })),
        ...videoResults.map(video => ({ type: 'video', data: video }))
      ];
      
      setSearchResults(combinedResults);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  return (
    <div className="min-h-screen">
      <div className="bg-muted py-12">
        <div className="kb-container">
          <Link 
            to="/" 
            className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-6">
            {query ? `Search results for "${query}"` : 'Search the Knowledge Base'}
          </h1>
          
          <div className="max-w-2xl">
            <SearchBar value={query} />
          </div>
          
          {query && (
            <div className="mt-4">
              <span className="text-gray-400">
                Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="kb-container py-12">
        {query ? (
          searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div key={index} className="kb-card">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-full bg-ncompass-green/10">
                      {result.type === 'article' ? (
                        <FileText className="h-5 w-5 text-ncompass-green" />
                      ) : (
                        <Video className="h-5 w-5 text-ncompass-green" />
                      )}
                    </div>
                    <div>
                      <div className="mb-1">
                        <span className="text-xs text-ncompass-green font-medium bg-ncompass-green/10 px-2 py-0.5 rounded">
                          {result.type === 'article' ? 'Article' : 'Video'}
                        </span>
                        {result.type === 'article' && (
                          <span className="text-xs text-gray-400 ml-2">
                            in {result.data.category.replace(/-/g, ' ')}
                          </span>
                        )}
                      </div>
                      
                      <Link 
                        to={result.type === 'article' 
                          ? `/article/${result.data.slug}` 
                          : `/video/${result.data.id}`
                        }
                        className="block"
                      >
                        <h3 className="text-lg font-semibold text-white hover:text-ncompass-green transition-colors">
                          {result.data.title}
                        </h3>
                      </Link>
                      
                      <p className="mt-2 text-gray-400">{result.data.description}</p>
                      
                      {result.type === 'article' && result.data.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {result.data.tags.map((tag: string) => (
                            <span 
                              key={tag} 
                              className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <Link 
                          to={result.type === 'article' 
                            ? `/article/${result.data.slug}` 
                            : `/video/${result.data.id}`
                          }
                          className="text-ncompass-green text-sm font-medium hover:text-ncompass-green/80"
                        >
                          {result.type === 'article' ? 'Read article' : 'Watch video'} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <X className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">No results found</h2>
              <p className="text-gray-400 mb-6">
                We couldn't find any results for "{query}". Try a different search term.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center py-2 px-4 rounded-md bg-ncompass-green text-ncompass-blue font-medium hover:bg-ncompass-green/90 transition-colors"
              >
                Browse all categories
              </Link>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">
              Enter a search term to find articles and videos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
