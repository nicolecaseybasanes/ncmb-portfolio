import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, Code2, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      {/* Top Section: Profile & Intro */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left: Image Card */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="neu-card p-4 bg-white dark:bg-[#1a221e] rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-[#111814] border border-gray-200 dark:border-white/5">
                <img 
                  src="/profile.png" 
                  alt="Nicole Casey" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Your+Photo'; }}
                />
                <div className="absolute bottom-4 left-0 w-full text-center">
                  <span className="bg-white/80 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-800 dark:text-gray-200">
                    
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 dark:text-white mb-4 transition-colors">
              Nicole Casey<span className="text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)]">!</span>
            </h1>
            <h2 className="text-sm font-bold text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-6 uppercase tracking-wider">
              Designer & Developer
            </h2>
            
            {/* DESCRIPTION WITH text-justify */}
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-xl transition-colors text-justify">
              I build projects that solve real business problems. I combine my interest in UI/UX, Graphic Design, and Systems Analysis to make sure a system is both beautiful and logical. I also use Project Management to lead the team and Software Engineering to build the actual code. I enjoy connecting the creative side of design with the technical side of code.
            </p>

            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl transition-colors text-justify">
              Here, you will find a collection of my digital projects.
            </p>

            <Link 
              to="/#activities" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#98ff98] hover:bg-emerald-300 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(152,255,152,0.3)]"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Section: Academic & Skills Grid */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Academic Foundation Card */}
          <div className="neu-card p-8 md:p-10 bg-white dark:bg-[#1a221e] flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Background Studies</p>
                <h3 className="text-3xl font-serif text-gray-900 dark:text-white">Academic foundation</h3>
              </div>
              <GraduationCap className="text-gray-400" size={24} />
            </div>

            <div className="space-y-8 flex-grow">
              {/* College */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-3">
                  College
                </h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] text-gray-400 mb-1">School / Institution</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Pambayang Dalubhasaan ng Marilao</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] text-gray-400 mb-1">Program / Course</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">BS in Information Technology</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] text-gray-400 mb-2">Academic Experiences</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4 marker:text-[var(--accent-mint)] dark:marker:text-[var(--accent-mint-glow)]">
                      <li>League of Information Technology Enthusiasts (LITE) Club Sub-Org Chairman</li>
                      <li>2025 Arduino Exhibit - 3rd Place </li>
                      <li>2025 SWS Short Film - 1st Place</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* High School */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-mint)] dark:text-[var(--accent-mint-glow)] mb-3">
                  High School
                </h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] text-gray-400 mb-1">School / Institution</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Assemblywoman Felicita G. Bernardino Memorial Trade School</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] text-gray-400 mb-2">Strand: Science, Technology, Engineering, and Mathematics Strand</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4 marker:text-[var(--accent-mint)] dark:marker:text-[var(--accent-mint-glow)]">
                      <li>With Academic Excellence Award</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="neu-card p-8 md:p-10 bg-white dark:bg-[#1a221e] flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">Technical Skills</p>
                <h3 className="text-3xl font-serif text-gray-900 dark:text-white">Learning in Progress</h3>
              </div>
              <Code2 className="text-gray-400" size={24} />
            </div>

            <div className="space-y-6 flex-grow">
              {/* Skill 1 */}
              <div>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-2">Front-end development</p>
                <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">HTML · CSS · JavaScript </p>
                </div>
              </div>

              {/* Skill 2 */}
              <div>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-2">Backend</p>
                <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">node.js+Express · Java · C#</p>
                </div>
              </div>

              {/* Skill 3 */}
              <div>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-2">Database</p>
                <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">MySQL · MongoDB</p>
                </div>
              </div>
              
              {/* Skill 4 */}
              <div>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-2">Frameworks & Tools</p>
                <div className="bg-gray-50 dark:bg-[#111814] px-4 py-3 rounded-lg border border-gray-100 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">React · Git · Github</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </div>
  );
}