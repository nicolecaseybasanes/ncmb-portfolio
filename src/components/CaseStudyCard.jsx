import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function CaseStudyCard({ project }) {
  return (
    <div className="w-full flex flex-col mb-16 md:mb-24 last:mb-0">
      
      {/* 1. Hero Image */}
      <div className="w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden relative bg-gray-100 dark:bg-[#111814] mb-6 md:mb-8 shadow-xl">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x675?text=Project+Preview'; }}
        />
      </div>

      {/* 2. Content Area */}
      <div className="w-full flex flex-col px-2 md:px-0">
        
        {/* Title */}
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight max-w-3xl">
          {project.title}
        </h3>

        {/* Author */}
        <div className="flex items-center gap-3 mb-5">
          <img 
            src="/profile.png" 
            alt="Author" 
            className="w-9 h-9 rounded-full object-cover border border-gray-200 dark:border-gray-700"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/100'; }}
          />
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-gray-200">Nicole Casey Basanes</p>
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">{project.category}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-3xl text-justify">
          {project.desc}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 mt-2">
          {project.caseStudyLink && (
            <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] hover:opacity-70 transition-opacity">
              Read case study <ArrowRight size={16} />
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] hover:opacity-70 transition-opacity">
              View github <FaGithub size={16} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] hover:opacity-70 transition-opacity">
              View live <ExternalLink size={16} />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}