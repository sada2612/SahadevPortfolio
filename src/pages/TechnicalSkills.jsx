import React, { useState } from 'react';
import {skillsData, filters} from '../utils/data';

const TechnicalSkills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Flatten all skills for filtering
  const allSkills = [
    ...skillsData.expert.map(skill => ({ ...skill, level: 'expert' })),
    ...skillsData.advanced.map(skill => ({ ...skill, level: 'advanced' })),
    ...skillsData.intermediate.map(skill => ({ ...skill, level: 'intermediate' })),
    ...skillsData.beginner.map(skill => ({ ...skill, level: 'beginner' }))
  ];

  // Filter skills based on active filter and search query
  const getFilteredSkills = (level) => {
    return allSkills
      .filter(skill => {
        // First filter by level
        if (skill.level !== level) return false;
        
        // Then filter by category
        if (activeFilter !== 'All' && skill.category !== activeFilter) return false;
        
        // Finally filter by search query
        if (searchQuery && !skill.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        
        return true;
      })
      .map(skill => ({ ...skill }));
  };

  // Get counts for each level after filtering
  const getFilteredCount = (level) => {
    return getFilteredSkills(level).length;
  };

  // Get total filtered skills count
  const totalFilteredSkills = 
    getFilteredSkills('expert').length +
    getFilteredSkills('advanced').length +
    getFilteredSkills('intermediate').length +
    getFilteredSkills('beginner').length;

  const proficiencyStats = [
    { level: 'Expert', count: getFilteredCount('expert'), percentage: '6%', color: 'from-green-600 to-emerald-600' },
    { level: 'Advanced', count: getFilteredCount('advanced'), percentage: '38%', color: 'from-blue-600 to-indigo-600' },
    { level: 'Intermediate', count: getFilteredCount('intermediate'), percentage: '46%', color: 'from-yellow-500 to-orange-500' },
    { level: 'Beginner', count: getFilteredCount('beginner'), percentage: '10%', color: 'from-gray-500 to-slate-500' }
  ];

  const getSkillCard = (skill, index) => {
    const progressColors = {
      expert: 'from-green-600 to-emerald-600',
      advanced: 'from-blue-600 to-indigo-600',
      intermediate: 'from-yellow-500 to-orange-500',
      beginner: 'from-gray-500 to-slate-500'
    };

    const progressWidths = {
      expert: '100%',
      advanced: '80%',
      intermediate: '60%',
      beginner: '40%'
    };

    return (
      <div key={index} className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow group border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex-1">
            <h4 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {skill.emoji && <span className="mr-2">{skill.emoji}</span>}
              {skill.name}
            </h4>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-border text-muted-foreground">
              {skill.category}
            </div>
          </div>
          <div className="ml-2 text-right">
            <p className="text-2xl font-bold text-primary">{skill.years}</p>
            <p className="text-xs text-muted-foreground">years</p>
          </div>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
          <div 
            className={`h-full bg-gradient-to-r ${progressColors[skill.level]}`}
            style={{ width: progressWidths[skill.level] }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-background py-20'>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          93 technologies and tools across 11 categories, cultivated over 6+ years of professional software development
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/20 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Expert Level</p>
              <p className="text-2xl font-bold text-foreground">{getFilteredCount('expert')}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/30 dark:to-purple-900/20 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
          <div>
      <p className="text-sm text-muted-foreground">Projects Delivered</p>
      <p className="text-2xl font-bold text-foreground">7+</p>
    </div>
          </div>
        </div>

        <div className="rounded-xl border dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow border-border bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/30 dark:to-green-900/20 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="text-2xl font-bold text-foreground">3+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="mb-6">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="flex dark:border-slate-700 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pl-10 border-border focus:border-primary"
              placeholder="Search skills (e.g., TypeScript, Azure, Docker)..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.name}
                className={`rounded-full dark:border-slate-700 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.name
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                }`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.name}
                <span className="ml-2 rounded-full px-2 py-0.5 text-xs bg-muted-foreground/20 text-muted-foreground">
                  {filter.name === 'All' ? totalFilteredSkills : 
                   allSkills.filter(s => s.category === filter.name).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-sm text-muted-foreground">
          Showing {totalFilteredSkills} of {totalFilteredSkills} skills
        </div>

        {/* Skills Sections - Only show if there are filtered skills */}
        <div className="space-y-12">
          {/* Expert Level */}
          {getFilteredCount('expert') > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">Expert Level</h3>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  {getFilteredCount('expert')} skills
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFilteredSkills('expert').map((skill, index) => getSkillCard(skill, index))}
              </div>
            </div>
          )}

          {/* Advanced Level */}
          {getFilteredCount('advanced') > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">Advanced Level</h3>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {getFilteredCount('advanced')} skills
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFilteredSkills('advanced').map((skill, index) => getSkillCard(skill, index))}
              </div>
            </div>
          )}

          {/* Intermediate Level */}
          {getFilteredCount('intermediate') > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">Intermediate Level</h3>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  {getFilteredCount('intermediate')} skills
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFilteredSkills('intermediate').map((skill, index) => getSkillCard(skill, index))}
              </div>
            </div>
          )}

          {/* Beginner Level */}
          {getFilteredCount('beginner') > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">Beginner Level</h3>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-gradient-to-r from-gray-500 to-slate-500 text-white">
                  {getFilteredCount('beginner')} skills
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getFilteredSkills('beginner').map((skill, index) => getSkillCard(skill, index))}
              </div>
            </div>
          )}

          {/* Show message when no skills match the filter */}
          {totalFilteredSkills === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">No skills found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Proficiency Distribution - Update percentages dynamically */}
      <div className="mt-16 rounded-lg dark:border-slate-700 border border-border bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Proficiency Distribution
        </h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {proficiencyStats.map((stat, index) => {
            const percentage = totalFilteredSkills > 0 
              ? Math.round((stat.count / totalFilteredSkills) * 100) 
              : 0;
            
            return (
              <div key={index} className="text-center">
                <div className={`mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${stat.color}`}>
                  <span className="text-2xl font-bold text-white">{stat.count}</span>
                </div>
                <p className="mb-1 text-sm font-semibold text-foreground">{stat.level}</p>
                <p className="text-xs text-muted-foreground">{percentage}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TechnicalSkills;