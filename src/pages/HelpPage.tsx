
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, BookOpen, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HelpPage = () => {
  return (
    <div className="kb-container py-12">
      <h1 className="text-3xl font-bold mb-8 text-ncompass-blue">Help Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="kb-card flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-ncompass-green mr-2" />
            <h2 className="text-xl font-semibold text-ncompass-blue">Documentation</h2>
          </div>
          <p className="mb-4 text-gray-700">
            Explore our comprehensive documentation to learn how to use the dashboard effectively. 
            Find detailed guides, tutorials, and explanations for all features.
          </p>
          <div className="mt-auto">
            <Link to="/category/guides">
              <Button className="bg-ncompass-green hover:bg-ncompass-green/90 text-white">
                Browse Documentation
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="kb-card flex flex-col">
          <div className="flex items-center mb-4">
            <Search className="h-6 w-6 text-ncompass-green mr-2" />
            <h2 className="text-xl font-semibold text-ncompass-blue">Search Knowledge Base</h2>
          </div>
          <p className="mb-4 text-gray-700">
            Looking for specific information? Use our search function to quickly find answers 
            to your questions about features, processes, and troubleshooting.
          </p>
          <div className="mt-auto">
            <Link to="/search">
              <Button className="bg-ncompass-green hover:bg-ncompass-green/90 text-white">
                Search Knowledge Base
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="kb-card flex flex-col">
          <div className="flex items-center mb-4">
            <HelpCircle className="h-6 w-6 text-ncompass-green mr-2" />
            <h2 className="text-xl font-semibold text-ncompass-blue">Frequently Asked Questions</h2>
          </div>
          <p className="mb-4 text-gray-700">
            Browse through commonly asked questions and their answers. This section covers the most common 
            issues and clarifications needed by dashboard users.
          </p>
          <div className="mt-auto">
            <Link to="/category/faqs">
              <Button className="bg-ncompass-green hover:bg-ncompass-green/90 text-white">
                View FAQs
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="kb-card flex flex-col">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-ncompass-green mr-2" />
            <h2 className="text-xl font-semibold text-ncompass-blue">Contact Support</h2>
          </div>
          <p className="mb-4 text-gray-700">
            Couldn't find what you're looking for? Our support team is ready to help you with any 
            questions or issues you might be experiencing.
          </p>
          <div className="mt-auto">
            <Link to="/contact">
              <Button className="bg-ncompass-green hover:bg-ncompass-green/90 text-white">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="kb-card mb-12">
        <h2 className="text-xl font-semibold mb-4 text-ncompass-blue">Quick Tips</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-ncompass-green font-bold mr-2">•</span>
            <span>Use the search bar at the top of the page to quickly find specific topics.</span>
          </li>
          <li className="flex items-start">
            <span className="text-ncompass-green font-bold mr-2">•</span>
            <span>Check the FAQ section for common questions and answers.</span>
          </li>
          <li className="flex items-start">
            <span className="text-ncompass-green font-bold mr-2">•</span>
            <span>Explore the video tutorials for visual step-by-step guides.</span>
          </li>
          <li className="flex items-start">
            <span className="text-ncompass-green font-bold mr-2">•</span>
            <span>Browse articles by category to learn about specific features.</span>
          </li>
          <li className="flex items-start">
            <span className="text-ncompass-green font-bold mr-2">•</span>
            <span>Refer to the glossary for definitions of dashboard terminology.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;
