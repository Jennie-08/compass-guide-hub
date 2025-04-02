
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Show success message
      toast({
        title: "Message sent",
        description: "We've received your message and will respond shortly.",
        variant: "default",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen">
      <div className="bg-ncompass-blue py-12">
        <div className="kb-container">
          <Link 
            to="/" 
            className="inline-flex items-center text-ncompass-green hover:text-ncompass-green/80 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
          
          <h1 className="text-3xl font-bold text-white mb-4">Contact Support</h1>
          <p className="text-gray-300 max-w-3xl mb-4">
            Can't find what you're looking for? Our support team is ready to assist you with any dashboard-related questions or issues.
          </p>
        </div>
      </div>
      
      <div className="kb-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-ncompass-blue mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ncompass-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ncompass-green"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ncompass-green"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ncompass-green"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-ncompass-green text-ncompass-blue hover:bg-ncompass-green/90"
                >
                  {isSubmitting ? (
                    <>Sending... <span className="ml-2 animate-spin">⟳</span></>
                  ) : (
                    <>Send Message <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-ncompass-blue mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-ncompass-blue/10 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-ncompass-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <a href="mailto:support@ncompasstv.com" className="text-ncompass-green hover:underline">
                      support@ncompasstv.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-ncompass-blue/10 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-ncompass-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Phone</p>
                    <a href="tel:+18005551234" className="text-ncompass-green hover:underline">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-ncompass-blue/10 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-ncompass-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Live Chat</p>
                    <p className="text-gray-600">Available Monday to Friday</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-ncompass-blue mb-4">Support Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
