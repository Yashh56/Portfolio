import { Link } from 'react-router-dom';

interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string;
  link?: string;
}

const skills = [
  { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50' },
  { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-300 border-blue-500/50' },
  { name: 'Python', color: 'bg-blue-800/20 text-blue-300 border-blue-800/50' },
  { name: 'Go', color: 'bg-teal-500/20 text-teal-300 border-teal-500/50' },
  { name: 'WebSockets', color: 'bg-blue-500/20 text-blue-300 border-blue-500/50' },
  { name: 'MySQL', color: 'bg-orange-500/20 text-orange-300 border-orange-500/50' },
  { name: 'MongoDB', color: 'bg-green-500/20 text-green-300 border-green-500/50' },
  { name: 'Git', color: 'bg-gray-700/20 text-gray-300 border-gray-500/50' },
  { name: 'Github Actions', color: 'bg-gray-800/20 text-gray-300 border-gray-800/50' },
  { name: 'PostgreSQL', color: 'bg-blue-500/20 text-blue-300 border-blue-500/50' },
  { name: 'Docker', color: 'bg-blue-600/20 text-blue-300 border-blue-600/50' },
  { name: 'Redis', color: 'bg-red-600/20 text-red-300 border-red-600/50' },
];

const workExperience = [
  {
    role: 'Developer Intern',
    company: 'Alexus AI',
    duration: 'Dec 2024 - Present',
    description: 'Working on the development of the company\'s website and developing new features in Frontend and Backend.',
  },
  {
    role: 'Open Source Contributor',
    company: 'Devicons',
    duration: '2023 - 2024',
    description: 'Contributed to the Devicons project by adding new icons and updating the existing ones.',
    link: 'https://github.com/devicons/devicon/pulls?q=is%3Amerged+is%3Apr+author%3AYashh56'
  },
];


const ExperienceCard = ({ work }: { work: WorkExperience }) => (
  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
    <h2 className="text-xl font-bold text-white">{work.role}</h2>
    {work.link ? (
      <Link
        to={work.link}
        target="_blank"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        {work.company}
      </Link>
    ) : (
      <span className="text-gray-300">{work.company}</span>
    )}
    <p className="text-sm text-gray-400 mt-1">{work.duration}</p>
    <p className="mt-3 text-gray-300">{work.description}</p>
  </div>
);

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#030014] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          About Me
        </h1>

        <ul className="space-y-4 mt-8 text-gray-300 text-lg">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Hii Everyone, My name is Yashkumar Saini
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            I'm a second-year undergraduate student pursuing a Bachelor of Science in Computer Science.
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            I'm a Developer and currently exploring Cloud Computing and DevOps.
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            I compete in programming contests and am working to get better at it.
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            Solved 250+ problems on{' '}
            <Link
              to="https://leetcode.com/u/yashh56/"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 mx-1 transition-colors"
            >
              LeetCode
            </Link>{' '}
            and have a rating of 1700+.
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            My hobbies are watching anime, cricket, and reading books.
          </li>
        </ul>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8">
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <ExperienceCard key={index} work={work} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`px-4 py-2 rounded-lg ${skill.color} border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;