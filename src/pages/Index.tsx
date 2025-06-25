import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Cpu, Globe } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Hi, I'm Arindam Bagchi";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = {
    languages: ["C", "C++", "Java", "Python"],
    web: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "VS Code", "TensorFlow", "Android Studio"],
    subjects: ["Data Structures", "OS", "CN", "DBMS", "Software Engineering", "Digital Electronics"]
  };

  const projects = [
    {
      title: "Insurance Management System with Live Tracking",
      description: "Web app to manage structured policy & claims data",
      tech: ["HTML", "CSS", "JavaScript", "Python", "MongoDB"],
      type: "Web Application"
    },
    {
      title: "Air & Water Quality Index Monitoring",
      description: "Real-time prediction of environmental quality",
      tech: ["Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
      type: "AI/ML Project"
    },
    {
      title: "Smart IoT Pillbox",
      description: "Medicine reminder system using sensors and ESP8266",
      tech: ["Arduino", "C++", "Python"],
      type: "IoT Project"
    }
  ];

  const education = [
    {
      degree: "B.Tech (CSE, IoT/Cybersecurity/Blockchain)",
      institution: "Institute of Engineering and Management, Kolkata",
      duration: "2022–2026",
      grade: "CGPA: 8.6"
    },
    {
      degree: "ISC Science",
      institution: "Douglas Memorial School, Barrackpore",
      duration: "2020–2022",
      grade: "90%"
    },
    {
      degree: "ICSE",
      institution: "Douglas Memorial School, Barrackpore",
      duration: "2007–2020",
      grade: "88.2%"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 terminal-border backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text font-jetbrains">
              &lt;Arindam/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-neon-blue ${
                    activeSection === section ? 'text-neon-blue' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-violet/10 via-transparent to-soft-cyan/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-blue to-deep-violet p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/d5e49e31-3466-434c-a651-834a3c6df5c7.png" 
                    alt="Arindam Bagchi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-jetbrains">
              <span className="gradient-text typewriter">
                {typewriterText}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Final year Computer Science student with strong foundations in algorithms, 
              data structures, and full-stack development, seeking a software development role 
              to contribute to innovative projects and continue learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-neon-blue/50"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg px-8 py-3 rounded-lg transition-all"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains">
            &lt;About Me/&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student specializing in cutting-edge technologies 
                like IoT, Cybersecurity, and Blockchain. With a strong foundation in algorithms 
                and data structures, I love building innovative solutions to real-world problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently in my final year at IEM Kolkata, I've maintained an impressive 8.6 CGPA 
                while working on diverse projects ranging from web applications to IoT systems. 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              
              <Button className="bg-deep-violet hover:bg-deep-violet/80 text-white px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-deep-violet/50">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neon-blue mb-6 font-jetbrains">Education Timeline</h3>
              {education.map((edu, index) => (
                <Card key={index} className="terminal-border hover:shadow-lg hover:shadow-neon-blue/20 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <Badge className="bg-neon-blue/20 text-neon-blue">{edu.grade}</Badge>
                    </div>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains">
            &lt;Skills/&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="terminal-border hover:shadow-lg hover:shadow-neon-blue/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-neon-blue mr-3" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} className="bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border hover:shadow-lg hover:shadow-deep-violet/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-deep-violet mr-3" />
                  <h3 className="text-xl font-semibold">Web Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} className="bg-deep-violet/20 text-deep-violet hover:bg-deep-violet/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border hover:shadow-lg hover:shadow-soft-cyan/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-soft-cyan mr-3" />
                  <h3 className="text-xl font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} className="bg-soft-cyan/20 text-soft-cyan hover:bg-soft-cyan/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border hover:shadow-lg hover:shadow-terminal-green/20 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 text-terminal-green mr-3" />
                  <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} className="bg-terminal-green/20 text-terminal-green hover:bg-terminal-green/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="terminal-border hover:shadow-lg hover:shadow-neon-blue/20 transition-all md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-neon-blue mr-3" />
                  <h3 className="text-xl font-semibold">Core Subjects</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.subjects.map((skill) => (
                    <Badge key={skill} className="bg-gradient-to-r from-neon-blue/20 to-deep-violet/20 text-white hover:from-neon-blue/30 hover:to-deep-violet/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains">
            &lt;Projects/&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="terminal-border hover:shadow-lg hover:shadow-neon-blue/20 transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-neon-blue/20 to-deep-violet/20 text-white mb-3">
                      {project.type}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text font-jetbrains">
            &lt;Contact/&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-neon-blue">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:arindambagchi14@gmail.com"
                  className="flex items-center space-x-4 p-4 terminal-border rounded-lg hover:shadow-lg hover:shadow-neon-blue/20 transition-all group"
                >
                  <Mail className="w-6 h-6 text-neon-blue group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white">arindambagchi14@gmail.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/arindam-bagchi-086070286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 terminal-border rounded-lg hover:shadow-lg hover:shadow-deep-violet/20 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-deep-violet group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/bagchiarindam2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 terminal-border rounded-lg hover:shadow-lg hover:shadow-soft-cyan/20 transition-all group"
                >
                  <Github className="w-6 h-6 text-soft-cyan group-hover:animate-bounce" />
                  <span className="text-gray-300 group-hover:text-white">GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <Card className="terminal-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-deep-violet hover:from-neon-blue/80 hover:to-deep-violet/80 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Arindam Bagchi. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2 font-jetbrains">
            &lt;/coding_the_future&gt;
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
