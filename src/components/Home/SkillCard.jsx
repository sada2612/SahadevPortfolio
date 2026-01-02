import React from 'react';

const SkillCard = ({ skill, level }) => {
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
    <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 group">
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
          className={`h-full bg-gradient-to-r ${progressColors[level]}`}
          style={{ width: progressWidths[level] }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;