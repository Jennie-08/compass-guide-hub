
import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  id, 
  title, 
  thumbnail, 
  duration,
  category
}) => {
  return (
    <Link to={`/video/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <div className="aspect-video bg-gray-200 relative overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-3 left-3 flex items-center text-white text-sm">
            <span className="flex items-center bg-black/60 px-2 py-1 rounded">
              <Play className="h-3 w-3 mr-1" />
              {duration}
            </span>
          </div>
          <div className="absolute top-0 left-0 m-3">
            <span className="bg-ncompass-green text-white text-xs font-medium px-2 py-1 rounded">
              {category}
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-ncompass-green/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-gray-800 font-medium group-hover:text-ncompass-green transition-colors">
        {title}
      </h3>
    </Link>
  );
};

export default VideoCard;
