import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Star, Award, Users, Menu, X } from 'lucide-react';
import '../assets/css/Style.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including real-time inventory management, payment processing, and AI-powered recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "An intelligent analytics dashboard that provides real-time insights with machine learning predictions and data visualization.",
      tech: ["TypeScript", "D3.js", "Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.",
      tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  const skills: Skill[] = [
    { name: "React/Next.js", level: 95, icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", level: 90, icon: <Zap className="w-6 h-6" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-6 h-6" /> },
    { name: "Node.js", level: 88, icon: <Code className="w-6 h-6" /> },
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-8 h-8" />, number: "30+", label: "Happy Clients" },
    { icon: <Star className="w-8 h-8" />, number: "5", label: "Years Experience" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="portfolio-container min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="animated-bg">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="navbar">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer">
                  Portfolio
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
          <div className={`text-center z-10 transition-all duration-1000 delay-500 px-6 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="mb-12 relative">
              {/* Avatar */}
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1 mb-8 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-5xl font-bold gradient-text">JS</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 gradient-text leading-tight">
                John Smith
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Full Stack Developer & UI/UX Designer
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-8 mb-16">
                <a href="#" className="social-link p-4 rounded-full" style={{marginRight:15}}>
                  <Github className="w-7 h-7" />
                </a>
                <a href="#" className="social-link p-4 rounded-full" style={{marginRight:15}}>
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="#" className="social-link p-4 rounded-full">
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:scale-110 transition-transform duration-300 p-2"
            >
              <ChevronDown className="w-10 h-10 text-cyan-400" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                About Me
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating digital experiences 
                that combine beautiful design with powerful functionality. I specialize in modern web technologies 
                and have a keen eye for user experience design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-12 mb-24">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-all duration-500 border-2 border-cyan-400/20">
                    <div className="text-cyan-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-lg text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <br />

            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-10">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card rounded-2xl p-8 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="text-cyan-400 mr-4 p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">{skill.icon}</div>
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <div className="skill-progress mb-3">
                    <div 
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-base text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                Featured Projects
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent works that showcase my skills and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project) => (
                <div key={project.id} className="project-card group">
                  <div className="glass-card rounded-2xl overflow-hidden transition-all duration-700">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image w-full h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/30 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <a href={project.link} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group">
                          <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          View Project
                        </a>
                        <a href={project.github} className="flex items-center text-gray-400 hover:text-white transition-colors font-medium group">
                          <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                Let's Work Together
              </h2>
              <p className="text-xl md:text-2xl text-gray-300">
                Ready to start your next project? Let's create something amazing together.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-10 transition-all duration-300">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="block text-base font-medium text-gray-300 mb-3">Name</div>
                    <div className="w-full px-6 py-4 glass-card rounded-lg text-gray-400 hover:border-cyan-400/50 transition-colors duration-300">Your Name</div>
                  </div>
                  <div>
                    <div className="block text-base font-medium text-gray-300 mb-3">Email</div>
                    <div className="w-full px-6 py-4 glass-card rounded-lg text-gray-400 hover:border-cyan-400/50 transition-colors duration-300">your@email.com</div>
                  </div>
                </div>
                
                <div>
                  <div className="block text-base font-medium text-gray-300 mb-3">Subject</div>
                  <div className="w-full px-6 py-4 glass-card rounded-lg text-gray-400 hover:border-cyan-400/50 transition-colors duration-300">Project Inquiry</div>
                </div>
                
                <div>
                  <div className="block text-base font-medium text-gray-300 mb-3">Message</div>
                  <div className="w-full px-6 py-8 glass-card rounded-lg text-gray-400 min-h-[150px] hover:border-cyan-400/50 transition-colors duration-300">Tell me about your project...</div>
                </div>
                
                <div className="text-center pt-4">
                  <button 
                    className="premium-button text-lg"
                    onClick={() => window.open('mailto:contact@example.com?subject=Project%20Inquiry', '_blank')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-card border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2024 John Smith. Crafted with passion and code.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;