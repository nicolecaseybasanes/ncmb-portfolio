import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectFilter from '../components/ProjectFilter'; // <-- IMPORT

// Dummy data para sa Websites at Posters
const projectsData = {
  websites: [
    { id: 1, title: 'E-HAW Ordering System', category: 'Web App', desc: 'A web-based ordering system for 4 M.E Bacolod Inasal.', link: '#' },
    { id: 2, title: 'Portfolio Website', category: 'Frontend', desc: 'The very site you are looking at, built with React and Tailwind.', link: '#' },
    { id: 3, title: 'Interactive Quiz App', category: 'Javascript', desc: 'A focused browser quiz with instant feedback and progress tracking.', link: '#' },
  ],
  posters: [
    { id: 4, title: 'Arduino Exhibit Poster', category: 'Graphic Design', desc: 'Informational poster for the 2025 Arduino Exhibit.', link: '#' },
    { id: 5, title: 'SWS Short Film Poster', category: 'Graphic Design', desc: 'Promotional poster for the 1st Place SWS Short Film.', link: '#' },
  ]
};

export default function Work() {
  // State para i-track kung alin ang pinindot (websites o posters)
  const [activeTab, setActiveTab] = useState('websites');

  // Kunin ang tamang data base sa napiling tab
  const currentProjects = projectsData[activeTab];

  return (
    <div className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-primary)] dark:text-[var(--text-primary-dark)] py-32 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header at Filter Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] text-xs tracking-widest uppercase mb-2 transition-colors">
              My Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors">
              Selected <br />
              <span className="italic font-serif text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] transition-colors">
                Works.
              </span>
            </h2>
          </div>
          
          {/* COMPONENT NATIN DITO */}
          <ProjectFilter activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <div key={project.id} className="neu-card p-8 flex flex-col justify-between group bg-white dark:bg-[#1a221e]">
              <div>
                <span className="text-xs font-mono text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mb-3 mt-2 font-serif italic text-gray-900 dark:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors">
                  {project.desc}
                </p>
              </div>
              <button className="w-full py-3 bg-[#98ff98] text-black font-semibold rounded-full hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2">
                View Project <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}