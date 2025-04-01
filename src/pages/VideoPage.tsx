
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { getVideoById, videos } from '@/data/knowledgeBaseData';

const VideoPage = () => {
  const { videoId } = useParams<{ videoId: string }>();
  
  // Find the video by ID
  const video = videoId ? getVideoById(videoId) : undefined;
  
  // Find related videos
  const relatedVideos = video 
    ? videos
        .filter(v => v.id !== video.id && 
          (v.category === video.category || 
           v.tags.some(tag => video.tags.includes(tag))))
        .slice(0, 3)
    : [];
  
  if (!video) {
    return (
      <div className="kb-container py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Video Not Found</h1>
        <p className="text-gray-400 mb-6">The video you're looking for doesn't exist.</p>
        <Link 
          to="/videos" 
          className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to video library
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-12">
      <div className="bg-muted py-12">
        <div className="kb-container">
          <Link 
            to="/videos" 
            className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to video library
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-4">{video.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Uploaded {new Date(video.uploadDate).toLocaleDateString()}
            </div>
            <div className="bg-ncompass-green/10 text-ncompass-green px-2.5 py-0.5 rounded-full">
              {video.category}
            </div>
            {video.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 text-xs"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="kb-container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {/* Video player */}
            <div className="mb-8 overflow-hidden rounded-lg">
              <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                <div className="w-full h-full relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-ncompass-green flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#091635" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video description */}
            <div className="kb-card mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <p className="text-gray-400">{video.description}</p>
            </div>
            
            {/* Video feedback */}
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Was this video helpful?</h3>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-ncompass-green/10 hover:bg-ncompass-green/20 text-ncompass-green rounded-md transition-colors">
                  Yes, it helped
                </button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors">
                  No, I need more help
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/4">
            {/* Related videos */}
            {relatedVideos.length > 0 && (
              <div className="kb-card">
                <h3 className="text-lg font-semibold text-white mb-4">Related Videos</h3>
                <div className="space-y-4">
                  {relatedVideos.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/video/${related.id}`}
                      className="block"
                    >
                      <div className="aspect-video mb-2 rounded-md overflow-hidden">
                        <img 
                          src={related.thumbnail} 
                          alt={related.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-white font-medium line-clamp-2 hover:text-ncompass-green transition-colors">
                        {related.title}
                      </h4>
                      <span className="text-xs text-gray-500">{related.duration}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link 
                    to="/videos" 
                    className="flex items-center text-ncompass-green hover:text-ncompass-green/80"
                  >
                    View all videos <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
