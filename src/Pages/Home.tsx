import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

const SocialLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 text-sm text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg transition-all duration-300"
  >
    {children}
  </Link>
);

const CenteredText = ({ text }:{text:string}) => {
  return (
    <div className="flex justify-center md:justify-start items-center min-h-screen">
      <div className="text-center md:text-left md:ml-12 lg:ml-16 xl:ml-20">
        <h1 className="mb-4 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Hey there, I am Yash
        </h1>
        <div className="mb-4 text-4xl md:text-6xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            I'm a {text}
          </span>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <SocialLink to="https://github.com/Yashh56">
            GitHub
          </SocialLink>
          <SocialLink to="https://www.linkedin.com/in/yash596/">
            LinkedIn
          </SocialLink>
          <SocialLink to="https://twitter.com/Yashh596">
            X
          </SocialLink>
          <SocialLink to="https://drive.google.com/file/d/1peOArbShFCX7rNnvR2JDEdqJczJ2jQju/view?usp=sharing">
            Resume
          </SocialLink>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Open Source Contributor', 'Tech Enthusiast'],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,
  });

  return (
    <div className="min-h-screen bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="relative">
        <CenteredText text={text} />
      </div>
    </div>
  );
};

export default Home;