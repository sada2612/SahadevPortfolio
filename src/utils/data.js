export const projects = [
  {
    id: 1,
    title: 'Acentra Health - Healthcare Management System',
    description: 'Developed healthcare applications to streamline data management and improve user experience. Built secure, scalable modules for patient data management, treatment tracking, and healthcare analytics.',
    category: 'Healthcare',
    status: 'Completed',
    technologies: ['ASP.NET Core', 'Angular', 'Web API', 'Entity Framework Core', 'SQL Server 2019', 'jQuery', 'Ajax'],
    stats: [
      { label: 'Team Size', value: '5-8' },
      { label: 'Performance Improvement', value: '30%+' },
    ],
    link: '/',
    features: [
      'Secure patient data management modules',
      'Scalable healthcare analytics dashboards',
      'Real-time treatment tracking system',
      'Responsive UI with jQuery/Ajax integration'
    ]
  },
  {
    id: 2,
    title: 'US FinTech Banking Platform - Digital Payment System',
    description: 'Contributed to a U.S.-based banking and financial services project building a secure UPI-style digital payment platform for real-time transactions, authentication, and account management.',
    category: 'FinTech / Banking',
    status: 'Completed',
    technologies: ['.NET Core', 'Angular', 'React', 'AWS Lambda', 'API Gateway', 'S3', 'Docker', 'PrimeNG', 'PrimeReact'],
    stats: [
      { label: 'Transaction Processing', value: 'Real-time' },
      { label: 'Platform Users', value: '10K+' },
    ],
    link: '/',
    features: [
      'UPI validation and transaction tracking',
      'Secure account linking and management',
      'Real-time payment processing',
      'AWS serverless microservices architecture'
    ]
  },
  {
    id: 3,
    title: 'HRMS - Human Resource Management System',
    description: 'Developed a modular HRMS platform covering payroll, attendance, and performance management functionalities. Integrated AWS Lambda for serverless logic and S3 Buckets for secure file storage.',
    category: 'Enterprise',
    status: 'Completed',
    technologies: ['.NET Core', 'React', 'PrimeReact', 'Web API', 'SQL Server 2022', 'AWS Lambda', 'S3'],
    stats: [
      { label: 'Modules Developed', value: '5+' },
      { label: 'Employee Capacity', value: '500+' },
    ],
    link: '/',
    features: [
      'Payroll processing and management',
      'Attendance tracking system',
      'Performance evaluation modules',
      'Secure document storage with AWS S3',
      'Serverless backend with AWS Lambda'
    ]
  }
];
export const skillsData = {
  expert: [
    { name: 'C#', category: 'Backend', years: 3, emoji: '💻' },
    { name: '.NET Core', category: 'Backend', years: 3, emoji: '🔷' },
    { name: 'ASP.NET Core', category: 'Backend', years: 3, emoji: '🌐' },
  ],
  advanced: [
    { name: 'Angular', category: 'Frontend', years: 3, emoji: '⚡' },
    { name: 'TypeScript', category: 'Frontend', years: 3, emoji: '📘' },
    { name: 'Entity Framework Core', category: 'Backend', years: 3 },
    { name: 'RESTful APIs', category: 'Backend', years: 3 },
    { name: 'SQL Server', category: 'Database', years: 3, emoji: '🗄️' },
    { name: 'Web API', category: 'Backend', years: 3 },
    { name: 'LINQ', category: 'Backend', years: 3 },
    { name: 'HTML5/CSS3', category: 'Frontend', years: 3 },
    { name: 'Bootstrap', category: 'Frontend', years: 3 },
    { name: 'JavaScript/jQuery', category: 'Frontend', years: 3 },
    { name: 'MVC', category: 'Architecture', years: 3, emoji: '🏗️' },
    { name: 'Microservices', category: 'Architecture', years: 3, emoji: '🔗' },
    { name: 'SonarQube', category: 'Testing', years: 3, emoji: '📊' },
    { name: 'Veracode', category: 'Security', years: 2, emoji: '🛡️' },
  ],
  intermediate: [
    { name: 'React', category: 'Frontend', years: 3, emoji: '⚛️' },
    { name: 'AWS Lambda', category: 'Cloud', years: 3, emoji: '☁️' },
    { name: 'AWS S3', category: 'Cloud', years: 3 },
    { name: 'AWS API Gateway', category: 'Cloud', years: 3 },
    { name: 'Azure DevOps', category: 'Cloud', years: 3 },
    { name: 'Azure Functions', category: 'Cloud', years: 1.5 },
    { name: 'Docker', category: 'DevOps', years: 3, emoji: '🐳' },
    { name: 'PrimeNG/PrimeReact', category: 'Frontend', years: 2, emoji: '🎨' },
    { name: 'MySQL', category: 'Database', years: 3, emoji: '🐬' },
    { name: 'CI/CD Pipelines', category: 'DevOps', years: 3 },
    { name: 'Visual Studio 2022', category: 'Tools', years: 3 },
    { name: 'Git/GitHub', category: 'Tools', years: 3 },
    { name: 'JIRA', category: 'Tools', years: 3 },
    { name: 'ADO.NET', category: 'Backend', years: 3 },
  ],
  beginner: [
    { name: 'Azure App Services', category: 'Cloud', years: 2 },
    { name: 'AWS EC2', category: 'Cloud', years: 1.5 },
    { name: 'Azure Storage', category: 'Cloud', years: 1.5 },
    { name: 'Stored Procedures', category: 'Database', years: 1 },
    { name: 'Query Optimization', category: 'Database', years: 2 },
  ]
};

