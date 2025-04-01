
export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  videoId?: string;
  relatedArticles?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  duration: string;
  category: string;
  tags: string[];
  uploadDate: string;
}

export const categories: Category[] = [
  {
    id: "getting-started",
    name: "Introduction & Getting Started",
    slug: "getting-started",
    description: "Overview of the dashboard, navigation, and account setup"
  },
  {
    id: "using-dashboard",
    name: "Using the Dashboard",
    slug: "using-dashboard",
    description: "Step-by-step guides on campaign management, analytics, billing, and user permissions"
  },
  {
    id: "troubleshooting",
    name: "Troubleshooting & FAQs",
    slug: "troubleshooting",
    description: "Common issues, password recovery, ad visibility problems, and support contact details"
  },
  {
    id: "help-resources",
    name: "Community & Help Resources",
    slug: "help-resources",
    description: "Searchable articles, categorized help sections, and ways to contact support"
  },
  {
    id: "updates",
    name: "Updates & Best Practices",
    slug: "updates",
    description: "New features, announcements, and tips for maximizing dashboard performance"
  }
];

export const articles: Article[] = [
  {
    id: "dashboard-overview",
    title: "Dashboard Overview: Navigation and Key Features",
    slug: "dashboard-overview",
    description: "Learn how to navigate the N-Compass TV dashboard and discover its key features",
    content: `
      <h2>Understanding Your Dashboard</h2>
      <p>The N-Compass TV dashboard is designed to provide you with a comprehensive view of your campaigns, analytics, and account settings. This article will guide you through the main navigation elements and key features.</p>
      
      <h3>Main Navigation</h3>
      <p>The dashboard is divided into several key sections:</p>
      <ul>
        <li><strong>Home:</strong> Your overview page with summary metrics and recent activity</li>
        <li><strong>Campaigns:</strong> Manage all your advertising campaigns</li>
        <li><strong>Analytics:</strong> Detailed performance data and insights</li>
        <li><strong>Billing:</strong> Payment information and subscription details</li>
        <li><strong>Settings:</strong> Account preferences and team management</li>
      </ul>
      
      <h3>Key Features</h3>
      <p>Make sure to explore these essential features:</p>
      <ul>
        <li>Real-time performance tracking</li>
        <li>Campaign scheduling tools</li>
        <li>Audience targeting options</li>
        <li>Customizable reporting</li>
        <li>User permission management</li>
      </ul>
      
      <h3>Getting Help</h3>
      <p>If you need assistance at any point, click the Help icon in the top-right corner to access the knowledge base or contact support.</p>
    `,
    category: "getting-started",
    tags: ["dashboard", "navigation", "overview", "getting started"],
    author: "N-Compass Support Team",
    createdAt: "2023-09-15",
    updatedAt: "2023-11-20",
    videoId: "dashboard-tour",
    relatedArticles: ["account-setup", "campaign-creation"]
  },
  {
    id: "account-setup",
    title: "Setting Up Your Account: First-Time User Guide",
    slug: "account-setup",
    description: "A comprehensive guide for first-time users to set up their N-Compass TV account",
    content: `
      <h2>Setting Up Your N-Compass TV Account</h2>
      <p>Welcome to N-Compass TV! This guide will walk you through the process of setting up your account and configuring your profile.</p>
      
      <h3>Account Creation</h3>
      <p>If you haven't received your login credentials yet, please contact your account manager. Once you have your temporary password:</p>
      <ol>
        <li>Navigate to the login page at dashboard.ncompasstv.com</li>
        <li>Enter your email address and temporary password</li>
        <li>You'll be prompted to create a new password</li>
        <li>Set up two-factor authentication for additional security</li>
      </ol>
      
      <h3>Profile Configuration</h3>
      <p>After logging in, you should complete your profile setup:</p>
      <ol>
        <li>Click on your avatar in the top-right corner</li>
        <li>Select "Profile Settings"</li>
        <li>Fill in your personal information</li>
        <li>Set your notification preferences</li>
        <li>Connect your company accounts if applicable</li>
      </ol>
      
      <h3>Team Setup</h3>
      <p>If you're an administrator, you can now add team members:</p>
      <ol>
        <li>Go to "Settings" > "Team Management"</li>
        <li>Click "Add New Member"</li>
        <li>Enter their email and select appropriate permissions</li>
        <li>They'll receive an invitation email to join</li>
      </ol>
    `,
    category: "getting-started",
    tags: ["account", "setup", "profile", "getting started"],
    author: "N-Compass Support Team",
    createdAt: "2023-09-10",
    updatedAt: "2023-11-15",
    videoId: "account-setup",
    relatedArticles: ["dashboard-overview", "user-permissions"]
  },
  {
    id: "campaign-creation",
    title: "Creating Your First Campaign",
    slug: "campaign-creation",
    description: "Learn how to create and configure your first advertising campaign",
    content: `
      <h2>Creating a Campaign</h2>
      <p>Setting up your first campaign is straightforward with our intuitive campaign builder. Follow these steps to get started:</p>
      
      <h3>Campaign Basics</h3>
      <ol>
        <li>From the dashboard, click the "Create Campaign" button</li>
        <li>Give your campaign a descriptive name</li>
        <li>Select your campaign objective (Awareness, Consideration, or Conversion)</li>
        <li>Set your campaign budget and duration</li>
      </ol>
      
      <h3>Audience Targeting</h3>
      <p>Define who will see your ads:</p>
      <ol>
        <li>Select geographic locations</li>
        <li>Define demographic preferences</li>
        <li>Choose interest categories</li>
        <li>Import custom audiences (if available)</li>
      </ol>
      
      <h3>Ad Content</h3>
      <p>Upload and configure your ad materials:</p>
      <ol>
        <li>Select ad format (display, video, etc.)</li>
        <li>Upload creative assets</li>
        <li>Write ad copy and headlines</li>
        <li>Add call-to-action buttons</li>
        <li>Preview how ads will appear</li>
      </ol>
      
      <h3>Review and Launch</h3>
      <ol>
        <li>Review all campaign settings</li>
        <li>Submit for approval or save as draft</li>
        <li>Set up performance alerts (optional)</li>
      </ol>
    `,
    category: "using-dashboard",
    tags: ["campaign", "creation", "advertising", "setup"],
    author: "N-Compass Marketing Team",
    createdAt: "2023-09-20",
    updatedAt: "2023-12-05",
    videoId: "campaign-creation",
    relatedArticles: ["campaign-optimization", "performance-tracking"]
  },
  {
    id: "analytics-understanding",
    title: "Understanding Campaign Analytics",
    slug: "analytics-understanding",
    description: "A guide to interpreting your campaign analytics and performance metrics",
    content: `
      <h2>Understanding Your Campaign Analytics</h2>
      <p>Analytics are crucial for measuring the success of your campaigns and making data-driven decisions. This guide will help you understand the key metrics and how to interpret them.</p>
      
      <h3>Key Performance Metrics</h3>
      <p>Familiarize yourself with these essential metrics:</p>
      <ul>
        <li><strong>Impressions:</strong> Number of times your ad was displayed</li>
        <li><strong>Reach:</strong> Unique viewers who saw your ad</li>
        <li><strong>Click-Through Rate (CTR):</strong> Percentage of impressions that resulted in clicks</li>
        <li><strong>Conversion Rate:</strong> Percentage of clicks that resulted in desired actions</li>
        <li><strong>Cost Per Click (CPC):</strong> Average cost for each click</li>
        <li><strong>Return on Ad Spend (ROAS):</strong> Revenue generated relative to ad spend</li>
      </ul>
      
      <h3>Analytics Dashboard</h3>
      <p>Navigate the Analytics section:</p>
      <ol>
        <li>Overview tab: Summary of all campaigns</li>
        <li>Campaign detail view: Specific campaign performance</li>
        <li>Audience insights: Demographic and behavioral data</li>
        <li>Conversion tracking: Actions taken by viewers</li>
      </ol>
      
      <h3>Creating Custom Reports</h3>
      <p>To generate tailored analytics:</p>
      <ol>
        <li>Click "Create Report" in the Analytics section</li>
        <li>Select metrics to include</li>
        <li>Choose date ranges and comparison periods</li>
        <li>Set visualization preferences (charts, tables)</li>
        <li>Schedule automated delivery (optional)</li>
      </ol>
    `,
    category: "using-dashboard",
    tags: ["analytics", "metrics", "reporting", "performance"],
    author: "N-Compass Analytics Team",
    createdAt: "2023-10-05",
    updatedAt: "2023-12-10",
    videoId: "analytics-overview",
    relatedArticles: ["performance-tracking", "custom-reports"]
  },
  {
    id: "password-reset",
    title: "How to Reset Your Password",
    slug: "password-reset",
    description: "Step-by-step guide to resetting your password if you've forgotten it",
    content: `
      <h2>Resetting Your Password</h2>
      <p>If you've forgotten your password or need to reset it for security reasons, follow these simple steps:</p>
      
      <h3>From the Login Screen</h3>
      <ol>
        <li>Go to the N-Compass TV dashboard login page</li>
        <li>Click the "Forgot Password?" link below the login form</li>
        <li>Enter your email address associated with your account</li>
        <li>Click "Send Reset Link"</li>
        <li>Check your email for a password reset link (check spam/junk folders if not in inbox)</li>
        <li>Click the link in the email (valid for 24 hours)</li>
        <li>Create a new password following the security requirements</li>
        <li>Log in with your new password</li>
      </ol>
      
      <h3>If You're Already Logged In</h3>
      <ol>
        <li>Click your profile avatar in the top-right corner</li>
        <li>Select "Account Settings"</li>
        <li>Navigate to the "Security" tab</li>
        <li>Click "Change Password"</li>
        <li>Enter your current password</li>
        <li>Create and confirm your new password</li>
        <li>Click "Update Password"</li>
      </ol>
      
      <h3>Password Requirements</h3>
      <p>Your password must contain:</p>
      <ul>
        <li>At least 8 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one lowercase letter</li>
        <li>At least one number</li>
        <li>At least one special character</li>
      </ul>
    `,
    category: "troubleshooting",
    tags: ["password", "reset", "login", "security"],
    author: "N-Compass Support Team",
    createdAt: "2023-08-15",
    updatedAt: "2023-11-05",
    videoId: "password-reset",
    relatedArticles: ["account-security", "two-factor-authentication"]
  }
];

