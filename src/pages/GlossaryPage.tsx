
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

interface GlossaryTermProps {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, definition, relatedTerms }) => (
  <div className="mb-8 pb-8 border-b border-gray-200 last:border-0">
    <h3 className="text-xl font-bold text-ncompass-blue mb-3" id={term.toLowerCase().replace(/\s+/g, '-')}>
      {term}
    </h3>
    <p className="text-gray-700 mb-4">{definition}</p>
    
    {relatedTerms && relatedTerms.length > 0 && (
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-600">Related terms:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {relatedTerms.map((related, index) => (
            <a 
              key={index}
              href={`#${related.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm bg-gray-100 text-ncompass-blue px-3 py-1 rounded-full hover:bg-ncompass-green/20 transition-colors"
            >
              {related}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

const glossaryTerms = [
  {
    term: "Filler",
    definition: "Fillers are content items that automatically play when no scheduled content is available in a playlist. They act as 'gap fillers' to ensure there's always something playing on your screens. Fillers can be images, videos, or other media types that you want to display during empty time slots.",
    relatedTerms: ["Feed", "Filler Feed", "Playlist"]
  },
  {
    term: "Feed",
    definition: "A feed is a source of dynamic content that updates automatically in the system. Feeds can include social media content, RSS feeds, weather updates, or other data sources that bring real-time information to your digital displays.",
    relatedTerms: ["Filler Feed", "Filler"]
  },
  {
    term: "Filler Feed",
    definition: "A filler feed combines the concepts of fillers and feeds. It's a dynamically updating content source that's used to fill empty slots in your programming schedule. Unlike standard fillers (which are static), filler feeds automatically update with fresh content from the source.",
    relatedTerms: ["Filler", "Feed"]
  },
  {
    term: "Playlist",
    definition: "A playlist is a collection of content items (media, feeds, etc.) arranged to play in a specific order or schedule. Playlists are the main way to organize what content appears on your screens and when it appears.",
    relatedTerms: ["Screen", "Content"]
  },
  {
    term: "Screen",
    definition: "A screen represents a physical display device where your content will be shown. In the dashboard, you can configure settings for each screen, assign playlists, and manage display properties.",
    relatedTerms: ["Host", "Playlist"]
  },
  {
    term: "Host",
    definition: "A host refers to the device (typically a media player or computer) that controls a screen and plays the content. Hosts are physical devices that need to be registered in the system and assigned to specific screens.",
    relatedTerms: ["Screen", "License"]
  },
  {
    term: "License",
    definition: "A license authorizes a host device to connect to the system and display content. Licenses must be assigned to hosts before they can be used, and they may have different types or limitations depending on your subscription.",
    relatedTerms: ["Host", "Dealer"]
  },
  {
    term: "Dealer",
    definition: "A dealer is a business entity or partner who can manage multiple clients within the system. Dealers can have their own set of licenses and hosts to distribute to their customers.",
    relatedTerms: ["License", "Host"]
  },
  {
    term: "Tag",
    definition: "Tags are labels that can be attached to different items (content, screens, hosts, etc.) to help organize and filter them. Tags make it easier to search for specific items and can be used to create smart playlists or filtering views.",
    relatedTerms: ["Content", "Filter"]
  },
  {
    term: "Blacklist/Whitelist",
    definition: "Blacklists and whitelists are filtering mechanisms. A blacklist specifies items that are blocked or excluded, while a whitelist specifies items that are allowed. These can apply to content sources, domains, or other elements depending on the context.",
    relatedTerms: ["Filter", "Content"]
  },
  {
    term: "Media Library",
    definition: "The Media Library is the central repository where all your uploaded media files (images, videos, audio, etc.) are stored and managed. Content from the Media Library can be added to playlists and displayed on screens.",
    relatedTerms: ["Content", "Fillers Library"]
  },
  {
    term: "Fillers Library",
    definition: "The Fillers Library is a specialized section that contains all the content items designated as fillers. These items automatically play when there's no scheduled content in a playlist, preventing blank screens.",
    relatedTerms: ["Filler", "Media Library"]
  }
];

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);
  
  useEffect(() => {
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      const filtered = glossaryTerms.filter(
        term => term.term.toLowerCase().includes(lowercaseSearch) || 
                term.definition.toLowerCase().includes(lowercaseSearch)
      );
      setFilteredTerms(filtered);
    } else {
      setFilteredTerms(glossaryTerms);
    }
  }, [searchTerm]);
  
  return (
    <div className="min-h-screen">
      <div className="bg-ncompass-blue py-12">
        <div className="kb-container">
          <Link 
            to="/" 
            className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard Glossary</h1>
          <p className="text-gray-300 max-w-3xl mb-8">
            A comprehensive list of terms and definitions used throughout the dashboard to help clarify any confusion.
          </p>
          
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search glossary terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ncompass-green"
            />
          </div>
        </div>
      </div>
      
      <div className="kb-container py-12">
        <div className="max-w-3xl mx-auto">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term, index) => (
              <GlossaryTerm
                key={index}
                term={term.term}
                definition={term.definition}
                relatedTerms={term.relatedTerms}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No matching terms found.</p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-ncompass-green hover:text-ncompass-green/80"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
