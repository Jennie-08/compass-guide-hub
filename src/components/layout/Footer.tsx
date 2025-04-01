
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ncompass-blue py-8 mt-auto">
      <div className="kb-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-ncompass-green font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-ncompass-green">Home</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-ncompass-green">Video Guides</Link></li>
              <li><Link to="/category/tutorials" className="text-gray-300 hover:text-ncompass-green">Tutorials</Link></li>
              <li><Link to="/category/faqs" className="text-gray-300 hover:text-ncompass-green">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-ncompass-green font-semibold text-lg mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-ncompass-green">Contact Support</Link></li>
              <li><Link to="/category/troubleshooting" className="text-gray-300 hover:text-ncompass-green">Troubleshooting</Link></li>
              <li><Link to="/feedback" className="text-gray-300 hover:text-ncompass-green">Submit Feedback</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-ncompass-green font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/category/best-practices" className="text-gray-300 hover:text-ncompass-green">Best Practices</Link></li>
              <li><Link to="/category/updates" className="text-gray-300 hover:text-ncompass-green">Updates</Link></li>
              <li><Link to="/category/guides" className="text-gray-300 hover:text-ncompass-green">Guides</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-ncompass-green font-semibold text-lg mb-3">About</h3>
            <p className="text-gray-400">N-Compass TV internal knowledge base for dashboard navigation and support.</p>
            <div className="mt-4">
              <img 
                src="/lovable-uploads/e5099738-68ea-4272-8036-fafcbf9bc040.png" 
                alt="N-Compass TV Logo" 
                className="h-10" 
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} N-Compass TV. All rights reserved. Internal use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
