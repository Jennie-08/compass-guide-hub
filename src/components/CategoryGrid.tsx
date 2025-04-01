
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, Video, BarChart, FileText, AlertCircle } from 'lucide-react';

const categories = [
  {
    id: 'getting-started',
    title: 'Introduction & Getting Started',
    description: 'Learn about dashboard navigation and account setup',
    icon: BookOpen,
    articles: 12,
    path: '/category/getting-started',
  },
  {
    id: 'using-dashboard',
    title: 'Using the Dashboard',
    description: 'Campaign management, analytics, billing and permissions',
    icon: BarChart,
    articles: 18,
    path: '/category/using-dashboard',
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & FAQs',
    description: 'Common issues, password recovery and support',
    icon: AlertCircle,
    articles: 24,
    path: '/category/troubleshooting',
  },
  {
    id: 'help-resources',
    title: 'Community & Help Resources',
    description: 'Searchable articles and how to contact support',
    icon: HelpCircle,
    articles: 8,
    path: '/category/help-resources',
  },
  {
    id: 'updates',
    title: 'Updates & Best Practices',
    description: 'New features, announcements and optimization tips',
    icon: FileText,
    articles: 15,
    path: '/category/updates',
  },
  {
    id: 'video-guides',
    title: 'Video Guides',
    description: 'Watch tutorials and walkthroughs',
    icon: Video,
    articles: 30,
    path: '/videos',
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link 
          to={category.path} 
          key={category.id}
          className="kb-category-card group"
        >
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-ncompass-green/10 text-ncompass-green mr-4">
              <category.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-ncompass-green transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 mt-1">{category.description}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span>{category.articles} articles</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
