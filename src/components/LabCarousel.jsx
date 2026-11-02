import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ActivityCard from './ActivityCard';
import CaseStudyCard from './CaseStudyCard'; 
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';
import ProjectFilter from './ProjectFilter';

const activitiesData = {
  'Website Projects': [
    { 
      id: 1, 
      title: 'E-HAW: An Ordering System for 4 M.E Bacolod Inasal', 
      category: '', 
      type: 'Web App', 
      desc: 'Designed to modernize the dining experience. This project provides a mobile-based ordering kiosk for customers, a cashier interface for walk-in transactions, a dedicated kitchen display system for order status tracking, and a comprehensive sales monitoring dashboard for administrator.', 
      link: 'https://e-haw-system-for-4me-bacolod-inasal.vercel.app', 
      githubLink: null, 
      caseStudyLink: null, 
      image: '/images/e-haw-preview.png' 
    },
  ],
  'Graphic Design': [
    { 
      id: 2, 
      title: 'INC Wristband Design', 
      category: 'Print Material', 
      desc: 'A custom landscape wristband design created for the Iglesia Ni Cristo (Church of Christ) Lokal ng Marilao. Designed for their Pamamahagi ng Polyeto (tract distribution) event, featuring clean typography and brand-aligned colors.', 
      tool: 'Canva', 
      size: 'Wristband', 
      year: '2022', 
      image: '/images/graphicdesign-1.png' 
    },
    { 
      id: 3, 
      title: 'Gender Campaign Advertisement', 
      category: 'Advocacy Design', 
      desc: 'An advocacy poster designed to promote gender equality and inclusivity. The design utilizes a striking black-and-white portrait overlaid with bold, contrasting typography to emphasize the message of equal rights and respect for everyone.', 
      tool: 'Canva', 
      size: 'A4', 
      year: '2024', 
      image: '/images/graphicdesign-2.png' 
    },
    { 
      id: 4, 
      title: 'Programming Competition Pubmat', 
      category: 'Publication Material', 
      desc: 'A tech-inspired publication material for a university programming competition hosted by the League of Information Technology Enthusiasts. The layout features futuristic elements, glowing accents for the C and Java categories, and a clear CTA for registration.', 
      tool: 'Canva', 
      size: 'A4', 
      year: '2025', 
      image: '/images/graphicdesign-3.png' 
    },
    { 
      id: 5, 
      title: 'Lay In The Eggtray Poster', 
      category: 'Event Poster', 
      desc: 'A vibrant, playful event poster for a university fundraising activity. The design utilizes bright, spring-themed colors and 3D-style Easter eggs to attract students to participate in the game at the PDM Lobby.', 
      tool: 'Canva', 
      size: 'A4', 
      year: '2026', 
      image: '/images/graphicdesign-4.png' 
    },
  ]
};

export default function LabCarousel() {
  const [activeFilter, setActiveFilter] = useState('Website Projects'); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentActivities = activitiesData[activeFilter] || [];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === currentActivities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentActivities.length - 1 : prev - 1));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0); 
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const isWebsiteView = activeFilter === 'Website Projects';
  const isGraphicView = activeFilter === 'Graphic Design';

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 pt-32 pb-24 overflow-hidden relative">
      
      {/* Header & Filters */}
      <ScrollReveal direction="up" delay={0.1}>
        <div id="activities" className="flex flex-col items-center text-center mb-12 md:mb-16 px-6 scroll-mt-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
               Projects & Works
            </h2>
          </div>

          <div className="mt-2">
            <ProjectFilter 
              activeFilter={activeFilter} 
              setActiveFilter={handleFilterChange} 
            />
          </div>
        </div>
      </ScrollReveal>

      {/* RENDER LOGIC */}
      {isWebsiteView ? (
        /* WEBSITE VIEW */
        <div className="max-w-4xl mx-auto w-full flex flex-col pt-4">
          {currentActivities.map((project, index) => (
            /* Bawat project ay may sariling animation */
            <ScrollReveal key={project.id} direction="up" delay={index * 0.15}>
              <CaseStudyCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : isGraphicView ? (
        /* GRAPHIC DESIGN VIEW (Masonry Layout) */
        <div className="max-w-5xl mx-auto w-full pt-4">
          <div className="columns-1 md:columns-2 gap-8 md:gap-10">
            {currentActivities.map((poster, index) => (
              /* Bawat poster ay may sariling animation */
              <ScrollReveal 
                key={poster.id} 
                direction="up" 
                delay={index * 0.15} 
                className="break-inside-avoid mb-12 group flex flex-col"
              >
                <div className="w-full rounded-xl overflow-hidden shadow-lg mb-5 bg-gray-100 dark:bg-[#111814]">
                  <img 
                    src={poster.image} 
                    alt={poster.title} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {poster.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-3">
                    <span>[{poster.tool}]</span>
                    <span>[{poster.size}]</span>
                    <span>[{poster.year}]</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                    {poster.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      ) : null}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}