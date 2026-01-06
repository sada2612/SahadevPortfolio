import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight, X } from 'lucide-react';

const AllProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date-desc');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  // Projects data (same as before)
  const projects = [
    {
    id: 1,
    title: "Acentra Health - Healthcare Management System",
    description: "Developed healthcare applications to streamline data management and improve user experience. Built secure, scalable modules for patient data management, treatment tracking, and healthcare analytics.",
    categories: ["Healthcare", "Completed"],
    technologies: ["ASP.NET Core", "Angular", "Web API", "Entity Framework Core", "SQL Server 2019", "jQuery", "Ajax"],
    featured: true,
    stats: [
      { label: "Team Size", value: "100+" },
      { label: "Performance Improvement", value: "30%+" },
      { label: "Modules Developed", value: "10+" },
      { label: "Code Quality", value: "95%" }
    ],
    link: "/projects/acentra-healthcare-system"
  },
  {
    id: 2,
    title: "US FinTech Banking Platform - Digital Payment System",
    description: "Contributed to a U.S.-based banking and financial services project building a secure UPI-style digital payment platform for real-time transactions, authentication, and account management.",
    categories: ["FinTech", "Completed"],
    technologies: [".NET Core", "Angular", "React", "AWS Lambda", "API Gateway", "S3", "Docker", "PrimeNG", "PrimeReact"],
    featured: true,
    stats: [
      { label: "Transaction Processing", value: "Real-time" },
      { label: "Platform Users", value: "10K+" },
      { label: "AWS Services", value: "5+" },
      { label: "Response Time", value: "< 200ms" }
    ],
    link: "/projects/fintech-banking-platform"
  },
  {
    id: 3,
    title: "HRMS - Human Resource Management System",
    description: "Developed a modular HRMS platform covering payroll, attendance, and performance management functionalities. Integrated AWS Lambda for serverless logic and S3 Buckets for secure file storage.",
    categories: ["Enterprise", "Completed"],
    technologies: [".NET Core", "React", "PrimeReact", "Web API", "SQL Server 2022", "AWS Lambda", "S3"],
    featured: true,
    stats: [
      { label: "Modules Developed", value: "5+" },
      { label: "Employee Capacity", value: "500+" },
      { label: "File Storage", value: "AWS S3" },
      { label: "Serverless Functions", value: "10+" },
      { label: "Team Size", value: "25+"}
    ],
    link: "/projects/hrm-system"
  },
  {
    id: 4,
    title: "SiGa Systems - Enterprise Solutions Platform",
    description: "Designed and developed N-tier web applications for various clients, providing technical leadership and project execution guidance. Enhanced existing applications for improved performance and scalability.",
    categories: ["Enterprise Solutions", "Current"],
    technologies: ["C#", ".NET Core", "Angular", "React", "TypeScript", "SQL Server", "AWS", "Azure"],
    featured: true,
    stats: [
      { label: "Clients Supported", value: "3+" },
      { label: "Applications Developed", value: "5+" },
      { label: "Code Reviews", value: "50+" },
      { label: "Performance Gain", value: "40%+" }
    ],
    link: "/projects/siga-systems-platform"
  },
  {
    id: 5,
    title: "Tenant Management Platform - Multi-Property Solution",
    description: "Currently developing a comprehensive SaaS platform for property management companies to handle multiple properties, tenants, lease agreements, and maintenance requests with role-based dashboards.",
    categories: ["Real Estate", "In Progress"],
    technologies: ["ASP.NET Core", "Angular 16+", "TypeScript", "SQL Server 2022", "Azure App Services", "Azure Blob Storage", "Azure AD B2C", "PrimeNG", "SignalR"],
    featured: true,
    stats: [
      { label: "Properties Managed", value: "200+" },
      { label: "API Performance", value: "< 200ms" },
      { label: "User Roles", value: "3" },
      { label: "Cloud Services", value: "Azure" }
    ],
    link: "/projects/tenant-management-platform"
  },
  {
    id: 6,
    title: "Real-time Transaction Dashboard",
    description: "Built a real-time monitoring dashboard for financial transactions with live updates, interactive charts, and alert systems using WebSocket connections and PrimeNG components.",
    categories: ["FinTech", "Completed"],
    technologies: ["Angular", "TypeScript", "PrimeNG", "WebSocket API", ".NET Core", "SQL Server", "SignalR"],
    featured: false,
    stats: [
      { label: "Real-time Updates", value: "< 500ms" },
      { label: "Concurrent Users", value: "1K+" },
      { label: "Charts", value: "15+" },
      { label: "Alerts", value: "Real-time" }
    ],
    link: "/projects/realtime-transaction-dashboard"
  },
  {
    id: 7,
    title: "Cloud-based Document Management System",
    description: "Developed a secure document management system with AWS S3 integration for file storage, Azure Functions for serverless processing, and React frontend with drag-drop functionality.",
    categories: ["Enterprise", "Completed"],
    technologies: ["React", "PrimeReact", "AWS S3", "Azure Functions", ".NET Core Web API", "SQL Server", "Docker", "CI/CD"],
    featured: false,
    stats: [
      { label: "Documents Processed", value: "10K+" },
      { label: "Storage Used", value: "500GB+" },
      { label: "File Types", value: "20+" },
      { label: "Upload Speed", value: "< 5s" }
    ],
    link: "/projects/cloud-document-management"
  },
  {
    id: 8,
    title: "Microservices-based E-commerce API Platform",
    description: "Designed and implemented a scalable e-commerce backend using microservices architecture with separate services for products, orders, payments, and users.",
    categories: ["E-commerce", "Completed"],
    technologies: [".NET Core", "Microservices", "Docker", "AWS Lambda", "API Gateway", "SQL Server", "Entity Framework Core", "REST API"],
    featured: false,
    stats: [
      { label: "Microservices", value: "6+" },
      { label: "API Endpoints", value: "50+" },
      { label: "Docker Containers", value: "8+" },
      { label: "Database Tables", value: "30+" }
    ],
    link: "/projects/microservices-ecommerce-api"
  },
    {
    id: 9,
    title: "Weather Dashboard - Angular Learning Project",
    description: "Interactive weather dashboard built with Angular to practice API integration, responsive design, and state management. Features real-time weather data, 5-day forecasts, and location-based search.",
    categories: ["Learning", "Frontend", "Completed"],
    technologies: ["Angular", "TypeScript", "OpenWeather API", "Bootstrap", "RxJS"],
    featured: false,
    stats: [
      { label: "API Integration", value: "OpenWeather" },
      { label: "Cities Supported", value: "100K+" },
      { label: "Weather Metrics", value: "8+" },
      { label: "Response Time", value: "< 1s" }
    ],
    link: "/projects/weather-dashboard-angular",
    github: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 10,
    title: "Task Manager API - .NET Core Practice",
    description: "RESTful API for task management built with .NET Core to practice clean architecture, JWT authentication, and Entity Framework Core. Includes user authentication, CRUD operations, and pagination.",
    categories: ["Learning", "Backend", "Completed"],
    technologies: [".NET Core", "Entity Framework Core", "JWT", "SQL Server", "Swagger"],
    featured: false,
    stats: [
      { label: "API Endpoints", value: "12" },
      { label: "Authentication", value: "JWT" },
      { label: "Database Tables", value: "4" },
      { label: "Test Coverage", value: "85%" }
    ],
    link: "/projects/task-manager-api",
    github: "https://github.com/yourusername/task-manager-api"
  },
  {
    id: 11,
    title: "E-commerce UI - React Components Library",
    description: "Reusable React component library for e-commerce applications. Built to practice component composition, props drilling, and responsive design patterns with PrimeReact.",
    categories: ["Learning", "Frontend", "Completed"],
    technologies: ["React", "PrimeReact", "TypeScript", "CSS Modules", "Storybook"],
    featured: false,
    stats: [
      { label: "Components", value: "15+" },
      { label: "Storybook Stories", value: "25+" },
      { label: "Custom Hooks", value: "5" },
      { label: "Browser Support", value: "All modern" }
    ],
    link: "/projects/ecommerce-ui-components",
    github: "https://github.com/yourusername/ecommerce-ui-components"
  },
  {
    id: 12,
    title: "Dockerized .NET + React Application",
    description: "Full-stack application with .NET Core backend and React frontend, containerized with Docker and Docker Compose. Practice project for containerization and multi-service orchestration.",
    categories: ["Learning", "DevOps", "Completed"],
    technologies: [".NET Core", "React", "Docker", "Docker Compose", "Nginx"],
    featured: false,
    stats: [
      { label: "Containers", value: "3" },
      { label: "Dockerfile", value: "2" },
      { label: "Image Size", value: "< 300MB" },
      { label: "Startup Time", value: "< 30s" }
    ],
    link: "/projects/dockerized-fullstack-app",
    github: "https://github.com/yourusername/dockerized-app"
  },
  {
    id: 13,
    title: "AWS Serverless Contact Form",
    description: "Serverless contact form implementation using AWS services. Practice project for understanding AWS Lambda, API Gateway, and S3 integration in a real-world scenario.",
    categories: ["Learning", "Cloud", "Completed"],
    technologies: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "CloudFront"],
    featured: false,
    stats: [
      { label: "AWS Services", value: "5" },
      { label: "Monthly Cost", value: "< $1" },
      { label: "Response Time", value: "< 100ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    link: "/projects/aws-serverless-contact-form",
    github: "https://github.com/yourusername/aws-contact-form"
  }
  ];

  // Available categories for filtering
  const categories = [
    "All",
    "AI/ML",
    "Frontend",
    "Full Stack",
    "Backend",
    "Mobile",
    "Ongoing",
    "Completed"
  ];

  const sortOptions = [
    { value: "date-desc", label: "Newest First" },
    { value: "date-asc", label: "Oldest First" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "category", label: "Category" }
  ];

  // Get all unique categories from projects
  const getAllProjectCategories = () => {
    const allCategories = new Set();
    projects.forEach(project => {
      project.categories.forEach(cat => allCategories.add(cat));
    });
    return Array.from(allCategories);
  };

  // Filter and sort projects
  useEffect(() => {
    let results = [...projects];

    // Apply search filter
    if (searchQuery) {
      results = results.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes('All')) {
      results = results.filter(project => {
        // Check if project has at least one category in selectedCategories
        return project.categories.some(category => 
          selectedCategories.includes(category)
        );
      });
    }

    // Apply sorting
    results.sort((a, b) => {
      switch (sortOption) {
        case 'date-desc':
          return b.id - a.id; // Assuming higher ID = newer
        case 'date-asc':
          return a.id - b.id;
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'category':
          return a.categories[0].localeCompare(b.categories[0]);
        default:
          return 0;
      }
    });

    setFilteredProjects(results);
  }, [searchQuery, sortOption, selectedCategories]);

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (category === 'All') {
      // If "All" is clicked, clear other selections and select only "All"
      setSelectedCategories(['All']);
    } else {
      // Remove "All" if it's currently selected
      const newSelected = selectedCategories.includes('All') 
        ? [] 
        : [...selectedCategories];
      
      // Toggle the category
      if (newSelected.includes(category)) {
        // Remove category
        const updated = newSelected.filter(cat => cat !== category);
        // If no categories selected, default to "All"
        setSelectedCategories(updated.length > 0 ? updated : ['All']);
      } else {
        // Add category
        setSelectedCategories([...newSelected, category]);
      }
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories(['All']);
    setSearchQuery('');
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
      'Frontend': 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800',
      'Full Stack': 'bg-green-100 text-green-700 border-green-200 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800',
      'Backend': 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
      'Mobile': 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-950/50 dark:text-pink-300 dark:border-pink-800',
      'Ongoing': 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700',
      'Completed': 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700',
      'Healthcare': 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800',
      'FinTech': 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800',
      'Enterprise': 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
      'Enterprise Solutions': 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
      'Real Estate': 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800',
      'E-commerce': 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800',
      'Learning': 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-800',
      'DevOps': 'bg-lime-100 text-lime-700 border-lime-200 dark:bg-lime-950/50 dark:text-lime-300 dark:border-lime-800',
      'Cloud': 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
  };

  // Get status color
  const getStatusColor = (status) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700'
      : 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700';
  };

  // Get active categories from projects
  const activeCategories = getAllProjectCategories();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore my portfolio of {projects.length} projects spanning full-stack development, AI/ML, and cloud architecture
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                className="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors dark:border-slate-700 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pl-10 pr-4 border-border focus:border-primary focus:ring-primary"
                placeholder="Search projects, technologies..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <select
                className="px-4 py-2 dark:bg-transparent dark:border-slate-700 rounded-md border border-border bg-background text-foreground text-sm font-medium hover:bg-muted hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value} className='dark:text-gray dark:bg-gray-700'>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                className="inline-flex dark:border-slate-700 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border border-border text-foreground hover:bg-muted hover:border-primary/50 h-9 px-4 py-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 && !(selectedCategories.length === 1 && selectedCategories[0] === 'All')) || searchQuery ? (
            <div className="mb-4 p-4 dark:border-slate-700 rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">Active Filters</h3>
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-3 w-3" />
                  Clear all
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-1 hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
                {selectedCategories.map(category => category !== 'All' && (
                  <div
                    key={category}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {category}
                    <button
                      onClick={() => handleCategorySelect(category)}
                      className="ml-1 hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Category Filters */}
          {showFilters && (
            <div className="mb-4 p-4 dark:border-slate-700 rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">Filter by Category</h3>
                <span className="text-xs text-muted-foreground">
                  {selectedCategories.length > 0 && !(selectedCategories.length === 1 && selectedCategories[0] === 'All')
                    ? `${selectedCategories.length} selected`
                    : 'All selected'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${getCategoryColor(category)} hover:opacity-80 ${
                      selectedCategories.includes(category) 
                        ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900' 
                        : ''
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Additional categories from projects */}
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-semibold text-foreground">Project Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {activeCategories.map(category => (
                    <button
                      key={category}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${getCategoryColor(category)} hover:opacity-80 ${
                        selectedCategories.includes(category) 
                          ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900' 
                          : ''
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Count */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategories.length > 0 && !(selectedCategories.length === 1 && selectedCategories[0] === 'All') && (
              <span className="ml-2">
                • Filtered by: {selectedCategories.join(', ')}
              </span>
            )}
          </div>
          {filteredProjects.length === 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(project => (
              <div key={project.id} className="group">
                <a className="cursor-pointer" href={project.link}>
                  <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow group relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 z-20 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-lg blur-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-30 p-6">
                      {/* Title and Featured Badge */}
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Categories */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.categories.map((category, index) => (
                          <div
                            key={index}
                            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors shadow hover:opacity-80 ${
                              index === 0 ? getCategoryColor(category) : getStatusColor(category)
                            }`}
                          >
                            {category}
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-slate-100 dark:border-slate-600 border-border text-muted-foreground hover:border-primary/50"
                          >
                            {tech}
                          </div>
                        ))}
                        {project.technologies.length > 4 && (
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-slate-100 dark:border-slate-600 border-border text-muted-foreground hover:border-primary/50">
                            +{project.technologies.length - 4} more
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 border-t dark:border-slate-700 border-border pt-4">
                        {project.stats.map((stat, index) => (
                          <div key={index}>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                            <p className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-lg font-bold text-transparent">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* View Details */}
                      <div className="mt-4 flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">No projects found</h3>
            <p className="mb-6 text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;