export  const filters = [
    { name: 'All', count: 93 },
    { name: 'Frontend', count: 13 },
    { name: 'Backend', count: 18 },
    { name: 'Database', count: 8 },
    { name: 'Cloud', count: 16 },
    { name: 'DevOps', count: 7 },
    { name: 'AI/ML', count: 10 },
    { name: 'Mobile', count: 1 },
    { name: 'Tools', count: 3 },
    { name: 'Testing', count: 8 },
    { name: 'Architecture', count: 4 },
    { name: 'Security', count: 5 }
  ];

export const skills = [
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Angular', years: '3+ y', level: 85 },
      { name: 'React', years: '3+ y', level: 80 },
      { name: 'TypeScript', years: '3+ y', level: 85 },
      { name: 'JavaScript', years: '3+ y', level: 85 },
      { name: 'jQuery', years: '3+ y', level: 80 },
      { name: 'HTML5/CSS3', years: '3+ y', level: 85 },
      { name: 'Bootstrap', years: '3+ y', level: 85 },
      { name: 'PrimeNG/PrimeReact', years: '2+ y', level: 80 },
    ],
  },
  {
    category: 'Backend & API Development',
    icon: '⚙️',
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'C#', years: '3+ y', level: 90 },
      { name: 'ASP.NET Core', years: '3+ y', level: 90 },
      { name: 'Web API', years: '3+ y', level: 85 },
      { name: 'RESTful API', years: '3+ y', level: 85 },
      { name: 'Microservices', years: '3+ y', level: 80 },
      { name: 'Entity Framework Core', years: '3+ y', level: 85 },
      { name: 'LINQ', years: '3+ y', level: 85 },
      { name: 'MVC', years: '3+ y', level: 80 },
    ],
  },
  {
    category: 'Database Management',
    icon: '💾',
    color: 'from-green-500 to-emerald-500',
    items: [
      { name: 'SQL Server', years: '3+ y', level: 85 },
      { name: 'MySQL', years: '3+ y', level: 75 },
      { name: 'Stored Procedures', years: '1+ y', level: 70 },
      { name: 'Database Design', years: '3+ y', level: 80 },
      { name: 'Query Optimization', years: '3+ y', level: 75 },
      { name: 'ER Diagrams', years: '3+ y', level: 80 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'AWS Lambda', years: '3+ y', level: 80 },
      { name: 'AWS API Gateway', years: '3+ y', level: 80 },
      { name: 'AWS S3', years: '3+ y', level: 80 },
      { name: 'Azure DevOps', years: '3+ y', level: 75 },
      { name: 'Azure Functions', years: '1+ y', level: 70 },
      { name: 'Docker', years: '3+ y', level: 75 },
      { name: 'CI/CD Pipelines', years: '3+ y', level: 75 },
      { name: 'Cloud Integration', years: '3+ y', level: 80 },
    ],
  },
  {
    category: 'Development Practices & Tools',
    icon: '🛠️',
    color: 'from-indigo-500 to-blue-500',
    items: [
      { name: 'Git/GitHub', years: '3+ y', level: 85 },
      { name: 'SOLID Principles', years: '3+ y', level: 85 },
      { name: 'Design Patterns', years: '3+ y', level: 80 },
      { name: 'Agile/Scrum', years: '3+ y', level: 85 },
      { name: 'JIRA', years: '3+ y', level: 85 },
      { name: 'Unit Testing (NUnit)', years: '3+ y', level: 80 },
      { name: 'Code Reviews', years: '3+ y', level: 85 },
      { name: 'Visual Studio 2022', years: '3+ y', level: 90 },
    ],
  },
];

export const complementaryTech = [
  // Frontend & UI
  'Bootstrap', 'PrimeNG', 'PrimeReact', 'Ajax', 'Responsive Design',
  
  // Backend & API
  'MVC', 'ADO.NET', 'RESTful API', 'Microservices', 'Web API',
  
  // Databases
  'MySQL', 'Stored Procedures', 'Database Design', 'Query Optimization', 'ER Diagrams',
  
  // Cloud & DevOps
  'AWS Lambda', 'AWS API Gateway', 'AWS S3', 'AWS EC2', 'AWS CloudWatch',
  'Azure DevOps', 'Azure Pipelines', 'Azure Storage', 'Azure App Services',
  'Azure Functions', 'Docker', 'CI/CD Pipelines', 'DevOps',
  
  // Development Practices & Tools
  'Visual Studio 2019/2022', 'SQL Server Management Studio', 'AWS CDK',
  'JIRA', 'NUnit', 'Git', 'GitHub', 'Agile Methodology',
  'SOLID Principles', 'Design Patterns', 'OOP', 'Code Reviews',
  'Unit Testing', 'Debugging',
  
  // Industry Domains
  'Healthcare Systems', 'FinTech Platforms', 'Banking Solutions',
  'HRMS (Human Resource Management)', 'Payment Processing',
  'Real-time Transactions', 'Secure Authentication',
  
  // Project Methodologies
  'Requirement Gathering', 'System Analysis', 'Technical Design',
  'System Implementation', 'Testing & Deployment', 'Performance Optimization'
];