export const videos: Video[] = [
  {
    id: "dashboard-tour",
    title: "Complete Dashboard Tour",
    description: "A comprehensive walkthrough of the N-Compass TV dashboard interface and all its features",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Dashboard+Tour",
    url: "https://example.com/videos/dashboard-tour",
    duration: "8:24",
    category: "Getting Started",
    tags: ["dashboard", "overview", "tour", "navigation"],
    uploadDate: "2023-10-15"
  },
  {
    id: "account-setup",
    title: "Account Setup for New Users",
    description: "Learn how to set up your account, configure your profile, and manage security settings",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Account+Setup",
    url: "https://example.com/videos/account-setup",
    duration: "5:12",
    category: "Getting Started",
    tags: ["account", "setup", "profile", "security"],
    uploadDate: "2023-09-22"
  },
  {
    id: "campaign-creation",
    title: "Creating Your First Campaign",
    description: "Step-by-step guide to creating and launching your first advertising campaign",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Campaign+Creation",
    url: "https://example.com/videos/campaign-creation",
    duration: "10:38",
    category: "Using Dashboard",
    tags: ["campaign", "advertising", "creation", "setup"],
    uploadDate: "2023-11-05"
  },
  {
    id: "analytics-overview",
    title: "Understanding Analytics and Reports",
    description: "How to navigate analytics, interpret key metrics, and create custom reports",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Analytics+Overview",
    url: "https://example.com/videos/analytics-overview",
    duration: "7:50",
    category: "Using Dashboard",
    tags: ["analytics", "metrics", "reports", "data"],
    uploadDate: "2023-12-10"
  },
  {
    id: "ad-optimization",
    title: "Optimizing Your Ad Performance",
    description: "Advanced techniques to improve your campaign performance and ROI",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Ad+Optimization",
    url: "https://example.com/videos/ad-optimization",
    duration: "12:05",
    category: "Best Practices",
    tags: ["optimization", "performance", "ROI", "advanced"],
    uploadDate: "2024-01-08"
  },
  {
    id: "password-reset",
    title: "How to Reset Your Password",
    description: "Quick guide to resetting your password and managing account security",
    thumbnail: "https://placehold.co/600x400/091635/8DCB2C?text=Password+Reset",
    url: "https://example.com/videos/password-reset",
    duration: "3:45",
    category: "Troubleshooting",
    tags: ["password", "reset", "security", "login"],
    uploadDate: "2023-08-20"
  }
];

// Helper function to find article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper function to find video by ID
export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

// Helper function to filter articles by category
export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(article => article.category === categorySlug);
};

// Helper function to search through articles
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) || 
    article.description.toLowerCase().includes(lowercaseQuery) || 
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
