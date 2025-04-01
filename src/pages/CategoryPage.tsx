
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, Tag } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { categories, getArticlesByCategory } from '@/data/knowledgeBaseData';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Find the category by slug
  const category = categories.find(c => c.slug === categorySlug);
  
  // Get articles for this category
  const articles = categorySlug ? getArticlesByCategory(categorySlug) : [];
  
  if (!category) {
    return (
      <div className="kb-container py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Category Not Found</h1>
        <p className="text-gray-400 mb-6">The category you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>
      </div>
    );
  }
  
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
          
          <h1 className="text-3xl font-bold text-white mb-4">{category.name}</h1>
          <p className="text-gray-400 max-w-3xl mb-8">{category.description}</p>
          
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <div className="kb-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map(article => (
              <Link 
                key={article.id} 
                to={`/article/${article.slug}`}
                className="kb-card"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ncompass-green/10">
                    <FileText className="h-5 w-5 text-ncompass-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white hover:text-ncompass-green transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-gray-400 line-clamp-2">{article.description}</p>
                    
                    <div className="mt-4 flex items-center text-xs text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> 
                        Updated {new Date(article.updatedAt).toLocaleDateString()}
                      </span>
                      {article.videoId && (
                        <span className="text-ncompass-green">Has video</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-400">No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
