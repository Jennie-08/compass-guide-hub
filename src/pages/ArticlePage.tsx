
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight, Tag, PlayCircle } from 'lucide-react';
import { articles, getArticleById, getVideoById } from '@/data/knowledgeBaseData';

const ArticlePage = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  
  // Find the article by slug
  const article = articles.find(a => a.slug === articleSlug);
  
  // Get related articles if any
  const relatedArticles = article?.relatedArticles 
    ? article.relatedArticles.map(id => getArticleById(id)).filter(Boolean)
    : [];
    
  // Get associated video if any
  const video = article?.videoId ? getVideoById(article.videoId) : undefined;
  
  if (!article) {
    return (
      <div className="kb-container py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
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
    <div className="min-h-screen pb-12">
      <div className="bg-muted py-12">
        <div className="kb-container">
          <Link 
            to={`/category/${article.category}`} 
            className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to {article.category.replace(/-/g, ' ')}
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Updated {new Date(article.updatedAt).toLocaleDateString()}
            </div>
            {article.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-ncompass-green/10 text-ncompass-green text-xs"
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
            {/* Video section if available */}
            {video && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Video Tutorial</h2>
                <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-ncompass-green text-ncompass-blue flex items-center justify-center">
                      <PlayCircle className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{video.description}</p>
              </div>
            )}
            
            {/* Article content */}
            <div className="kb-card">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
            
            {/* Article feedback */}
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Was this article helpful?</h3>
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
            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="kb-card mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map(related => related && (
                    <Link 
                      key={related.id} 
                      to={`/article/${related.slug}`}
                      className="block hover:bg-muted p-3 rounded-md transition-colors"
                    >
                      <h4 className="text-white font-medium hover:text-ncompass-green transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Contact support */}
            <div className="kb-card bg-ncompass-blue">
              <h3 className="text-lg font-semibold text-white mb-4">Need More Help?</h3>
              <p className="text-gray-400 mb-4">If you still have questions or need assistance, our support team is here to help.</p>
              <Link 
                to="/contact" 
                className="block w-full py-2 px-4 bg-ncompass-green text-ncompass-blue font-medium rounded-md text-center hover:bg-ncompass-green/90 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
