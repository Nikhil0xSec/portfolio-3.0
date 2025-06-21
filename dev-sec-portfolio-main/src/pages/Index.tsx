import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Moon, Sun, Shield, Code, Terminal, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'C', icon: Code },
    { name: 'C++', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Ethical Hacking', icon: Shield },
    { name: 'Penetration Testing', icon: Lock },
    { name: 'CTF', icon: Terminal },
  ];

  const tools = [
    'Kali Linux', 'Burp Suite', 'Wireshark', 'Nmap', 'Metasploit'
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600 dark:text-cyan-400" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">NK Dev</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
        {/* Circuit Background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-400 shadow-xl">
              <img 
                src="/lovable-uploads/81f2bd19-56ab-4fc4-8c89-7404757db42d.png" 
                alt="Nikhil Kumar Dev Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Nikhil Kumar Dev
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-cyan-400 font-semibold mb-4">
            Aspiring Full Stack Developer & Cybersecurity Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            "Securing the web, one challenge at a time."
          </p>
          
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm Nikhil Kumar Dev, an undergraduate student currently pursuing my B.Tech degree in Computer Science and Engineering at SRM University. My primary interest lies in cybersecurity and ethical hacking, while I'm actively developing my full-stack skills with intermediate proficiency in C, C++, Java, HTML, CSS, and JavaScript. I'm passionate about solving complex security challenges, learning new technologies, participating in Capture The Flag (CTF) competitions, and constantly improving my skills to make the digital world safer.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg">
                <span className="text-blue-800 dark:text-blue-200 font-semibold">B.Tech CSE</span>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-lg">
                <span className="text-purple-800 dark:text-purple-200 font-semibold">SRM University</span>
              </div>
              <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-lg">
                <span className="text-green-800 dark:text-green-200 font-semibold">Expected 2028</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <skill.icon className="h-12 w-12 text-blue-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Cybersecurity Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-12 text-white">
            <Terminal className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-lg opacity-90">
              Projects coming soon — including personal cybersecurity labs, CTF writeups, and full-stack web apps!
            </p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Cybersecurity Highlights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">CTF Competitions</h3>
              <p className="text-gray-600 dark:text-gray-300">Active participant in HackTheBox, TryHackMe, and various cybersecurity challenges</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <Lock className="h-16 w-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">Pursuing industry-recognized cybersecurity certifications</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <Terminal className="h-16 w-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Research & Writeups</h3>
              <p className="text-gray-600 dark:text-gray-300">Publishing security research and CTF writeups on GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:devnikhil19@gmail.com"
              className="bg-red-500 hover:bg-red-600 text-white p-6 rounded-xl transition-colors duration-300 transform hover:scale-105"
            >
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <span className="font-semibold">Email</span>
            </a>
            
            <a
              href="https://github.com/Nikhil0xSec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white p-6 rounded-xl transition-colors duration-300 transform hover:scale-105"
            >
              <Github className="h-8 w-8 mx-auto mb-4" />
              <span className="font-semibold">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nikhil0xsec/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors duration-300 transform hover:scale-105"
            >
              <Linkedin className="h-8 w-8 mx-auto mb-4" />
              <span className="font-semibold">LinkedIn</span>
            </a>
            
            <a
              href="https://instagram.com/vibewithnikhil_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="h-8 w-8 mx-auto mb-4" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Nikhil Kumar Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
