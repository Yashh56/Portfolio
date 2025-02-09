import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Blog App',
    description: 'An Blog Website where user can perform CRUD operations on blogs and can also comment on them.JWT,bcrypt,express-session are used for authentication and authorization. Backend is made using Express.js and frontend is made using React.js and for data storage MongoDB is used.',
    image: 'Blog-App.jpeg',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    ],
    github: 'https://github.com/Yashh56/Blog-App',
    url: ''
  },
  {
    title: 'Load Balancer',
    description: 'A Load Balancer which is used to distribute the incoming network traffic across multiple servers. The Load Balancer is made using GO and Gorilla Mux is used for routing.',
    image: 'LoadBalancer.png',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
    ],
    github: 'https://github.com/Yashh56/GoLoadBalancer',
  },
  {
    title: 'SkillSell',
    description: 'A website where user can sell and buy courses. Website is fully responsive and made using Next.js and Shadcn UI. for Data Storage and management  MySQL and Prisma  is used, for authentication clerk is used, for uploding image,files,etc uploagthing is used and for payment Stripe  is used.',
    image: 'SkillSell.png',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    ],
    github: 'https://github.com/Yashh56/skillsell',
    url: ''
  },
  {
    title: 'CryptoVerse',
    description: 'A website where you can get information about different cryptocurrencies. React.js is used for frontend and Chart js is used for displaying the data in graphical form and axios is used for fetching data from API Context API is used for state management.',
    image: 'CryptoVerse.jpeg',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    ],
    github: 'https://github.com/Yashh56/CryptoVerse',
    url: 'https://crypto-verse-wine.vercel.app/'
  },
  {
    title: 'Git Visualizer CLI',
    description: 'A CLI tool to visualize the git repository. The tool is made using GO and inspired from Flavio Copes Git Contributions. User can check the contribution of any user in any repository using thier email id.',
    image: 'Gitvisualizer.png',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
    ],
    github: 'https://github.com/Yashh56/GitVisualizer',
    url: ''
  },
  {
    title: 'Key Value Storage',
    description: 'A Key Value Storage System where user can store data in the form of key-value pair. The system is made using GO and BadgerDB is used for storing the data.',
    image: 'KeyValue.png',
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
    ],
    github: 'https://github.com/Yashh56/key-pair-storage',
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {project.technologies.map((tech, i) => (
            <img 
              key={i} 
              src={tech} 
              alt="technology"
              className="h-6 w-6 transition-transform hover:scale-110" 
            />
          ))}
        </div>
        
        <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white text-sm transition-all duration-200 border border-white/10 hover:border-blue-500/50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
          {project.url && (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-white text-sm transition-all duration-200 border border-blue-500/30 hover:border-blue-500/50"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          My Projects
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my recent work in web development, system design, and software engineering
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;