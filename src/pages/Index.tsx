
import React from 'react';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedArticles from '@/components/FeaturedArticles';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/knowledgeBaseData';

const Index = () => {
  // Get only the first 3 videos for featured display
  const featuredVideos = videos.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with search */}
      <Hero />
      
      {/* Main content */}
      <main className="flex-grow">
        {/* Categories section */}
        <section className="kb-section kb-container">
          <h2 className="text-2xl font-bold text-ncompass-blue mb-6">Browse by Category</h2>
          <CategoryGrid />
        </section>
        
        {/* Featured articles section */}
        <section className="kb-section kb-container">
          <FeaturedArticles />
        </section>
        
        {/* Video guides section */}
        <section className="kb-section kb-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-ncompass-blue">Video Guides</h2>
            <Link 
              to="/videos" 
              className="flex items-center text-ncompass-green hover:text-ncompass-green/80"
            >
              Browse all videos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
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
        </section>
        
        {/* Help section */}
        <section className="kb-section kb-container bg-ncompass-blue/10 rounded-lg p-8 my-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-ncompass-blue mb-4">Need More Help?</h2>
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-ncompass-green text-ncompass-blue font-medium hover:bg-ncompass-green/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                to="/category/faqs" 
                className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-ncompass-blue text-white font-medium hover:bg-ncompass-blue/90 transition-colors"
              >
                Browse FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
