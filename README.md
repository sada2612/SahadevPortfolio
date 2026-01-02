Portfolio Project - Sahadev Padavale
📋 Project Overview
A modern, responsive portfolio website built with React and Tailwind CSS showcasing Sahadev Padavale's skills, projects, and professional experience as a Full-Stack .NET Developer.

🚀 Live Demo
[Add your live portfolio URL here]

✨ Features
🔧 Technical Features
Modern React Architecture: Built with functional components and React hooks

Responsive Design: Fully responsive across all device sizes

Dark/Light Theme: Theme toggle with system preference detection

Interactive UI: Smooth animations and transitions

Performance Optimized: Code splitting and lazy loading

SEO Friendly: Meta tags and structured data

📱 Sections
Hero Section - Introduction and key highlights

Skills Section - Interactive skills showcase with filtering

Projects Section - Portfolio projects with detailed descriptions

Experience Section - Professional work history

Education Section - Academic background

Contact Section - Contact form with EmailJS integration

About Section - Professional summary and goals

🛠️ Technology Stack
Frontend
React 18+ - UI library

Tailwind CSS - Utility-first CSS framework

React Router - Navigation and routing

EmailJS - Contact form integration

Lucide React - Icon library

TypeScript - Type safety (optional)

Development Tools
Vite - Build tool and dev server

ESLint - Code linting

Prettier - Code formatting

Git - Version control

GitHub Pages - Deployment

📁 Project Structure
text
portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── pdfs/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── Sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── About.jsx
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── SkillsFilter.jsx
│   │   └── common/
│   │       └── ThemeToggle.jsx
│   ├── data/
│   │   ├── skillsData.js
│   │   ├── projectsData.js
│   │   ├── experienceData.js
│   │   ├── educationData.js
│   │   └── constants.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
├── README.md
└── .gitignore
🚀 Getting Started
Prerequisites
Node.js 16+ and npm/yarn

Installation
Clone the repository

bash
git clone https://github.com/sahadev2612/portfolio.git
cd portfolio
Install dependencies

bash
npm install
# or
yarn install
Set up environment variables
Create a .env file in the root directory:

env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_PORT=3000
Get EmailJS credentials

Sign up at EmailJS

Create a service (Gmail recommended)

Create an email template

Copy your Public Key, Service ID, and Template ID

Development
Start development server

bash
npm run dev
# or
yarn dev
Open in browser
Navigate to http://localhost:3000

Building for Production
Build the project

bash
npm run build
# or
yarn build
Preview production build

bash
npm run preview
# or
yarn preview
📊 Data Configuration
Skills Data Structure
Update src/data/skillsData.js with your skills:

javascript
export const skillsData = {
  expert: [
    { name: 'C#', category: 'Backend', years: 2.6, emoji: '💻' },
    // ... more skills
  ],
  // ... other levels
};
Projects Data Structure
Update src/data/projectsData.js with your projects:

javascript
export const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    // ... other properties
  },
  // ... more projects
];
🎨 Customization
Colors and Theme
Edit tailwind.config.js to customize colors:

javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        // ... other colors
      },
    },
  },
};
Adding New Sections
Create a new component in src/components/Sections/

Import and add it to App.jsx

Update navigation if needed

Updating Content
Personal Info: Update data files in src/data/

Images: Add to public/assets/images/

PDFs: Add to public/assets/pdfs/

🔧 Configuration Files
Tailwind Configuration
javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... other colors
      },
    },
  },
  plugins: [],
};
Vite Configuration
javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // For GitHub Pages
})
📱 Responsive Breakpoints
Mobile: < 640px

Tablet: 640px - 1024px

Desktop: > 1024px

🔍 SEO Optimization
Meta tags in index.html

Structured data for projects

Semantic HTML throughout

Image optimization

Sitemap generation (optional)

🚀 Deployment
GitHub Pages
Install gh-pages

bash
npm install gh-pages --save-dev
Update package.json

json
{
  "homepage": "https://sahadev2612.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
Deploy

bash
npm run deploy
Netlify
Build command: npm run build

Publish directory: dist

Environment variables: Add in Netlify dashboard

Vercel
Import GitHub repository

Automatic deployment on push

🐛 Troubleshooting
Common Issues
EmailJS not working

Verify API keys in .env

Check EmailJS template variables

Ensure service is connected

Build errors

Clear node_modules: rm -rf node_modules

Reinstall: npm install

Check Node.js version

Images not loading

Check file paths

Ensure images are in public/assets/

Use correct import syntax

Development Tips
Use React Developer Tools extension

Check console for warnings

Test on multiple browsers

Use Lighthouse for performance audit

📝 License
This project is open source and available under the MIT License.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📞 Contact
Email: sahadev.dotnet@gmail.com

GitHub: sahadev2612

LinkedIn: sahadev-padavale

Phone: +91 7559181219

🙏 Acknowledgments
React - UI library

Tailwind CSS - CSS framework

Lucide Icons - Icon library

EmailJS - Email service

Vite - Build tool

Made with ❤️ by Sahadev Padavale