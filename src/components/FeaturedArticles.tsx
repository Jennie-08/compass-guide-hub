
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredArticles = [
  {
    id: 'campaign-setup',
    title: 'Setting Up Your First Campaign',
    description: 'Learn how to create, configure and launch your first advertising campaign in the dashboard.',
    category: 'Getting Started',
    readTime: '5 min read',
    path: '/article/campaign-setup',
  },
  {
    id: 'analytics-overview',
    title: 'Understanding Analytics Dashboard',
    description: 'A comprehensive guide to reading and interpreting campaign analytics data.',
    category: 'Using Dashboard',
    readTime: '8 min read',
    path: '/article/analytics-overview',
  },
  {
    id: 'user-permissions',
    title: 'Managing User Permissions',
    description: 'How to set up and manage roles and permissions for your team members.',
    category: 'Administration',
    readTime: '4 min read',
    path: '/article/user-permissions',
  },
  {
    id: 'billing-setup',
    title: 'Configuring Billing and Payments',
    description: 'Complete guide to setting up payment methods and understanding billing cycles.',
    category: 'Billing',
    readTime: '6 min read',
    path: '/article/billing-setup',
  },
];

const FeaturedArticles = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Articles</h2>
        <Link 
          to="/articles" 
          className="flex items-center text-ncompass-green hover:text-ncompass-green/80"
        >
          View all articles <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <Link 
            key={article.id} 
            to={article.path}
            className="kb-card"
          >
            <span className="text-xs font-semibold text-ncompass-green">{article.category}</span>
            <h3 className="text-lg font-semibold mt-2 text-gray-800">{article.title}</h3>
            <p className="mt-2 text-gray-600">{article.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">{article.readTime}</span>
              <span className="text-ncompass-green text-sm font-medium">Read more</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
