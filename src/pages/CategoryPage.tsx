
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Clock, Tag, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { categories, getArticlesByCategory } from '@/data/knowledgeBaseData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  
  // Different icons for different categories
  const getCategoryIcon = () => {
    switch(categorySlug) {
      case 'tutorials':
        return <BookOpen className="h-8 w-8 text-ncompass-green" />;
      case 'guides':
        return <Lightbulb className="h-8 w-8 text-ncompass-green" />;
      case 'faqs':
        return <HelpCircle className="h-8 w-8 text-ncompass-green" />;
      default:
        return <FileText className="h-8 w-8 text-ncompass-green" />;
    }
  };

  // Render different layouts based on category
  const renderCategoryLayout = () => {
    switch(categorySlug) {
      case 'tutorials':
        return renderTutorialsLayout();
      case 'guides':
        return renderGuidesLayout();
      case 'faqs':
        return renderFAQsLayout();
      default:
        return renderDefaultLayout();
    }
  };

  // Tutorials layout with step-by-step style cards
  const renderTutorialsLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <Link key={article.id} to={`/article/${article.slug}`} className="block">
            <Card className="h-full hover:border-ncompass-green transition-colors">
              <CardHeader className="bg-ncompass-blue/10 pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-ncompass-blue rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl text-ncompass-blue">{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-600 line-clamp-3">{article.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-xs text-gray-500 flex justify-between">
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 
                  Updated {new Date(article.updatedAt).toLocaleDateString()}
                </span>
                {article.videoId && (
                  <span className="text-ncompass-green">Has video</span>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-2 text-center py-12">
          <p className="text-gray-400">No tutorials found in this category.</p>
        </div>
      )}
    </div>
  );

  // Guides layout with more visual and card-based layout
  const renderGuidesLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.length > 0 ? (
        articles.map(article => (
          <Link key={article.id} to={`/article/${article.slug}`} className="block">
            <Card className="h-full hover:shadow-md transition-shadow hover:border-ncompass-green">
              <div className="h-36 bg-ncompass-blue/50 flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-ncompass-blue">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 line-clamp-2">{article.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 
                  Updated {new Date(article.updatedAt).toLocaleDateString()}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-400">No guides found in this category.</p>
        </div>
      )}
    </div>
  );

  // FAQs layout with accordion-like appearance
  const renderFAQsLayout = () => (
    <div className="space-y-4">
      {articles.length > 0 ? (
        articles.map(article => (
          <Link key={article.id} to={`/article/${article.slug}`} className="block">
            <Card className="w-full hover:border-ncompass-green transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-ncompass-green mr-3 mt-1 flex-shrink-0" />
                  <CardTitle className="text-lg text-ncompass-blue">{article.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 pl-8">{article.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-xs text-gray-500 pl-8">
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 
                  Updated {new Date(article.updatedAt).toLocaleDateString()}
                </span>
                {article.videoId && (
                  <span className="ml-3 text-ncompass-green flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    Has video
                  </span>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No FAQs found in this category.</p>
        </div>
      )}
    </div>
  );

  // Default layout (original card grid)
  const renderDefaultLayout = () => (
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
  );
  
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
          
          <div className="flex items-center gap-4 mb-4">
            {getCategoryIcon()}
            <h1 className="text-3xl font-bold text-white">{category.name}</h1>
          </div>
          <p className="text-gray-400 max-w-3xl mb-8">{category.description}</p>
          
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <div className="kb-container py-12">
        {renderCategoryLayout()}
      </div>
    </div>
  );
};

export default CategoryPage;
