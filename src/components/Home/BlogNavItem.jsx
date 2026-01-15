import React, { useState, useEffect } from 'react';
import { 
  Search, Eye, Heart, ArrowRight, X, 
  MessageCircle, Users, TrendingUp, Zap, Bookmark, Share2, 
  Calendar, Clock, User, Tag, ChevronLeft,
  Code, Terminal, Database, Shield, Cloud, Rocket,
  CheckCircle, AlertCircle, Lightbulb, ExternalLink
} from 'lucide-react';

// Main Blog Component with navigation to details
const BlogComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  // Generate initial posts
  useEffect(() => {
    const initialPosts = [
  {
    id: 1,
    title: 'Enterprise Microservices Architecture on Azure',
    excerpt: 'Designing and implementing scalable microservices using .NET Core, Azure Kubernetes Service, and Service Mesh for financial systems.',
    category: 'projects',
    tags: ['Microservices', '.NET Core', 'Azure', 'Kubernetes', 'Docker', 'Enterprise Architecture'],
    isFeatured: true,
    color: 'blue',
    publishDate: '2025-11-15',
    popularityFactor: 0.95,
    author: 'Sahadev Padavale',
    readTime: '25 min read',
    stats: { views: 3450, likes: 289, comments: 56 },
    content: {
      introduction: 'Building enterprise-grade microservices requires careful consideration of scalability, resilience, and maintainability. In this article, I share my experience architecting a financial services platform serving 10M+ users...',
      sections: [
        { title: 'Architecture Overview', type: 'diagram', content: 'Service mesh implementation with Istio and Azure Kubernetes Service...' },
        { title: 'Event-Driven Communication', type: 'code', content: 'Using Azure Service Bus and Event Grid for async communication...' },
        { title: 'Database Per Service Pattern', type: 'design', content: 'Implementing isolated data persistence with Azure Cosmos DB...' }
      ],
      conclusion: 'Microservices architecture enabled us to achieve 99.99% uptime while maintaining rapid feature delivery. The key was implementing proper observability and automated deployment pipelines.'
    }
  },
  {
    id: 2,
    title: 'Secure Cloud-Native Applications with ASP.NET Core',
    excerpt: 'Comprehensive security framework for cloud applications covering authentication, authorization, and compliance requirements.',
    category: 'tutorials',
    tags: ['Security', 'ASP.NET Core', 'Azure AD', 'OAuth2', 'OWASP', 'Compliance'],
    isFeatured: true,
    color: 'green',
    publishDate: '2025-11-08',
    popularityFactor: 0.92,
    author: 'Sahadev Padavale',
    readTime: '20 min read',
    stats: { views: 2980, likes: 234, comments: 42 },
    content: {
      introduction: 'Security in cloud-native applications requires defense in depth strategy. This guide covers implementing enterprise-grade security for .NET applications on Azure...',
      sections: [
        { title: 'Authentication Strategy', type: 'architecture', content: 'Azure AD B2C integration with custom policies...' },
        { title: 'API Security', type: 'code', content: 'Implementing JWT validation and role-based access control...' },
        { title: 'Compliance Automation', type: 'devops', content: 'Automated security scanning and compliance reporting...' }
      ],
      conclusion: 'Security should be baked into the development lifecycle. Our approach reduced security incidents by 85% while maintaining developer productivity.'
    }
  },
  {
    id: 3,
    title: 'Real-Time Data Processing at Scale with Azure',
    excerpt: 'Processing 50K events per second using Azure Functions, Event Hubs, and Cosmos DB Change Feed for real-time analytics.',
    category: 'projects',
    tags: ['Azure Functions', 'Event Hubs', 'Real-time', 'Stream Processing', 'Cosmos DB', 'Scalability'],
    isFeatured: true,
    color: 'purple',
    publishDate: '2025-10-25',
    popularityFactor: 0.90,
    author: 'Sahadev Padavale',
    readTime: '18 min read',
    stats: { views: 2780, likes: 212, comments: 38 },
    content: {
      introduction: 'Real-time data processing is critical for modern applications. I\'ll walk through our implementation that handles peak loads of 50K events/second while maintaining sub-second latency...',
      sections: [
        { title: 'Architecture Design', type: 'design', content: 'Event-driven architecture with Azure Event Hubs and Functions...' },
        { title: 'Scaling Strategy', type: 'optimization', content: 'Auto-scaling configuration and partition management...' },
        { title: 'Monitoring & Alerting', type: 'operations', content: 'Implementing comprehensive observability with Application Insights...' }
      ],
      conclusion: 'The serverless approach reduced infrastructure costs by 60% while improving scalability. The key was proper partitioning and monitoring.'
    }
  },
  {
    id: 4,
    title: 'Domain-Driven Design in Enterprise .NET Applications',
    excerpt: 'Applying DDD principles to complex financial domains with bounded contexts, aggregates, and CQRS patterns.',
    category: 'tutorials',
    tags: ['DDD', 'Clean Architecture', 'CQRS', 'Event Sourcing', '.NET', 'Enterprise'],
    isFeatured: true,
    color: 'indigo',
    publishDate: '2025-10-18',
    popularityFactor: 0.88,
    author: 'Sahadev Padavale',
    readTime: '22 min read',
    stats: { views: 2560, likes: 198, comments: 45 },
    content: {
      introduction: 'Domain-Driven Design helps tackle complex business domains in enterprise applications. This article shares lessons from implementing DDD in a large banking system...',
      sections: [
        { title: 'Bounded Contexts', type: 'strategy', content: 'Identifying and modeling business subdomains...' },
        { title: 'Aggregate Design', type: 'patterns', content: 'Designing transactional boundaries and invariants...' },
        { title: 'Event Sourcing Implementation', type: 'advanced', content: 'Using event sourcing for audit trails and temporal queries...' }
      ],
      conclusion: 'DDD provided the structure needed to manage complexity as the system grew. The investment in proper modeling paid dividends in maintainability.'
    }
  },
  {
    id: 5,
    title: 'DevOps Excellence for .NET Teams',
    excerpt: 'Complete CI/CD pipeline with Azure DevOps, automated testing, and deployment strategies for enterprise teams.',
    category: 'tutorials',
    tags: ['DevOps', 'Azure DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Automation'],
    isFeatured: false,
    color: 'orange',
    publishDate: '2025-10-10',
    popularityFactor: 0.85,
    author: 'Sahadev Padavale',
    readTime: '16 min read',
    stats: { views: 2345, likes: 178, comments: 32 },
    content: {
      introduction: 'Effective DevOps practices transform development teams. This guide covers implementing enterprise-grade CI/CD pipelines for .NET applications...',
      sections: [
        { title: 'Pipeline Architecture', type: 'devops', content: 'Multi-stage pipelines with quality gates...' },
        { title: 'Infrastructure as Code', type: 'code', content: 'Terraform and Bicep for Azure resource provisioning...' },
        { title: 'Testing Strategy', type: 'testing', content: 'Automated testing at all levels with code coverage...' }
      ],
      conclusion: 'Our DevOps implementation reduced deployment time from days to minutes and increased deployment frequency by 500%.'
    }
  },
  {
    id: 6,
    title: 'Performance Optimization for High-Traffic APIs',
    excerpt: 'Techniques to reduce API response times from 500ms to 50ms for APIs handling millions of requests daily.',
    category: 'tutorials',
    tags: ['Performance', 'ASP.NET Core', 'Caching', 'Redis', 'Optimization', 'Scaling'],
    isFeatured: false,
    color: 'yellow',
    publishDate: '2025-10-03',
    popularityFactor: 0.83,
    author: 'Sahadev Padavale',
    readTime: '14 min read',
    stats: { views: 2180, likes: 165, comments: 28 },
    content: {
      introduction: 'Performance is critical for user experience. This article covers optimization strategies that improved our API performance by 10x...',
      sections: [
        { title: 'Caching Strategy', type: 'optimization', content: 'Multi-level caching with Redis and CDN...' },
        { title: 'Database Optimization', type: 'database', content: 'Query optimization, indexing, and connection pooling...' },
        { title: 'API Design Patterns', type: 'design', content: 'Implementing efficient API patterns and pagination...' }
      ],
      conclusion: 'The optimizations reduced infrastructure costs by 40% while improving user experience significantly.'
    }
  },
  {
    id: 7,
    title: 'Event-Driven Architecture with Azure Service Bus',
    excerpt: 'Building resilient event-driven systems using Azure Service Bus, message patterns, and saga orchestration.',
    category: 'tutorials',
    tags: ['Event-Driven', 'Azure Service Bus', 'Messaging', 'Saga Pattern', 'Resilience', 'Cloud'],
    isFeatured: true,
    color: 'teal',
    publishDate: '2025-09-26',
    popularityFactor: 0.87,
    author: 'Sahadev Padavale',
    readTime: '19 min read',
    stats: { views: 2450, likes: 189, comments: 35 },
    content: {
      introduction: 'Event-driven architecture enables building loosely coupled, scalable systems. This guide covers implementing EDA using Azure Service Bus...',
      sections: [
        { title: 'Message Patterns', type: 'patterns', content: 'Implementing publish-subscribe and competing consumers...' },
        { title: 'Saga Orchestration', type: 'advanced', content: 'Managing distributed transactions with saga pattern...' },
        { title: 'Dead Letter Handling', type: 'resilience', content: 'Implementing comprehensive error handling and retry logic...' }
      ],
      conclusion: 'Event-driven architecture improved our system\'s resilience and enabled independent scaling of services.'
    }
  },
  {
    id: 8,
    title: 'Container Security Best Practices',
    excerpt: 'Securing Docker containers and Kubernetes clusters in production environments with compliance requirements.',
    category: 'tutorials',
    tags: ['Docker', 'Kubernetes', 'Security', 'Container Security', 'DevSecOps', 'Compliance'],
    isFeatured: false,
    color: 'red',
    publishDate: '2025-09-19',
    popularityFactor: 0.80,
    author: 'Sahadev Padavale',
    readTime: '15 min read',
    stats: { views: 1980, likes: 145, comments: 24 },
    content: {
      introduction: 'Container security is multi-faceted. This article covers implementing security at every layer of the container lifecycle...',
      sections: [
        { title: 'Image Security', type: 'security', content: 'Vulnerability scanning and SBOM generation...' },
        { title: 'Runtime Security', type: 'runtime', content: 'Implementing security contexts and pod security policies...' },
        { title: 'Network Security', type: 'network', content: 'Network policies and service mesh security...' }
      ],
      conclusion: 'Our security practices helped achieve SOC 2 compliance and significantly reduced security vulnerabilities.'
    }
  },
  {
    id: 9,
    title: 'Building GraphQL APIs with Hot Chocolate',
    excerpt: 'Implementing performant GraphQL APIs using Hot Chocolate in .NET with advanced features like subscriptions and filtering.',
    category: 'tutorials',
    tags: ['GraphQL', 'Hot Chocolate', 'API Design', '.NET', 'Performance', 'Real-time'],
    isFeatured: false,
    color: 'pink',
    publishDate: '2025-09-12',
    popularityFactor: 0.78,
    author: 'Sahadev Padavale',
    readTime: '13 min read',
    stats: { views: 1760, likes: 123, comments: 21 },
    content: {
      introduction: 'GraphQL offers powerful capabilities for modern APIs. This guide covers implementing GraphQL in .NET using Hot Chocolate...',
      sections: [
        { title: 'Schema Design', type: 'design', content: 'Designing efficient GraphQL schemas for complex domains...' },
        { title: 'Performance Optimization', type: 'performance', content: 'Implementing DataLoader and query optimization...' },
        { title: 'Real-time Subscriptions', type: 'real-time', content: 'Adding real-time capabilities with GraphQL subscriptions...' }
      ],
      conclusion: 'GraphQL reduced our network payload by 70% and improved developer experience significantly.'
    }
  },
  {
    id: 10,
    title: 'Observability in Distributed Systems',
    excerpt: 'Implementing comprehensive observability with metrics, logs, traces, and alerts for microservices architectures.',
    category: 'tutorials',
    tags: ['Observability', 'Monitoring', 'Distributed Tracing', 'Azure Monitor', 'Log Analytics', 'Alerting'],
    isFeatured: true,
    color: 'cyan',
    publishDate: '2025-09-05',
    popularityFactor: 0.89,
    author: 'Sahadev Padavale',
    readTime: '17 min read',
    stats: { views: 2230, likes: 176, comments: 31 },
    content: {
      introduction: 'Observability is crucial for understanding and debugging distributed systems. This article covers implementing observability in Azure environments...',
      sections: [
        { title: 'Distributed Tracing', type: 'monitoring', content: 'Implementing OpenTelemetry and correlation IDs...' },
        { title: 'Metrics Collection', type: 'metrics', content: 'Custom metrics and dashboards with Azure Monitor...' },
        { title: 'Alerting Strategy', type: 'alerting', content: 'Smart alerting and incident management...' }
      ],
      conclusion: 'Comprehensive observability reduced MTTR by 75% and improved system reliability.'
    }
  },
  {
    id: 11,
    title: 'Database Design for Microservices',
    excerpt: 'Strategies for database design in microservices architecture including polyglot persistence and data consistency.',
    category: 'tutorials',
    tags: ['Database Design', 'Microservices', 'Data Consistency', 'Polyglot Persistence', 'SQL', 'NoSQL'],
    isFeatured: false,
    color: 'blue',
    publishDate: '2025-08-29',
    popularityFactor: 0.82,
    author: 'Sahadev Padavale',
    readTime: '20 min read',
    stats: { views: 1890, likes: 154, comments: 29 },
    content: {
      introduction: 'Database design is critical in microservices. This guide covers patterns for data management in distributed systems...',
      sections: [
        { title: 'Database Per Service', type: 'architecture', content: 'Implementing isolated data storage for services...' },
        { title: 'Data Consistency Patterns', type: 'consistency', content: 'Saga pattern and eventual consistency...' },
        { title: 'Polyglot Persistence', type: 'strategy', content: 'Choosing the right database for each service...' }
      ],
      conclusion: 'Proper database design enabled independent scaling and deployment of services.'
    }
  },
  {
    id: 12,
    title: 'API Gateway Patterns in .NET',
    excerpt: 'Implementing API Gateways with Ocelot and Azure API Management for microservices architectures.',
    category: 'tutorials',
    tags: ['API Gateway', 'Ocelot', 'Azure API Management', 'Microservices', 'Security', 'Routing'],
    isFeatured: false,
    color: 'green',
    publishDate: '2025-08-22',
    popularityFactor: 0.79,
    author: 'Sahadev Padavale',
    readTime: '14 min read',
    stats: { views: 1670, likes: 132, comments: 23 },
    content: {
      introduction: 'API Gateways provide a single entry point for client applications. This article covers implementation patterns and best practices...',
      sections: [
        { title: 'Gateway Architecture', type: 'architecture', content: 'Implementing edge services and backend for frontend...' },
        { title: 'Security Implementation', type: 'security', content: 'JWT validation and rate limiting at the gateway...' },
        { title: 'Performance Optimization', type: 'performance', content: 'Caching and response aggregation strategies...' }
      ],
      conclusion: 'The API Gateway improved security and reduced client-side complexity significantly.'
    }
  },
  {
    id: 13,
    title: 'Clean Architecture Implementation Guide',
    excerpt: 'Practical implementation of Clean Architecture in .NET with real-world examples and project structure.',
    category: 'tutorials',
    tags: ['Clean Architecture', '.NET', 'SOLID', 'Design Patterns', 'Dependency Injection', 'Testing'],
    isFeatured: true,
    color: 'indigo',
    publishDate: '2025-08-15',
    popularityFactor: 0.91,
    author: 'Sahadev Padavale',
    readTime: '22 min read',
    stats: { views: 2780, likes: 223, comments: 48 },
    content: {
      introduction: 'Clean Architecture promotes maintainability and testability. This guide covers practical implementation in .NET applications...',
      sections: [
        { title: 'Project Structure', type: 'structure', content: 'Organizing domain, application, and infrastructure layers...' },
        { title: 'Dependency Inversion', type: 'patterns', content: 'Implementing dependency injection and inversion of control...' },
        { title: 'Testing Strategy', type: 'testing', content: 'Unit, integration, and end-to-end testing patterns...' }
      ],
      conclusion: 'Clean Architecture improved our code maintainability and reduced bug rates by 60%.'
    }
  },
  {
    id: 14,
    title: 'Serverless Computing Patterns',
    excerpt: 'Architecting applications with Azure Functions, serverless databases, and event-driven patterns.',
    category: 'thoughts',
    tags: ['Serverless', 'Azure Functions', 'Event-Driven', 'Cost Optimization', 'Scalability', 'Cloud'],
    isFeatured: false,
    color: 'purple',
    publishDate: '2025-08-08',
    popularityFactor: 0.84,
    author: 'Sahadev Padavale',
    readTime: '16 min read',
    stats: { views: 1920, likes: 148, comments: 26 },
    content: {
      introduction: 'Serverless computing transforms application architecture. This article explores patterns and anti-patterns for serverless applications...',
      sections: [
        { title: 'Function Design', type: 'design', content: 'Designing stateless, single-purpose functions...' },
        { title: 'Orchestration Patterns', type: 'patterns', content: 'Implementing workflows with Durable Functions...' },
        { title: 'Cost Optimization', type: 'optimization', content: 'Monitoring and optimizing serverless costs...' }
      ],
      conclusion: 'Serverless architecture reduced our infrastructure management overhead by 80%.'
    }
  },
  {
    id: 15,
    title: 'Technical Leadership in Software Teams',
    excerpt: 'Strategies for technical leadership, mentoring developers, and driving technical excellence in teams.',
    category: 'thoughts',
    tags: ['Leadership', 'Mentoring', 'Technical Excellence', 'Team Building', 'Code Reviews', 'Architecture'],
    isFeatured: false,
    color: 'orange',
    publishDate: '2025-08-01',
    popularityFactor: 0.76,
    author: 'Sahadev Padavale',
    readTime: '18 min read',
    stats: { views: 1540, likes: 112, comments: 34 },
    content: {
      introduction: 'Technical leadership goes beyond coding. This article shares lessons from leading development teams and fostering technical excellence...',
      sections: [
        { title: 'Mentoring Strategies', type: 'leadership', content: 'Effective mentoring and knowledge sharing practices...' },
        { title: 'Code Review Culture', type: 'process', content: 'Establishing productive code review processes...' },
        { title: 'Architecture Decisions', type: 'architecture', content: 'Making and documenting architecture decisions...' }
      ],
      conclusion: 'Investing in technical leadership improved team productivity and reduced technical debt.'
    }
  }
];
    
    setPosts(initialPosts);
    setFilteredPosts(initialPosts);
  }, []);

  // Filter and sort posts whenever category, search, or sort changes
  useEffect(() => {
    let result = [...posts];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(post => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query)
      );
    }

    // Sort posts
    result = sortPosts(result, sortOption);

    setFilteredPosts(result);
  }, [posts, activeCategory, searchQuery, sortOption]);

  // Sorting function
  const sortPosts = (postsToSort, option) => {
    const sorted = [...postsToSort];
    
    switch(option) {
      case 'newest': // Newest First
        return sorted.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      
      case 'oldest': // Oldest First
        return sorted.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
      
      case 'title-asc': // Title A-Z
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      
      case 'title-desc': // Title Z-A
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      
      case 'most-viewed': // Most Viewed
        return sorted.sort((a, b) => b.stats.views - a.stats.views);
      
      case 'most-liked': // Most Liked
        return sorted.sort((a, b) => b.stats.likes - a.stats.likes);
      
      case 'popularity': // By Popularity Factor
        return sorted.sort((a, b) => b.popularityFactor - a.popularityFactor);
      
      default:
        return sorted;
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Blog Details Component (keep your existing BlogDetails component here)
  const BlogDetails = ({ post, onBack }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [views, setViews] = useState(post.stats.views);
  const [likes, setLikes] = useState(post.stats.likes);
  const comments= post.stats.comments;

  // Simulate real-time view increments
  useEffect(() => {
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get related posts
  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Get icon based on tag
  const getTagIcon = (tag) => {
    const icons = {
      'ASP.NET Core': Code,
      'JWT': Shield,
      'Security': Shield,
      'Clean Architecture': Rocket,
      'SOLID': Lightbulb,
      '.NET': Terminal,
      '.NET 8': Terminal,
      'Web API': Cloud,
      'API Development': Cloud,
      'Database': Database,
      'Performance': Zap,
      'Microservices': Cloud,
      'OAuth2': Shield,
      'API Security': Shield,
      'Azure Functions': Cloud,
      'Event Hubs': Database,
      'Real-time': Zap,
      'Cloud': Cloud,
      'Serverless': Cloud,
      'Kafka': Database,
      'CI/CD': Rocket,
      'Azure DevOps': Cloud,
      'Docker': Code,
      'Kubernetes': Cloud,
      'DevOps': Rocket,
      'Automation': Zap,
      'DDD': Database,
      'Domain-Driven Design': Database,
      'Banking': Shield,
      'FinTech': Shield,
      'Architecture': Rocket,
      'CQRS': Database,
      'Optimization': Zap,
      'Profiling': Terminal,
      'Caching': Database,
      'Resilience': Shield,
      'Polly': Shield,
      'Fault Tolerance': Shield,
      'Distributed Systems': Cloud,
      'OWASP': Shield,
      'Rate Limiting': Shield,
      'Encryption': Shield,
      'Event-Driven': Zap,
      'Stream Processing': Database,
      'Confluent': Cloud,
      'Messaging': Database,
      'Containers': Code,
      'GraphQL': Terminal,
      'REST': Cloud,
      'API Design': Cloud,
      'Comparison': Lightbulb,
      'Feature Flags': Zap,
      'LaunchDarkly': Rocket,
      'Canary Releases': Rocket,
      'A/B Testing': TrendingUp,
      'Redis': Database,
      'High Availability': Shield,
      'Swagger': Code,
      'OpenAPI': Code,
      'Swashbuckle': Code,
      'Developer Experience': User,
      'Design Patterns': Lightbulb,
      'Enterprise': Users
    };
    return icons[tag] || Tag;
  };

// Get dynamic content based on post ID
const getDynamicContent = () => {
  const contentMap = {
    1: {
      introduction: `Building enterprise-grade microservices requires careful consideration of scalability, resilience, and maintainability. In this article, I'll share my experience architecting a financial services platform on Azure that serves 10M+ users. We'll explore how we leveraged Azure Kubernetes Service, Service Mesh, and modern cloud patterns to achieve 99.99% uptime while maintaining rapid feature delivery.`,
      problem: [
        'Complex service discovery and communication in distributed systems',
        'Difficulty in maintaining data consistency across microservices',
        'Challenges in monitoring and debugging across service boundaries',
        'Security vulnerabilities in service-to-service communication',
        'Resource contention and performance bottlenecks in containerized environments'
      ],
      implementation: `// Service Mesh Configuration with Istio
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: payment-service
spec:
  hosts:
  - payment-service
  http:
  - route:
    - destination:
        host: payment-service
        subset: v1
      weight: 90
    - destination:
        host: payment-service
        subset: v2
      weight: 10

// Circuit Breaker Pattern Implementation
public class PaymentServiceClient
{
    private readonly IAsyncPolicy<HttpResponseMessage> _resiliencePolicy;
    
    public PaymentServiceClient()
    {
        _resiliencePolicy = Policy
            .Handle<HttpRequestException>()
            .OrResult<HttpResponseMessage>(r => !r.IsSuccessStatusCode)
            .CircuitBreakerAsync(
                handledEventsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30)
            );
    }
    
    public async Task<PaymentResult> ProcessPaymentAsync(PaymentRequest request)
    {
        return await _resiliencePolicy.ExecuteAsync(async () =>
        {
            var response = await _httpClient.PostAsJsonAsync("/api/payments", request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<PaymentResult>();
        });
    }
}`,
      bestPractices: [
        'Implement service mesh for traffic management and security',
        'Use database per service pattern for data isolation',
        'Implement comprehensive distributed tracing with OpenTelemetry',
        'Use event-driven architecture for loose coupling',
        'Implement health checks and readiness probes',
        'Use API Gateway for external communication'
      ],
      conclusion: `Enterprise microservices architecture on Azure has transformed our financial platform's scalability and resilience. By leveraging AKS, Service Mesh, and proper architectural patterns, we achieved unprecedented performance. The key to success was investing in proper observability, automated deployments, and a strong DevOps culture that prioritized operational excellence alongside feature development.`
    },
    2: {
      introduction: `Security in cloud-native applications requires a defense-in-depth strategy that spans multiple layers. This comprehensive guide covers implementing enterprise-grade security for .NET applications on Azure, from authentication and authorization to compliance automation. Based on our experience securing financial applications, we'll explore practical implementations that reduced security incidents by 85%.`,
      problem: [
        'Insufficient authentication and authorization mechanisms',
        'Lack of proper encryption for data at rest and in transit',
        'Difficulty in maintaining compliance across cloud resources',
        'Vulnerabilities in API endpoints and microservices communication',
        'Inadequate audit logging and monitoring for security events'
      ],
      implementation: `// Azure AD B2C Integration with Custom Policies
public static class AuthenticationConfig
{
    public static void ConfigureAuthentication(IServiceCollection services, IConfiguration configuration)
    {
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddMicrosoftIdentityWebApi(options =>
            {
                configuration.Bind("AzureAdB2C", options);
                
                options.Events = new JwtBearerEvents
                {
                    OnAuthenticationFailed = context =>
                    {
                        LogSecurityEvent(context.Exception);
                        return Task.CompletedTask;
                    },
                    OnTokenValidated = context =>
                    {
                        var claimsIdentity = context.Principal.Identity as ClaimsIdentity;
                        claimsIdentity.AddClaim(new Claim("CustomClaim", "Value"));
                        return Task.CompletedTask;
                    }
                };
            }, options => configuration.Bind("AzureAdB2C", options));
    }
}

// Rate Limiting Implementation
[AttributeUsage(AttributeTargets.Method)]
public class RateLimitAttribute : ActionFilterAttribute
{
    private readonly int _limit;
    private readonly TimeSpan _period;
    
    public RateLimitAttribute(int limit, int seconds)
    {
        _limit = limit;
        _period = TimeSpan.FromSeconds(seconds);
    }
    
    public override async Task OnActionExecutionAsync(
        ActionExecutingContext context, 
        ActionExecutionDelegate next)
    {
        var cache = context.HttpContext.RequestServices.GetService<IDistributedCache>();
        var key = $"{context.HttpContext.Connection.RemoteIpAddress}:{context.ActionDescriptor.Id}";
        
        var currentCount = await cache.GetStringAsync(key);
        var count = currentCount == null ? 0 : int.Parse(currentCount);
        
        if (count >= _limit)
        {
            context.Result = new StatusCodeResult(429);
            return;
        }
        
        await cache.SetStringAsync(key, (count + 1).ToString(), new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = _period
        });
        
        await next();
    }
}`,
      bestPractices: [
        'Implement multi-factor authentication for sensitive operations',
        'Use Azure Key Vault for secret management and rotation',
        'Implement proper CORS policies and content security headers',
        'Regular security scanning and penetration testing',
        'Implement audit logging for all security events',
        'Use managed identities for Azure resources'
      ],
      conclusion: `Security is not a one-time implementation but an ongoing process. Our comprehensive security framework significantly reduced vulnerabilities while maintaining developer productivity. The key was automating security checks, implementing proper monitoring, and fostering a security-first culture across the entire development lifecycle.`
    },
    3: {
      introduction: `Real-time data processing is critical for modern applications that require immediate insights. In this article, I'll walk through our implementation that handles peak loads of 50K events/second while maintaining sub-second latency using Azure's serverless offerings. We'll explore the architecture, scaling strategies, and cost optimization techniques we employed.`,
      problem: [
        'High latency in traditional batch processing systems',
        'Difficulty in scaling to handle unpredictable event spikes',
        'Complex error handling and data consistency in stream processing',
        'High infrastructure costs for real-time processing',
        'Challenges in monitoring and debugging distributed stream processing'
      ],
      implementation: `// Azure Functions Event Hub Trigger with Cosmos DB Output
[FunctionName("ProcessRealTimeEvents")]
public static async Task Run(
    [EventHubTrigger("event-hub-name", Connection = "EventHubConnectionString")] EventData[] events,
    [CosmosDB(
        databaseName: "AnalyticsDB",
        collectionName: "ProcessedEvents",
        ConnectionStringSetting = "CosmosDBConnectionString")] IAsyncCollector<ProcessedEvent> processedEvents,
    ILogger log)
{
    foreach (EventData eventData in events)
    {
        try
        {
            var rawEvent = JsonConvert.DeserializeObject<RawEvent>(
                Encoding.UTF8.GetString(eventData.Body));
            
            var processedEvent = await ProcessEventAsync(rawEvent);
            
            await processedEvents.AddAsync(processedEvent);
            
            log.LogInformation($"Processed event: {processedEvent.Id}");
        }
        catch (Exception ex)
        {
            log.LogError(ex, "Error processing event");
            await SendToDeadLetterQueue(eventData, ex);
        }
    }
}

// Change Feed Processor for Cosmos DB
private static ChangeFeedProcessor changeFeedProcessor;

public static async Task StartChangeFeedProcessor()
{
    var container = cosmosClient.GetContainer("AnalyticsDB", "ProcessedEvents");
    var leaseContainer = cosmosClient.GetContainer("AnalyticsDB", "Leases");
    
    changeFeedProcessor = container
        .GetChangeFeedProcessorBuilder<ProcessedEvent>("realTimeAnalytics", HandleChangesAsync)
        .WithInstanceName("instance1")
        .WithLeaseContainer(leaseContainer)
        .WithStartTime(DateTime.MinValue.ToUniversalTime())
        .Build();
    
    await changeFeedProcessor.StartAsync();
}

private static async Task HandleChangesAsync(
    IReadOnlyCollection<ProcessedEvent> changes, 
    CancellationToken cancellationToken)
{
    foreach (var change in changes)
    {
        await PerformRealTimeAnalysis(change);
    }
}`,
      bestPractices: [
        'Use Event Hubs for high-throughput event ingestion',
        'Implement proper partitioning strategy for parallel processing',
        'Use Cosmos DB Change Feed for real-time data propagation',
        'Implement dead letter queues for error handling',
        'Use Application Insights for comprehensive monitoring',
        'Implement auto-scaling based on event throughput'
      ],
      conclusion: `Serverless real-time processing on Azure transformed our data pipeline capabilities. By leveraging Azure Functions, Event Hubs, and Cosmos DB, we achieved sub-second processing at scale while reducing infrastructure costs by 60%. The key was proper partitioning, comprehensive monitoring, and embracing serverless patterns for optimal resource utilization.`
    },
    4: {
      introduction: `Domain-Driven Design provides powerful patterns for managing complexity in enterprise applications. In this article, I'll share my experience applying DDD principles to a large banking system, exploring how bounded contexts, aggregates, and CQRS patterns helped us manage intricate business logic while maintaining system flexibility.`,
      problem: [
        'Complex business rules scattered across the codebase',
        'Difficulty in understanding and modeling business domains',
        'Tight coupling between business logic and infrastructure concerns',
        'Challenges in evolving the domain model as business requirements change',
        'Inefficient data access patterns in complex business workflows'
      ],
      implementation: `// Aggregate Root Implementation
public class Account : AggregateRoot
{
    public AccountId Id { get; private set; }
    public CustomerId CustomerId { get; private set; }
    public Money Balance { get; private set; }
    private List<Transaction> _transactions = new();
    public IReadOnlyList<Transaction> Transactions => _transactions.AsReadOnly();
    
    public Account(CustomerId customerId, Money initialBalance)
    {
        Id = AccountId.New();
        CustomerId = customerId;
        Balance = initialBalance;
        
        AddDomainEvent(new AccountCreated(Id, CustomerId, initialBalance));
    }
    
    public Result<Transaction> Withdraw(Money amount)
    {
        if (Balance < amount)
            return Result.Failure<Transaction>("Insufficient funds");
        
        Balance -= amount;
        var transaction = new Transaction(Id, TransactionType.Withdrawal, amount, DateTime.UtcNow);
        _transactions.Add(transaction);
        
        AddDomainEvent(new WithdrawalMade(Id, amount, Balance));
        return Result.Success(transaction);
    }
}

// CQRS Implementation
public class GetAccountBalanceQuery : IQuery<AccountBalanceDto>
{
    public AccountId AccountId { get; set; }
}

public class GetAccountBalanceQueryHandler : IQueryHandler<GetAccountBalanceQuery, AccountBalanceDto>
{
    private readonly IAccountRepository _accountRepository;
    
    public async Task<AccountBalanceDto> Handle(
        GetAccountBalanceQuery query, 
        CancellationToken cancellationToken)
    {
        var account = await _accountRepository.GetByIdAsync(query.AccountId);
        
        return new AccountBalanceDto
        {
            AccountId = account.Id.Value,
            Balance = account.Balance.Amount,
            Currency = account.Balance.Currency,
            LastUpdated = account.UpdatedAt
        };
    }
}

// Domain Event Handler
public class AccountCreatedHandler : INotificationHandler<AccountCreated>
{
    private readonly IEmailService _emailService;
    
    public async Task Handle(AccountCreated notification, CancellationToken cancellationToken)
    {
        await _emailService.SendWelcomeEmail(notification.CustomerId);
    }
}`,
      bestPractices: [
        'Define clear bounded contexts based on business subdomains',
        'Use value objects for domain concepts like Money, Email, etc.',
        'Implement aggregates with clear transactional boundaries',
        'Use domain events for cross-context communication',
        'Implement CQRS for complex query requirements',
        'Use specification pattern for complex business rules'
      ],
      conclusion: `DDD provided the structure and discipline needed to manage complexity as our banking system grew. While the initial investment in modeling was significant, it paid tremendous dividends in maintainability and adaptability. The key was staying true to the business domain and constantly refining our understanding through collaboration with domain experts.`
    },
    5: {
      introduction: `Effective DevOps practices transform development teams from feature factories to value delivery engines. This guide covers implementing enterprise-grade CI/CD pipelines for .NET applications, sharing our journey that reduced deployment time from days to minutes and increased deployment frequency by 500%.`,
      problem: [
        'Manual deployment processes causing deployment delays',
        'Inconsistent environments between development and production',
        'Lack of automated testing and quality gates',
        'Difficulty in rolling back failed deployments',
        'Complex configuration management across environments'
      ],
      implementation: `// Azure DevOps Pipeline Configuration
trigger:
  branches:
    include:
    - main
    - develop
  paths:
    exclude:
    - README.md

variables:
  - group: 'Production-Settings'
  - name: buildConfiguration
    value: 'Release'
  - name: dockerRegistry
    value: 'acrregistry.azurecr.io'

stages:
- stage: Build
  jobs:
  - job: BuildAndTest
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: DotNetCoreCLI@2
      displayName: 'Restore packages'
      inputs:
        command: 'restore'
        projects: '**/*.csproj'
    
    - task: DotNetCoreCLI@2
      displayName: 'Build solution'
      inputs:
        command: 'build'
        projects: '**/*.csproj'
        arguments: '--configuration $(buildConfiguration)'
    
    - task: DotNetCoreCLI@2
      displayName: 'Run unit tests'
      inputs:
        command: 'test'
        projects: '**/*Tests.csproj'
        arguments: '--configuration $(buildConfiguration) --collect:"XPlat Code Coverage"'
    
    - task: SonarQubePrepare@5
      displayName: 'Prepare SonarQube analysis'
      inputs:
        SonarQube: 'SonarQube'
        scannerMode: 'MSBuild'
        projectKey: 'EnterpriseApp'
        projectName: 'Enterprise Application'
    
    - task: Docker@2
      displayName: 'Build Docker image'
      inputs:
        command: 'build'
        Dockerfile: '**/Dockerfile'
        tags: |
          $(Build.BuildId)
          latest

- stage: DeployToStaging
  dependsOn: Build
  condition: succeeded()
  jobs:
  - deployment: Deploy
    environment: 'Staging'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: KubernetesManifest@0
            displayName: 'Deploy to Kubernetes'
            inputs:
              action: 'deploy'
              kubernetesServiceConnection: 'aks-connection'
              namespace: 'staging'
              manifests: 'deployment.yaml'
              
          - task: AzureWebAppContainer@1
            displayName: 'Deploy to App Service'
            inputs:
              azureSubscription: 'AzureSubscription'
              appName: 'staging-app'
              containers: '$(dockerRegistry)/app:$(Build.BuildId)'`,
      bestPractices: [
        'Implement infrastructure as code using Terraform or Bicep',
        'Use environment-specific configuration management',
        'Implement comprehensive automated testing at all levels',
        'Use canary deployments for risk mitigation',
        'Implement proper monitoring and alerting for deployments',
        'Use feature flags for safe feature rollouts'
      ],
      conclusion: `Our DevOps transformation empowered teams to deliver value faster with greater confidence. By automating repetitive tasks, implementing quality gates, and fostering a culture of shared responsibility, we achieved unprecedented deployment velocity while maintaining stability. The key was viewing DevOps not as a set of tools, but as a cultural shift towards continuous improvement.`
    },
    6: {
      introduction: `Performance is critical for user experience and business success. In this article, I'll share techniques that improved our API response times from 500ms to 50ms for APIs handling millions of requests daily. We'll explore caching strategies, database optimization, and API design patterns that made this transformation possible.`,
      problem: [
        'Slow database queries causing API latency',
        'Inefficient data serialization and deserialization',
        'Lack of caching strategies for frequently accessed data',
        'Poorly designed API endpoints with N+1 query problems',
        'Inefficient connection pooling and resource management'
      ],
      implementation: `// Multi-level Caching Implementation
public class CachedUserService : IUserService
{
    private readonly IUserService _userService;
    private readonly IMemoryCache _memoryCache;
    private readonly IDistributedCache _distributedCache;
    
    public async Task<UserDto> GetUserByIdAsync(int userId)
    {
        var cacheKey = $"user:{userId}";
        
        // Check memory cache first
        if (_memoryCache.TryGetValue(cacheKey, out UserDto cachedUser))
            return cachedUser;
        
        // Check distributed cache
        var serializedUser = await _distributedCache.GetStringAsync(cacheKey);
        if (serializedUser != null)
        {
            var user = JsonSerializer.Deserialize<UserDto>(serializedUser);
            _memoryCache.Set(cacheKey, user, TimeSpan.FromMinutes(5));
            return user;
        }
        
        // Get from database
        var user = await _userService.GetUserByIdAsync(userId);
        
        // Cache in both layers
        _memoryCache.Set(cacheKey, user, TimeSpan.FromMinutes(5));
        await _distributedCache.SetStringAsync(
            cacheKey, 
            JsonSerializer.Serialize(user), 
            new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
            });
        
        return user;
    }
}

// Database Query Optimization
public async Task<List<OrderDto>> GetRecentOrdersAsync(int userId, int pageSize)
{
    // Use compiled query for performance
    var query = EF.CompileAsyncQuery(
        (ApplicationDbContext context, int id, int size) =>
            context.Orders
                .Where(o => o.UserId == id)
                .OrderByDescending(o => o.CreatedAt)
                .Take(size)
                .Select(o => new OrderDto
                {
                    Id = o.Id,
                    Total = o.Total,
                    CreatedAt = o.CreatedAt,
                    Items = o.Items.Select(i => new OrderItemDto
                    {
                        ProductId = i.ProductId,
                        Quantity = i.Quantity,
                        Price = i.Price
                    }).ToList()
                })
                .ToList());
    
    return await query(_context, userId, pageSize);
}`,
      bestPractices: [
        'Implement multi-level caching (memory + distributed)',
        'Use database indexing strategically for query performance',
        'Implement connection pooling and proper resource disposal',
        'Use pagination for large data sets',
        'Implement response compression for large payloads',
        'Use CDN for static assets and API responses'
      ],
      conclusion: `Performance optimization is an ongoing journey that requires continuous monitoring and improvement. Our comprehensive approach to caching, database optimization, and API design reduced infrastructure costs by 40% while dramatically improving user experience. The key was measuring everything, identifying bottlenecks systematically, and implementing targeted optimizations based on data.`
    },
    7: {
      introduction: `Event-Driven Architecture enables building loosely coupled, scalable systems that can evolve independently. In this guide, I'll share our experience implementing EDA using Azure Service Bus, covering message patterns, saga orchestration, and resilience strategies that improved our system's reliability.`,
      problem: [
        'Tight coupling between services causing deployment bottlenecks',
        'Complex error handling in distributed transactions',
        'Difficulty in maintaining message ordering and consistency',
        'Challenges in scaling individual components independently',
        'Lack of visibility into message flows and system state'
      ],
      implementation: `// Saga Pattern Implementation
public class OrderSaga : Saga<OrderSagaData>,
    IAmStartedByMessages<PlaceOrder>,
    IHandleMessages<PaymentProcessed>,
    IHandleMessages<PaymentFailed>,
    IHandleMessages<InventoryReserved>,
    IHandleMessages<InventoryReservationFailed>
{
    private readonly IMessageSession _messageSession;
    
    public async Task Handle(PlaceOrder message, IMessageHandlerContext context)
    {
        Data.OrderId = message.OrderId;
        Data.CustomerId = message.CustomerId;
        
        // Start parallel operations
        await context.Send(new ProcessPayment { OrderId = message.OrderId, Amount = message.Total });
        await context.Send(new ReserveInventory { OrderId = message.OrderId, Items = message.Items });
    }
    
    public async Task Handle(PaymentProcessed message, IMessageHandlerContext context)
    {
        Data.PaymentProcessed = true;
        await CheckSagaCompletion(context);
    }
    
    public async Task Handle(PaymentFailed message, IMessageHandlerContext context)
    {
        // Compensating action
        await context.Send(new CancelOrder { OrderId = Data.OrderId, Reason = "Payment failed" });
        MarkAsComplete();
    }
    
    public async Task Handle(InventoryReserved message, IMessageHandlerContext context)
    {
        Data.InventoryReserved = true;
        await CheckSagaCompletion(context);
    }
    
    private async Task CheckSagaCompletion(IMessageHandlerContext context)
    {
        if (Data.PaymentProcessed && Data.InventoryReserved)
        {
            await context.Send(new CompleteOrder { OrderId = Data.OrderId });
            MarkAsComplete();
        }
    }
}

// Dead Letter Queue Handling
public class DeadLetterQueueProcessor
{
    public async Task ProcessDeadLetterMessagesAsync()
    {
        var deadLetterQueueClient = new ServiceBusClient(connectionString)
            .CreateReceiver("queueName", new ServiceBusReceiverOptions
            {
                SubQueue = SubQueue.DeadLetter
            });
        
        var messages = await deadLetterQueueClient.ReceiveMessagesAsync(10);
        
        foreach (var message in messages)
        {
            var deadLetterReason = message.DeadLetterReason;
            var deadLetterErrorDescription = message.DeadLetterErrorDescription;
            
            // Log and analyze the failure
            LogDeadLetterMessage(message, deadLetterReason, deadLetterErrorDescription);
            
            // Implement retry or manual intervention logic
            await HandleDeadLetterMessage(message);
            
            await deadLetterQueueClient.CompleteMessageAsync(message);
        }
    }
}`,
      bestPractices: [
        'Use publish-subscribe pattern for event broadcasting',
        'Implement saga pattern for distributed transactions',
        'Use dead letter queues for error handling and analysis',
        'Implement message idempotency to handle duplicate messages',
        'Use correlation IDs for tracing message flows',
        'Implement circuit breakers for message processing'
      ],
      conclusion: `Event-Driven Architecture transformed our system's resilience and scalability. By embracing asynchronous communication and implementing proper patterns for distributed transactions, we achieved loose coupling that enabled independent service evolution. The key was investing in proper monitoring, comprehensive error handling, and embracing eventual consistency where appropriate.`
    },
    8: {
      introduction: `Container security is a multi-faceted challenge that spans the entire container lifecycle. In this article, I'll share our comprehensive approach to securing Docker containers and Kubernetes clusters in production environments, covering everything from image creation to runtime security.`,
      problem: [
        'Vulnerabilities in base images and dependencies',
        'Insufficient isolation between containers',
        'Lack of proper secret management',
        'Inadequate network security policies',
        'Difficulty in maintaining compliance across containerized workloads'
      ],
      implementation: `// Multi-stage Dockerfile with security best practices
# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY ["src/App/App.csproj", "src/App/"]
RUN dotnet restore "src/App/App.csproj"

# Copy everything else and build
COPY . .
WORKDIR "/src/src/App"
RUN dotnet build "App.csproj" -c Release -o /app/build

# Run security scanner
FROM aquasec/trivy:latest AS security
COPY --from=build /app/build /app
RUN trivy filesystem --exit-code 1 --severity HIGH,CRITICAL /app

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Create non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser
USER appuser

# Copy from build stage
COPY --from=build --chown=appuser:appgroup /app/build .

ENTRYPOINT ["dotnet", "App.dll"]

// Kubernetes Security Context Configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-app
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        runAsGroup: 3000
        fsGroup: 2000
      containers:
      - name: app
        image: myregistry.azurecr.io/app:latest
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            drop:
            - ALL
          readOnlyRootFilesystem: true
          privileged: false
        env:
        - name: ASPNETCORE_ENVIRONMENT
          value: "Production"
        volumeMounts:
        - name: secrets-store
          mountPath: "/mnt/secrets-store"
          readOnly: true
      volumes:
      - name: secrets-store
        csi:
          driver: secrets-store.csi.k8s.io
          readOnly: true
          volumeAttributes:
            secretProviderClass: "azure-keyvault"`,
      bestPractices: [
        'Use minimal base images and multi-stage builds',
        'Implement non-root user execution',
        'Use read-only root filesystem where possible',
        'Implement network policies for pod communication',
        'Use secrets management solutions (Azure Key Vault, etc.)',
        'Regular vulnerability scanning and patching'
      ],
      conclusion: `Container security requires a defense-in-depth approach that spans the entire lifecycle. Our comprehensive security practices helped achieve SOC 2 compliance while significantly reducing vulnerabilities. The key was automating security checks, implementing least-privilege principles, and fostering a security-conscious culture throughout the development and operations teams.`
    },
    9: {
      introduction: `GraphQL offers powerful capabilities for modern APIs, enabling clients to request exactly what they need. In this guide, I'll share our experience implementing GraphQL in .NET using Hot Chocolate, covering schema design, performance optimization, and real-time features that transformed our API capabilities.`,
      problem: [
        'Over-fetching and under-fetching data in REST APIs',
        'Multiple round trips to fetch related data',
        'Difficulty in evolving APIs without breaking changes',
        'Complexity in documenting and consuming REST APIs',
        'Lack of real-time capabilities in traditional REST'
      ],
      implementation: `// GraphQL Schema Definition with Hot Chocolate
public class Query
{
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public IQueryable<User> GetUsers([Service] ApplicationDbContext context)
        => context.Users;
    
    public async Task<User?> GetUserById(
        int id,
        [Service] IUserService userService)
        => await userService.GetUserByIdAsync(id);
}

public class UserType : ObjectType<User>
{
    protected override void Configure(IObjectTypeDescriptor<User> descriptor)
    {
        descriptor.Description("Represents a user in the system");
        
        descriptor
            .Field(u => u.Orders)
            .ResolveWith<Resolvers>(r => r.GetOrders(default!, default!))
            .UsePaging()
            .UseFiltering()
            .UseSorting()
            .Description("The orders placed by this user");
    }
    
    private class Resolvers
    {
        public IQueryable<Order> GetOrders(
            [Parent] User user,
            [Service] ApplicationDbContext context)
            => context.Orders.Where(o => o.UserId == user.Id);
    }
}

// DataLoader Implementation for N+1 Problem
public class UserDataLoader : BatchDataLoader<int, User>
{
    private readonly IUserRepository _repository;
    
    public UserDataLoader(
        IUserRepository repository,
        IBatchScheduler scheduler,
        DataLoaderOptions? options = null)
        : base(scheduler, options)
    {
        _repository = repository;
    }
    
    protected override async Task<IReadOnlyDictionary<int, User>> LoadBatchAsync(
        IReadOnlyList<int> keys,
        CancellationToken cancellationToken)
    {
        var users = await _repository.GetUsersByIdsAsync(keys);
        return users.ToDictionary(u => u.Id);
    }
}

// GraphQL Subscription for Real-time Updates
public class Subscription
{
    [Subscribe]
    [Topic]
    public Order OnOrderCreated([EventMessage] Order order) => order;
}

public class Mutation
{
    public async Task<Order> CreateOrder(
        CreateOrderInput input,
        [Service] IOrderService orderService,
        [Service] ITopicEventSender eventSender)
    {
        var order = await orderService.CreateOrderAsync(input);
        
        await eventSender.SendAsync(nameof(Subscription.OnOrderCreated), order);
        
        return order;
    }
}`,
      bestPractices: [
        'Use DataLoader to solve N+1 query problems',
        'Implement proper pagination for large data sets',
        'Use projections to optimize database queries',
        'Implement rate limiting and query depth restrictions',
        'Use persisted queries for performance and security',
        'Implement comprehensive error handling and validation'
      ],
      conclusion: `GraphQL transformed our API capabilities, reducing network payload by 70% and significantly improving developer experience. While the learning curve was steep, the benefits in terms of flexibility, performance, and developer productivity made it a worthwhile investment. The key was proper schema design, performance optimization, and embracing GraphQL's powerful features like subscriptions and DataLoader.`
    },
    10: {
      introduction: `Observability is crucial for understanding and debugging distributed systems in production. In this article, I'll share our implementation of comprehensive observability in Azure environments, covering metrics, logs, traces, and alerts that reduced MTTR by 75% and improved system reliability.`,
      problem: [
        'Difficulty in debugging distributed transactions',
        'Lack of correlation between logs, metrics, and traces',
        'Insufficient monitoring for performance bottlenecks',
        'Complexity in setting up meaningful alerts',
        'Difficulty in understanding system behavior under load'
      ],
      implementation: `// OpenTelemetry Configuration
public static class OpenTelemetryConfiguration
{
    public static void AddOpenTelemetry(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddOpenTelemetry()
            .WithTracing(tracerProviderBuilder =>
            {
                tracerProviderBuilder
                    .AddSource("EnterpriseApp")
                    .AddAspNetCoreInstrumentation(options =>
                    {
                        options.RecordException = true;
                        options.EnrichWithHttpRequest = (activity, request) =>
                        {
                            activity.SetTag("http.client_ip", request.HttpContext.Connection.RemoteIpAddress);
                        };
                    })
                    .AddHttpClientInstrumentation()
                    .AddEntityFrameworkCoreInstrumentation()
                    .AddAzureServiceBusInstrumentation()
                    .AddConsoleExporter()
                    .AddAzureMonitorExporter(options =>
                    {
                        options.ConnectionString = configuration["ApplicationInsights:ConnectionString"];
                    });
            })
            .WithMetrics(metricsProviderBuilder =>
            {
                metricsProviderBuilder
                    .AddMeter("EnterpriseApp.Metrics")
                    .AddAspNetCoreInstrumentation()
                    .AddHttpClientInstrumentation()
                    .AddConsoleExporter()
                    .AddAzureMonitorExporter();
            });
    }
}

// Custom Metrics Collection
public class OrderMetrics
{
    private readonly Counter<int> _ordersCreated;
    private readonly Histogram<double> _orderProcessingTime;
    private readonly ObservableGauge<int> _activeOrders;
    
    public OrderMetrics(IMeterFactory meterFactory)
    {
        var meter = meterFactory.Create("EnterpriseApp.Metrics");
        
        _ordersCreated = meter.CreateCounter<int>(
            "orders.created",
            unit: "{order}",
            description: "Number of orders created");
        
        _orderProcessingTime = meter.CreateHistogram<double>(
            "order.processing.time",
            unit: "ms",
            description: "Time taken to process orders");
        
        _activeOrders = meter.CreateObservableGauge<int>(
            "orders.active",
            () => GetActiveOrderCount(),
            unit: "{order}",
            description: "Number of active orders");
    }
    
    public void RecordOrderCreated()
    {
        _ordersCreated.Add(1, new("status", "success"));
    }
    
    public void RecordOrderProcessingTime(double milliseconds)
    {
        _orderProcessingTime.Record(milliseconds);
    }
    
    private Measurement<int> GetActiveOrderCount()
    {
        // Query database for active orders
        var count = GetActiveOrdersFromDatabase();
        return new(count, new("source", "database"));
    }
}

// Structured Logging with Serilog
public static class LoggerConfiguration
{
    public static ILogger CreateLogger()
    {
        return new LoggerConfiguration()
            .MinimumLevel.Information()
            .Enrich.WithProperty("Application", "EnterpriseApp")
            .Enrich.FromLogContext()
            .WriteTo.Console(outputTemplate: 
                "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
            .WriteTo.ApplicationInsights(
                TelemetryConfiguration.Active, 
                TelemetryConverter.Traces)
            .CreateLogger();
    }
}`,
      bestPractices: [
        'Implement distributed tracing with correlation IDs',
        'Use structured logging for better queryability',
        'Define meaningful metrics aligned with business goals',
        'Implement smart alerting based on anomaly detection',
        'Use log aggregation and analysis tools',
        'Regularly review and refine observability strategy'
      ],
      conclusion: `Comprehensive observability transformed our ability to understand and improve our systems. By implementing distributed tracing, structured logging, and meaningful metrics, we reduced mean time to resolution by 75% and gained unprecedented insight into system behavior. The key was treating observability as a first-class concern and investing in the right tools and practices from the start.`
    },
    11: {
      introduction: `Database design is a critical aspect of microservices architecture that significantly impacts system scalability and maintainability. In this article, I'll share strategies for database design in distributed systems, covering patterns for data management, consistency, and performance optimization.`,
      problem: [
        'Shared database anti-pattern causing coupling between services',
        'Difficulty in maintaining data consistency across services',
        'Complexity in implementing distributed transactions',
        'Challenges in data partitioning and sharding',
        'Difficulty in evolving database schemas independently'
      ],
      implementation: `// Database Per Service Pattern
public class OrderServiceDbContext : DbContext
{
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            Configuration.GetConnectionString("OrderServiceDb"),
            options => options.EnableRetryOnFailure());
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Id).ValueGeneratedNever(); // Use GUIDs
            entity.HasIndex(e => e.CustomerId);
            entity.HasIndex(e => e.CreatedAt);
            entity.Property(e => e.Status).HasConversion<string>();
            
            entity.OwnsOne(e => e.ShippingAddress, sa =>
            {
                sa.Property(p => p.Street).HasColumnName("ShippingStreet");
                sa.Property(p => p.City).HasColumnName("ShippingCity");
                sa.Property(p => p.ZipCode).HasColumnName("ShippingZipCode");
            });
        });
    }
}

// Saga Pattern for Distributed Transactions
public class CreateOrderSaga
{
    private readonly IPaymentService _paymentService;
    private readonly IInventoryService _inventoryService;
    private readonly IOrderRepository _orderRepository;
    
    public async Task<OrderResult> ExecuteAsync(CreateOrderCommand command)
    {
        // Step 1: Create order in pending state
        var order = new Order
        {
            Id = Guid.NewGuid(),
            CustomerId = command.CustomerId,
            Items = command.Items,
            Status = OrderStatus.Pending
        };
        await _orderRepository.AddAsync(order);
        
        try
        {
            // Step 2: Process payment
            var paymentResult = await _paymentService.ProcessPaymentAsync(
                new ProcessPaymentRequest
                {
                    OrderId = order.Id,
                    Amount = order.Total,
                    CustomerId = command.CustomerId
                });
            
            if (!paymentResult.Success)
                throw new PaymentFailedException(paymentResult.Error);
            
            // Step 3: Reserve inventory
            var inventoryResult = await _inventoryService.ReserveInventoryAsync(
                new ReserveInventoryRequest
                {
                    OrderId = order.Id,
                    Items = command.Items
                });
            
            if (!inventoryResult.Success)
            {
                // Compensating transaction: refund payment
                await _paymentService.RefundPaymentAsync(order.Id);
                throw new InventoryReservationFailedException(inventoryResult.Error);
            }
            
            // Step 4: Complete order
            order.Status = OrderStatus.Completed;
            await _orderRepository.UpdateAsync(order);
            
            return new OrderResult { Success = true, OrderId = order.Id };
        }
        catch (Exception ex)
        {
            // Saga failure - mark order as failed
            order.Status = OrderStatus.Failed;
            order.FailureReason = ex.Message;
            await _orderRepository.UpdateAsync(order);
            
            return new OrderResult { Success = false, Error = ex.Message };
        }
    }
}

// Event Sourcing Implementation
public class OrderAggregate : AggregateRoot
{
    private OrderState _state = new();
    private readonly List<OrderEvent> _changes = new();
    
    public OrderAggregate() { }
    
    public OrderAggregate(Guid orderId, Guid customerId, List<OrderItem> items)
    {
        Apply(new OrderCreated
        {
            OrderId = orderId,
            CustomerId = customerId,
            Items = items,
            CreatedAt = DateTime.UtcNow
        });
    }
    
    public void AddItem(Product product, int quantity)
    {
        if (_state.Status != OrderStatus.Pending)
            throw new InvalidOperationException("Cannot modify completed order");
        
        Apply(new ItemAdded
        {
            OrderId = _state.Id,
            ProductId = product.Id,
            Quantity = quantity,
            UnitPrice = product.Price,
            AddedAt = DateTime.UtcNow
        });
    }
    
    public void Complete()
    {
        if (_state.Items.Count == 0)
            throw new InvalidOperationException("Cannot complete empty order");
        
        Apply(new OrderCompleted
        {
            OrderId = _state.Id,
            CompletedAt = DateTime.UtcNow
        });
    }
    
    protected override void When(object @event)
    {
        switch (@event)
        {
            case OrderCreated e:
                _state.Id = e.OrderId;
                _state.CustomerId = e.CustomerId;
                _state.CreatedAt = e.CreatedAt;
                _state.Status = OrderStatus.Pending;
                break;
                
            case ItemAdded e:
                _state.Items.Add(new OrderItem
                {
                    ProductId = e.ProductId,
                    Quantity = e.Quantity,
                    UnitPrice = e.UnitPrice
                });
                _state.Total += e.Quantity * e.UnitPrice;
                break;
                
            case OrderCompleted e:
                _state.Status = OrderStatus.Completed;
                _state.CompletedAt = e.CompletedAt;
                break;
        }
    }
}`,
      bestPractices: [
        'Use database per service pattern for isolation',
        'Implement eventual consistency where appropriate',
        'Use CQRS pattern for complex query requirements',
        'Implement proper indexing and partitioning strategies',
        'Use connection pooling and proper transaction management',
        'Regularly backup and test disaster recovery procedures'
      ],
      conclusion: `Database design in microservices architecture requires careful consideration of trade-offs between consistency, availability, and partition tolerance. Our approach of using database per service, implementing saga patterns, and embracing eventual consistency enabled independent scaling and deployment of services. The key was understanding business requirements and choosing the right consistency model for each use case.`
    },
    12: {
      introduction: `API Gateways provide a unified entry point for client applications, offering capabilities like routing, aggregation, and security. In this guide, I'll share our experience implementing API Gateways with Ocelot and Azure API Management, covering patterns and best practices for microservices architectures.`,
      problem: [
        'Complex client-side orchestration of multiple services',
        'Inconsistent security implementation across services',
        'Difficulty in versioning and evolving APIs',
        'Lack of centralized monitoring and analytics',
        'Challenges in implementing cross-cutting concerns'
      ],
      implementation: `// Ocelot Configuration
{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/orders",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        {
          "Host": "orders-service",
          "Port": 443
        }
      ],
      "UpstreamPathTemplate": "/orders",
      "UpstreamHttpMethod": [ "GET", "POST" ],
      "AuthenticationOptions": {
        "AuthenticationProviderKey": "Bearer",
        "AllowedScopes": []
      },
      "RateLimitOptions": {
        "ClientWhitelist": [],
        "EnableRateLimiting": true,
        "Period": "1s",
        "PeriodTimespan": 1,
        "Limit": 10
      },
      "FileCacheOptions": {
        "TtlSeconds": 60,
        "Region": "orders"
      }
    },
    {
      "DownstreamPathTemplate": "/api/products/{everything}",
      "DownstreamScheme": "https",
      "DownstreamHostAndPorts": [
        {
          "Host": "products-service",
          "Port": 443
        }
      ],
      "UpstreamPathTemplate": "/products/{everything}",
      "UpstreamHttpMethod": [ "GET" ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "https://api.example.com",
    "ServiceDiscoveryProvider": {
      "Host": "consul",
      "Port": 8500,
      "Type": "Consul"
    },
    "RateLimitOptions": {
      "QuotaExceededMessage": "Too many requests",
      "HttpStatusCode": 429,
      "ClientIdHeader": "ClientId"
    }
  }
}

// Custom Ocelot Middleware
public class CorrelationIdMiddleware
{
    private readonly RequestDelegate _next;
    
    public CorrelationIdMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    
    public async Task Invoke(HttpContext context)
    {
        var correlationId = context.Request.Headers["X-Correlation-Id"].FirstOrDefault() 
            ?? Guid.NewGuid().ToString();
        
        context.Items["CorrelationId"] = correlationId;
        context.Response.Headers["X-Correlation-Id"] = correlationId;
        
        // Add to downstream request
        if (context.Request.Headers.ContainsKey("Downstream"))
        {
            context.Request.Headers.Add("X-Correlation-Id", correlationId);
        }
        
        await _next(context);
    }
}

// Response Aggregation
public class AggregationService
{
    public async Task<DashboardDto> GetDashboardDataAsync(string userId)
    {
        var userTask = _userService.GetUserAsync(userId);
        var ordersTask = _orderService.GetRecentOrdersAsync(userId, 10);
        var recommendationsTask = _recommendationService.GetRecommendationsAsync(userId);
        
        await Task.WhenAll(userTask, ordersTask, recommendationsTask);
        
        return new DashboardDto
        {
            User = await userTask,
            RecentOrders = await ordersTask,
            Recommendations = await recommendationsTask
        };
    }
}`,
      bestPractices: [
        'Implement rate limiting and throttling',
        'Use response caching for frequently accessed data',
        'Implement circuit breakers for downstream services',
        'Use API versioning strategies',
        'Implement comprehensive logging and monitoring',
        'Use SSL/TLS termination at the gateway'
      ],
      conclusion: `API Gateways transformed our system architecture by providing a unified entry point with centralized security, monitoring, and cross-cutting concerns. By offloading common functionality from individual services to the gateway, we improved consistency, reduced code duplication, and enhanced overall system resilience. The key was treating the API Gateway as a product, with proper versioning, documentation, and developer experience considerations.`
    },
    13: {
      introduction: `Clean Architecture promotes maintainability and testability by enforcing separation of concerns. In this practical guide, I'll share our implementation of Clean Architecture in .NET applications, covering project structure, dependency management, and testing strategies that improved our code maintainability and reduced bug rates by 60%.`,
      problem: [
        'Business logic tightly coupled to infrastructure concerns',
        'Difficulty in unit testing due to dependencies',
        'Complex dependencies making changes risky',
        'Lack of clear boundaries between layers',
        'Difficulty in replacing infrastructure components'
      ],
      implementation: `// Project Structure
// EnterpriseApp.Domain (Business rules and entities)
// EnterpriseApp.Application (Use cases and interfaces)
// EnterpriseApp.Infrastructure (External concerns implementation)
// EnterpriseApp.Presentation (UI/API layer)

// Domain Layer - Business Entities
public class Order : Entity
{
    public OrderId Id { get; private set; }
    public CustomerId CustomerId { get; private set; }
    public Money Total { get; private set; }
    public OrderStatus Status { get; private set; }
    private List<OrderItem> _items = new();
    public IReadOnlyList<OrderItem> Items => _items.AsReadOnly();
    
    public Order(CustomerId customerId)
    {
        Id = OrderId.New();
        CustomerId = customerId;
        Status = OrderStatus.Pending;
        
        AddDomainEvent(new OrderCreated(Id, customerId));
    }
    
    public void AddItem(Product product, int quantity)
    {
        if (Status != OrderStatus.Pending)
            throw new InvalidOperationException("Cannot modify completed order");
        
        var orderItem = new OrderItem(product.Id, quantity, product.Price);
        _items.Add(orderItem);
        Total += orderItem.Subtotal;
        
        AddDomainEvent(new ItemAdded(Id, product.Id, quantity));
    }
}

// Application Layer - Use Cases
public class CreateOrderCommand : IRequest<OrderDto>
{
    public Guid CustomerId { get; set; }
    public List<OrderItemDto> Items { get; set; }
}

public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, OrderDto>
{
    private readonly IOrderRepository _orderRepository;
    private readonly IUnitOfWork _unitOfWork;
    
    public async Task<OrderDto> Handle(
        CreateOrderCommand request, 
        CancellationToken cancellationToken)
    {
        var order = new Order(new CustomerId(request.CustomerId));
        
        foreach (var item in request.Items)
        {
            // In real app, would get product from repository
            var product = new Product(
                new ProductId(item.ProductId), 
                item.ProductName, 
                new Money(item.Price, "USD"));
            
            order.AddItem(product, item.Quantity);
        }
        
        await _orderRepository.AddAsync(order);
        await _unitOfWork.CommitAsync(cancellationToken);
        
        return new OrderDto
        {
            Id = order.Id.Value,
            CustomerId = order.CustomerId.Value,
            Total = order.Total.Amount,
            Status = order.Status.ToString(),
            Items = order.Items.Select(i => new OrderItemDto
            {
                ProductId = i.ProductId.Value,
                Quantity = i.Quantity,
                UnitPrice = i.UnitPrice.Amount
            }).ToList()
        };
    }
}

// Infrastructure Layer - External Concerns
public class OrderRepository : IOrderRepository
{
    private readonly ApplicationDbContext _context;
    
    public OrderRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<Order> GetByIdAsync(OrderId id)
    {
        return await _context.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == id);
    }
    
    public async Task AddAsync(Order order)
    {
        await _context.Orders.AddAsync(order);
    }
}

// Dependency Injection Configuration
public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(cfg => 
            cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
        
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));
        
        return services;
    }
    
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services, 
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"),
                b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));
        
        services.AddScoped<IOrderRepository, OrderRepository>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        
        return services;
    }
}`,
      bestPractices: [
        'Keep domain layer free of external dependencies',
        'Use interfaces to define contracts between layers',
        'Implement dependency inversion principle',
        'Use value objects for domain concepts',
        'Implement comprehensive unit testing',
        'Use domain events for cross-cutting concerns'
      ],
      conclusion: `Clean Architecture provided the structure and discipline needed to build maintainable, testable applications. While the initial setup required more effort, the benefits in terms of code quality, testability, and maintainability were substantial. The key was staying disciplined about layer boundaries and constantly refactoring to maintain clean separation of concerns.`
    },
    14: {
      introduction: `Serverless computing transforms application architecture by abstracting infrastructure management. In this article, I'll explore patterns and anti-patterns for serverless applications on Azure, sharing our experience building scalable, cost-effective solutions with Azure Functions and serverless databases.`,
      problem: [
        'High infrastructure management overhead',
        'Difficulty in scaling traditional applications',
        'Complexity in managing state in stateless functions',
        'Cold start latency in serverless functions',
        'Difficulty in debugging distributed serverless applications'
      ],
      implementation: `// Azure Function with Durable Functions Orchestration
[FunctionName("OrderProcessingOrchestrator")]
public static async Task<List<string>> RunOrchestrator(
    [OrchestrationTrigger] IDurableOrchestrationContext context)
{
    var order = context.GetInput<Order>();
    
    // Step 1: Validate order
    var validationResult = await context.CallActivityAsync<bool>(
        "ValidateOrder", order);
    
    if (!validationResult)
        throw new InvalidOperationException("Order validation failed");
    
    // Step 2: Process payment (parallel with inventory check)
    var paymentTask = context.CallActivityAsync<bool>(
        "ProcessPayment", order);
    
    var inventoryTask = context.CallActivityAsync<bool>(
        "CheckInventory", order);
    
    await Task.WhenAll(paymentTask, inventoryTask);
    
    if (!paymentTask.Result || !inventoryTask.Result)
    {
        // Compensating transactions
        if (paymentTask.Result)
            await context.CallActivityAsync("RefundPayment", order.Id);
        
        if (inventoryTask.Result)
            await context.CallActivityAsync("ReleaseInventory", order.Id);
        
        return new List<string> { "Order processing failed" };
    }
    
    // Step 3: Fulfill order
    await context.CallActivityAsync("FulfillOrder", order);
    
    // Step 4: Send notifications
    var notificationTasks = new List<Task>
    {
        context.CallActivityAsync("SendOrderConfirmation", order),
        context.CallActivityAsync("UpdateInventorySystem", order),
        context.CallActivityAsync("GenerateShippingLabel", order)
    };
    
    await Task.WhenAll(notificationTasks);
    
    return new List<string>
    {
        "Order processed successfully",
        $"Order ID: {order.Id}",
        $"Total: {order.Total}"
    };
}

// Function App Configuration for Performance
{
  "version": "2.0",
  "extensions": {
    "durableTask": {
      "maxConcurrentActivityFunctions": 100,
      "maxConcurrentOrchestratorFunctions": 20,
      "storageProvider": {
        "type": "AzureStorage",
        "partitionCount": 16
      }
    }
  },
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "excludedTypes": "Request"
      }
    }
  },
  "functionTimeout": "00:10:00"
}

// Cosmos DB Serverless Configuration
{
  "id": "orders",
  "partitionKey": {
    "paths": ["/customerId"],
    "kind": "Hash"
  },
  "indexingPolicy": {
    "automatic": true,
    "indexingMode": "consistent",
    "includedPaths": [
      {
        "path": "/*"
      }
    ],
    "excludedPaths": [
      {
        "path": "/_etag/?"
      }
    ]
  }
}`,
      bestPractices: [
        'Design functions to be stateless and idempotent',
        'Use Durable Functions for complex workflows',
        'Implement proper error handling and retry policies',
        'Use Cosmos DB serverless for scalable data storage',
        'Implement proper monitoring and alerting',
        'Optimize function cold start times'
      ],
      conclusion: `Serverless architecture transformed our approach to building scalable applications, reducing infrastructure management overhead by 80%. By embracing serverless patterns and optimizing for the unique characteristics of Functions-as-a-Service, we achieved unprecedented scalability and cost efficiency. The key was understanding serverless trade-offs and designing applications accordingly.`
    },
    15: {
      introduction: `Technical leadership extends beyond coding to encompass mentoring, architecture decisions, and fostering engineering excellence. In this article, I'll share strategies for technical leadership based on my experience leading development teams and driving technical initiatives that improved team productivity and reduced technical debt.`,
      problem: [
        'Lack of technical direction and vision',
        'Difficulty in mentoring and growing team members',
        'Challenges in making and communicating architecture decisions',
        'Inconsistent code review practices',
        'Difficulty in balancing technical debt with feature delivery'
      ],
      implementation: `// Architecture Decision Records (ADR) Template
# Title: [Short title of solved problem and solution]

## Context
[What is the issue that we're seeing that is motivating this decision or change?]

## Decision
[What is the change that we're proposing or have agreed to implement?]

## Status
[Accepted | Proposed | Deprecated | Superseded]

## Consequences
[What becomes easier or more difficult to do because of this change?]

## Example ADR
# Title: Adopt Clean Architecture for New Projects

## Context
Our current monolithic architecture is becoming difficult to maintain and test. 
Teams are experiencing tight coupling between layers, making changes risky and slow.

## Decision
All new projects will adopt Clean Architecture principles with the following layers:
1. Domain Layer - Business entities and rules
2. Application Layer - Use cases and interfaces
3. Infrastructure Layer - External concerns implementation
4. Presentation Layer - UI/API endpoints

## Status
Accepted (2025-01-15)

## Consequences
### Positive
- Improved testability and maintainability
- Clear separation of concerns
- Easier to replace infrastructure components
- Better alignment with business domains

### Negative
- Initial learning curve for team members
- More boilerplate code required
- Additional complexity for simple projects

// Code Review Checklist
public class CodeReviewChecklist
{
    public bool IsCodeReadable { get; set; }
    public bool AreTestsIncluded { get; set; }
    public bool IsPerformanceConsidered { get; set; }
    public bool IsSecurityReviewed { get; set; }
    public bool AreEdgeCasesHandled { get; set; }
    public bool IsDocumentationUpdated { get; set; }
}

// Technical Debt Tracking
public class TechnicalDebtItem
{
    public string Id { get; set; }
    public string Description { get; set; }
    public string Impact { get; set; }
    public TechnicalDebtSeverity Severity { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ResolvedDate { get; set; }
    public string AssignedTo { get; set; }
}

public class TechnicalDebtRegistry
{
    private readonly List<TechnicalDebtItem> _items = new();
    
    public void AddDebt(TechnicalDebtItem item)
    {
        _items.Add(item);
        NotifyStakeholders(item);
    }
    
    public void ResolveDebt(string id, string resolutionNotes)
    {
        var item = _items.FirstOrDefault(i => i.Id == id);
        if (item != null)
        {
            item.ResolvedDate = DateTime.UtcNow;
            LogResolution(item, resolutionNotes);
        }
    }
    
    public double CalculateDebtScore()
    {
        return _items
            .Where(i => i.ResolvedDate == null)
            .Sum(i => (int)i.Severity);
    }
}`,
      bestPractices: [
        'Establish clear technical vision and principles',
        'Implement consistent code review practices',
        'Create Architecture Decision Records (ADRs)',
        'Regular technical debt assessment and planning',
        'Mentoring and pair programming sessions',
        'Technical spike investigations for complex problems'
      ],
      conclusion: `Technical leadership is about enabling teams to do their best work while maintaining technical excellence. By establishing clear processes for architecture decisions, code reviews, and technical debt management, we created an environment where teams could deliver high-quality software sustainably. The key was balancing strategic thinking with hands-on mentorship and leading by example.`
    }
  };

  return contentMap[post.id] || {
    introduction: post.content?.introduction || post.excerpt,
    problem: ['Sample problem statement 1', 'Sample problem statement 2'],
    implementation: `// Sample implementation for ${post.title}
public class SampleService
{
    public async Task<Result> ExecuteAsync()
    {
        // Implementation details would go here
        return await Task.FromResult(new Result());
    }
}`,
    bestPractices: ['Best practice 1', 'Best practice 2', 'Best practice 3'],
    conclusion: `This article covers ${post.title} in depth, providing practical insights and implementation guidance based on real-world experience.`
  };
};

const dynamicContent = getDynamicContent();

  // Get color gradient based on post color
  const getColorGradient = () => {
    const gradients = {
      blue: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
      indigo: 'from-indigo-500/20 via-purple-500/20 to-blue-500/20',
      purple: 'from-purple-500/20 via-pink-500/20 to-red-500/20',
      green: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
      red: 'from-red-500/20 via-orange-500/20 to-yellow-500/20',
      yellow: 'from-yellow-500/20 via-amber-500/20 to-orange-500/20',
      teal: 'from-teal-500/20 via-cyan-500/20 to-blue-500/20',
      cyan: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
      pink: 'from-pink-500/20 via-rose-500/20 to-red-500/20',
      orange: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20'
    };
    return gradients[post.color] || gradients.blue;
  };

  // Get author bio based on author
  const getAuthorBio = () => {
    const bios = {
      'Alex Johnson': `Senior .NET Developer with 8+ years of experience building enterprise applications. Specialized in cloud architecture, security, and scalable system design. Passionate about mentoring developers and contributing to open-source projects. Currently leading backend development at a fintech startup.`,
      'Sarah Chen': `Principal Software Engineer with expertise in .NET ecosystem and cloud-native applications. Focused on building resilient, scalable systems and fostering engineering excellence through mentorship and best practices.`
    };
    return bios[post.author] || `Experienced developer specializing in ${post.tags.slice(0, 2).join(' and ')}. Passionate about sharing knowledge and helping others grow in their technical careers.`;
  };

  // Get next and previous posts
  const currentIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Articles</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  bookmarked 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
              {post.category.toUpperCase()}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.excerpt}
            </p>
          </div>

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center gap-6 py-6 border-t border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.id <= 3 ? 'Senior .NET Developer' : 'Software Engineer'}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{post.publishDate}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Eye className="h-4 w-4" />
                <span>{views.toLocaleString()} views</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <MessageCircle className="h-4 w-4" />
                <span>{comments} comments</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(tag => {
              const TagIcon = getTagIcon(tag);
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <TagIcon className="h-4 w-4" />
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                {/* Hero Image */}
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <div className={`h-64 md:h-80 bg-gradient-to-r ${getColorGradient()} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                        {post.tags[0] ? (() => {
                          const Icon = getTagIcon(post.tags[0]);
                          return <Icon className="h-8 w-8 text-white" />;
                        })() : <Code className="h-8 w-8 text-white" />}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{post.title.substring(0, 30)}...</p>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  {/* Introduction */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      {dynamicContent.introduction}
                    </p>
                  </section>

                  {/* Problem Statement */}
                  <section className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertCircle className="h-6 w-6 text-red-500 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      {dynamicContent.problem.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Code Example */}
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Implementation</h3>
                    <div className="bg-gray-900 rounded-xl p-4 md:p-6 overflow-x-auto">
                      <pre className="text-gray-300 text-sm md:text-base">
                        <code>{dynamicContent.implementation}</code>
                      </pre>
                    </div>
                  </section>

                  {/* Best Practices */}
                  <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Best Practices</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dynamicContent.bestPractices.map((practice, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {dynamicContent.conclusion}
                    </p>
                  </section>
                </div>
              </article>

              {/* Action Bar */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setLiked(!liked);
                        setLikes(prev => liked ? prev - 1 : prev + 1);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        liked
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
                      <span className="font-semibold">{likes.toLocaleString()}</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>Comment ({comments})</span>
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`px-6 py-2 rounded-lg font-medium transition-opacity ${
                      bookmarked
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
                    }`}
                  >
                    {bookmarked ? 'Saved ✓' : 'Save for Later'}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Stats Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Article Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Views</span>
                    <span className="font-bold text-gray-900 dark:text-white">{views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Likes</span>
                    <span className="font-bold text-gray-900 dark:text-white">{likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Reading Time</span>
                    <span className="font-bold text-gray-900 dark:text-white">{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Engagement Rate</span>
                    <span className="font-bold text-green-600">
                      {views > 0 ? ((likes / views) * 100).toFixed(1) : '0.0'}%
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Live counters updating in real-time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(related => (
                    <div 
                      key={related.id} 
                      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setSelectedPost(related);
                      }}
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  onClick={() => {
                    onBack();
                    setTimeout(() => {
                      document.querySelector('[data-category="' + post.category + '"]')?.click();
                    }, 100);
                  }}
                >
                  View More {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </button>
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Useful Resources</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Microsoft Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/' },
                    { title: 'GitHub Repository Examples', url: 'https://github.com/dotnet/' },
                    { title: 'Stack Overflow Community', url: 'https://stackoverflow.com/questions/tagged/' + post.tags[0]?.toLowerCase() || 'dotnet' },
                    { title: 'Official Blog Posts', url: 'https://devblogs.microsoft.com/dotnet/' }
                  ].map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {resource.title}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">About {post.author}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {getAuthorBio()}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 5).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next/Previous Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
            {prevPost && (
              <button 
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group w-full sm:w-auto"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedPost(prevPost);
                }}
              >
                <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous</div>
                  <div className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {prevPost.title}
                  </div>
                </div>
              </button>
            )}
            
            {nextPost && (
              <button 
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group w-full sm:w-auto sm:ml-auto"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedPost(nextPost);
                }}
              >
                <div className="text-right flex-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next</div>
                  <div className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {nextPost.title}
                  </div>
                </div>
                <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

  // Get category counts
  const getCategoryCount = (category) => {
    if (category === 'all') return posts.length;
    return posts.filter(post => post.category === category).length;
  };

  // Main List View
  if (!selectedPost) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Tech Blog & Tutorials
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            In-depth articles on .NET development, cloud architecture, security, and best practices
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                className="flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-colors dark:border-slate-700 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-10 border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="Search articles by title, content, tags..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Sorting Select */}
            <div className="relative">
              <select
                className="px-4 py-2 dark:bg-transparent dark:border-slate-700 rounded-md border border-border bg-background text-foreground text-sm font-medium hover:bg-muted hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest" className='dark:text-gray dark:bg-gray-700'>Newest First</option>
                <option value="oldest" className='dark:text-gray dark:bg-gray-700'>Oldest First</option>
                <option value="title-asc" className='dark:text-gray dark:bg-gray-700'>Title (A-Z)</option>
                <option value="title-desc" className='dark:text-gray dark:bg-gray-700'>Title (Z-A)</option>
                <option value="most-viewed" className='dark:text-gray dark:bg-gray-700'>Most Viewed</option>
                <option value="most-liked" className='dark:text-gray dark:bg-gray-700'>Most Liked</option>
                <option value="popularity" className='dark:text-gray dark:bg-gray-700'>Popularity</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {['all', 'tutorials', 'projects', 'thoughts'].map(category => (
              <button
                key={category}
                data-category={category}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {posts.length} articles
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== 'all' && ` in ${activeCategory}`}
            {sortOption !== 'newest' && ` • Sorted by ${sortOption.replace('-', ' ')}`}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(post => (
              <div key={post.id} className="group">
                <div 
                  className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 shadow group relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Featured badge */}
                  {post.isFeatured && (
                    <div className="absolute top-4 right-4 z-40">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Zap className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative z-30 p-6">
                    {/* Category tag */}
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        post.category === 'tutorials' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                        post.category === 'projects' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags preview */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.publishDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No results message
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {searchQuery 
                ? `No results found for "${searchQuery}". Try adjusting your search terms.`
                : 'No articles match the current filters. Try selecting a different category.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}

        {/* Stats footer */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{posts.length}</div>
                <div className="text-sm text-muted-foreground">Total Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {posts.filter(p => p.category === 'tutorials').length}
                </div>
                <div className="text-sm text-muted-foreground">Tutorials</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {posts.filter(p => p.category === 'projects').length}
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {posts.filter(p => p.isFeatured).length}
                </div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Show Blog Details
  return <BlogDetails post={selectedPost} onBack={() => setSelectedPost(null)} />;
};

export default BlogComponent;