
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/knowledgeBaseData';

// Get unique categories from videos
const videoCategories = Array.from(new Set(videos.map(video => video.category)));

const VideoLibraryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter videos based on category and search query
  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory ? video.category === selectedCategory : true;
    const matchesSearch = searchQuery 
      ? video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    
    return matchesCategory && matchesSearch;
  });
  
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
          
          <h1 className="text-3xl font-bold text-white mb-4">Video Guides</h1>
          <p className="text-gray-400 max-w-3xl mb-8">
            Browse our collection of video tutorials and guides to help you navigate the N-Compass TV dashboard.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)} 
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  selectedCategory === null 
                    ? 'bg-ncompass-green text-ncompass-blue' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-colors`}
              >
                All Videos
              </button>
              {videoCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    selectedCategory === category 
                      ? 'bg-ncompass-green text-ncompass-blue' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 text-white placeholder-gray-400 rounded-lg p-2 px-4 w-full"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="kb-container py-12">
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <VideoCard 
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                category={video.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No videos found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="text-ncompass-green hover:text-ncompass-green/80"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoLibraryPage;
