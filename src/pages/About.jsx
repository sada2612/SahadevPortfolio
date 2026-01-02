import React from 'react';
import { 
  MapPin, 
  Mail, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Award,
  ChevronRight
} from 'lucide-react';

const About = () => {
  // Quick stats data
  const quickStats = [
    { label: "Years Exp.", value: "3+", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30" },
    { label: "Certifications", value: "7", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/30" },
    { label: "Technologies", value: "55+", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-950/30" },
    { label: "Successful Projects", value: "7+", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30" }
  ];

  // Core competencies
 const competencies = [
  {
    title: "Full-Stack Development",
    items: [
      "• C# & ASP.NET Core Development",
      "• Angular & React Frontend Development",
      "• RESTful API & Web API Design",
      "• Entity Framework Core & LINQ",
      "• SQL Server & MySQL Database Management"
    ]
  },
  {
    title: "Software Engineering",
    items: [
      "• SOLID Principles & Design Patterns",
      "• OOP Concepts & Clean Code",
      "• Unit Testing & Debugging",
      "• Code Reviews & Quality Assurance",
      "• Agile/Scrum Methodology"
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      "• AWS Services (Lambda, S3, API Gateway)",
      "• Azure Services (DevOps, Functions, App Services)",
      "• Docker Containerization",
      "• CI/CD Pipeline Implementation",
      "• Cloud Integration & Deployment"
    ]
  },
  {
    title: "Tools & Methodologies",
    items: [
      "• Visual Studio 2022 & SSMS",
      "• Git & GitHub Version Control",
      "• JIRA for Task Tracking",
      "• Requirement Analysis & Gathering",
      "• Cross-functional Team Collaboration"
    ]
  }
];

  // Professional experience
const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "SiGa Systems",
    location: "India • Full-time",
    period: "June 2023 - Present",
    description: "Working on innovative software engineering services that help businesses evolve and scale through cloud-native, platform-agnostic solutions. Collaborating with managers, business analysts, and clients to deliver enterprise applications.",
    methodology: "Agile/Scrum",
    collaboration: "Cross-functional teams (Managers, Business Analysts, Clients)",
    achievements: [
      "• Designed and developed N-tier web applications using C#, .NET Core, Angular, React, TypeScript, and SQL Server",
      "• Provided technical leadership and project execution guidance for various client projects",
      "• Enhanced existing applications for improved performance and scalability",
      "• Created database schemas, ER diagrams, and flow diagrams for system modules",
      "• Conducted code reviews, debugging, and unit testing to ensure code quality"
    ],
    technologies: [
      "C#", ".NET Core", "Angular", "React", "TypeScript", 
      "SQL Server", "AWS", "Azure", "HTML/CSS", "Bootstrap"
    ],
    showMore: "+5 more"
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Various Client Projects",
    location: "Remote • Contract",
    period: "2022 - Present",
    description: "Worked on multiple client projects including healthcare, banking/fintech, and HR management systems, delivering full-stack solutions with modern technologies.",
    methodology: "Agile/Scrum",
    collaboration: "Client Teams, Business Analysts, End Users",
    achievements: [
      "• Developed healthcare applications for Acentra Health to streamline data management and improve user experience",
      "• Contributed to U.S.-based banking platform building secure UPI-style digital payment system for real-time transactions",
      "• Built modular HRMS platform covering payroll, attendance, and performance management functionalities",
      "• Integrated AWS Lambda for serverless logic and AWS S3 for secure file storage",
      "• Participated in design, implementation, testing, and deployment phases of various projects"
    ],
    technologies: [
      "ASP.NET Core", "Web API", "Entity Framework Core", "AWS Lambda", 
      "AWS S3", "AWS API Gateway", "Docker", "PrimeNG", "PrimeReact"
    ],
    showMore: "+6 more"
  }
];
  // Education data
  const education = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      field: "Computer Science",
      institution: "Solapur University",
      period: "Mar 2019 - Apr 2022",
      description: "Completed comprehensive computer science education focusing on software development principles, database systems, and web technologies. The program provided the theoretical foundation and practical skills necessary for professional software engineering roles."
    },
    {
    id: 2,
    degree: "12th Standard (HSC)",
    field: "Science",
    institution: "Maharashtra State Board of Higher Education, Pune",
    period: "Mar 2017 - Feb 2018",
    description: "Completed Higher Secondary Certificate (HSC) with Science stream, focusing on Physics, Chemistry, Mathematics, and Computer Science. Developed strong analytical and problem-solving skills that formed the basis for higher studies in computer science."
  }
  ];

  // Certifications and awards
  const certifications = [
    {
      id: 1,
      type: "Award",
      title: "Microsoft MVP - AI",
      issuer: "Microsoft",
      date: "Jun 2024",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-800"
    },
    {
      id: 2,
      type: "Award",
      title: "AWS Community Builder",
      issuer: "Amazon Web Services",
      date: "Mar 2022",
      badgeColor: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/50 dark:text-orange-300 dark:border-orange-800"
    },
    {
      id: 3,
      type: "Certification",
      title: "Azure Developer Associate",
      issuer: "Microsoft",
      date: "Dec 2024"
    },
    {
      id: 4,
      type: "Certification",
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "Jan 2025"
    },
    {
      id: 5,
      type: "Certification",
      title: "Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "Feb 2025"
    },
    {
      id: 6,
      type: "Certification",
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Nov 2023"
    }
  ];

  // Career highlights
const careerHighlights = [
  { value: "3+", label: "Professional Experience" },
  { value: "7+", label: "Completed Projects" },
  { value: "3+", label: "Client Projects" },
  { value: "20+", label: "Technologies Used" },
  { value: "500+", label: "System Capacity" }
];

const performanceMetrics = [
  { value: "< 200ms", label: "API Response Time" },
  { value: "30%+", label: "System Performance Gain" },
  { value: "10K+", label: "Transaction Processing" },
  { value: "Agile", label: "Development Methodology" }
];

  return (
    <div className="min-h-screen bg-background pt-6 pb-12 lg:pt-8 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Senior Full Stack Software Engineer with 3+ years of experience building scalable solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mb-8 lg:mb-10 grid gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1" style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-8">
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                    <img alt="Cristopher Coronado" decoding="async" data-nimg="fill" class="object-cover" sizes="100vw" src="/images/profile/Sahadev.png"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }} />
                    <div className="h-full w-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800" />
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <h2 className="mb-2 text-2xl font-bold text-foreground">Cristopher Coronado</h2>
              <p className="mb-4 text-lg text-muted-foreground">Senior Full Stack Software Engineer</p>

              {/* Badges */}
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                <div className="inline-flex items-center rounded-md border text-xs font-semibold shadow bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 px-3 py-1.5">
                  🏆 3+ Years Industry Experience
                </div>
                <div className="inline-flex items-center rounded-md border text-xs font-semibold shadow bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 px-3 py-1.5">
                  ⭐ Full Stack .NET Developer
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full my-6 bg-border" />

              {/* Contact Info */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a 
                    href="mailto:sahadev.dotnet@gmail.com" 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    sahadev.dotnet@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full my-6 bg-border" />

              {/* Quick Stats */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground text-center mb-3">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {quickStats.map((stat, index) => (
                    <div key={index} className={`${stat.bg} rounded-lg p-3`}>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Info */}
          <div className="lg:col-span-2" style={{ opacity: 1, transform: "none" }}>
  <div className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-8">
    {/* Professional Summary */}
    <h3 className="mb-4 text-2xl font-bold text-foreground">Professional Summary</h3>
    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>Software Engineer with 3+ years of experience in designing, developing, and implementing web and client-server applications using Microsoft technologies. Skilled in full-stack development with expertise in .NET Core, Angular, React, and cloud technologies.</p>
      <p>Experienced in requirement gathering, analysis, design, development, testing, and implementation of enterprise applications across diverse domains including Healthcare, Banking/FinTech, and Human Resource Management systems.</p>
      <p>Proficient in building scalable applications using RESTful APIs, microservices architecture, and cloud integrations with AWS and Azure. Strong knowledge of OOP concepts, SOLID principles, and Design Patterns for building maintainable and efficient software solutions.</p>
      <p>Hands-on experience with Agile development methodology, conducting code reviews, debugging, unit testing, and collaborating with cross-functional teams to deliver high-quality software products.</p>
    </div>

    {/* Divider */}
    <div className="h-px w-full my-6 bg-border" />

    {/* Professional Goals */}
    <h3 className="mb-4 text-xl font-bold text-foreground">Professional Goals</h3>
    <div className="space-y-3 text-muted-foreground leading-relaxed">
      <p><strong>Seeking:</strong> Software Engineer / Full-Stack Developer roles where I can leverage my .NET and Angular expertise to build scalable, cloud-native applications. Open to opportunities in product-based companies and innovative tech environments.</p>
      <p><strong>Focus Areas:</strong> Full-stack development with .NET Core and modern frontend frameworks, cloud integration (AWS/Azure), microservices architecture, and contributing to team success through collaborative problem-solving and code quality practices.</p>
      <p><strong>Growth Path:</strong> Looking to enhance my leadership skills, take on more architectural responsibilities, and deepen my expertise in cloud technologies and enterprise application development.</p>
    </div>

    {/* Divider */}
    <div className="h-px w-full my-6 bg-border" />

    {/* Core Competencies */}
    <h3 className="mb-4 text-xl font-bold text-foreground">Core Competencies</h3>
    <div className="grid gap-4 sm:grid-cols-2">
      {competencies.map((competency, index) => (
        <div key={index}>
          <h4 className="mb-2 font-semibold text-foreground">{competency.title}</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {competency.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>
        </div>

        {/* Professional Experience Section */}
        <section className="mb-8 lg:mb-10">
          <h2 className="mb-4 lg:mb-5 text-3xl font-bold text-foreground">
            <Briefcase className="mb-2 inline h-8 w-8 text-blue-600 dark:text-blue-400" /> Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700">
                {/* Job Header */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="mb-4 text-muted-foreground">{exp.description}</p>

                {/* Methodology and Collaboration */}
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground font-medium">Methodology:</span>
                    <span className="text-foreground">{exp.methodology}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground font-medium">Collaboration:</span>
                    <span className="text-foreground">{exp.collaboration}</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-border text-foreground"
                    >
                      {tech}
                    </div>
                  ))}
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-border text-muted-foreground">
                    {exp.showMore}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 lg:mb-10">
          <h2 className="mb-4 lg:mb-5 text-3xl font-bold text-foreground">
            <GraduationCap className="mb-2 inline h-8 w-8 text-purple-600 dark:text-purple-400" /> Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.id} className="rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400">{edu.field}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Awards Section */}
        {/* <section>
          <div className="flex items-center justify-between mb-4 lg:mb-5">
            <h2 className="text-3xl font-bold text-foreground">
              <Award className="mb-2 inline h-8 w-8 text-green-600 dark:text-green-400" /> Featured Certifications & Awards
            </h2>
            <a href="/awards" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-1">
              View All <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.id} className="rounded-xl border border-border bg-white dark:bg-slate-800 shadow p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-700">
                <div className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold shadow mb-3 ${cert.badgeColor || 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
                  }`}>
                  {cert.type}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{cert.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Career Highlights Section */}
        <section className="mt-16">
          <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Career Highlights</h2>
            
            {/* Main Stats */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6">
              {careerHighlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {highlight.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{highlight.label}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full my-6 bg-border" />

            {/* Performance Metrics */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;