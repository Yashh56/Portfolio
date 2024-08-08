import { Link } from 'react-router-dom'

const skills = [
  { name: 'JavaScript', color: 'bg-yellow-500 text-black' },
  { name: 'TypeScript', color: 'bg-blue-500 text-black' },
  { name: 'Python', color: 'bg-blue-800' },
  { name: 'Golang', color: 'bg-teal-500' },
  { name: 'C++', color: 'bg-blue-700' },
  { name: 'MySQL', color: 'bg-orange-500' },
  { name: 'MongoDB', color: 'bg-green-500' },
  { name: 'Git', color: 'bg-gray-700' },
  { name: 'Docker', color: 'bg-blue-600' },
];

const AboutMe = () => {
  return (
    <div className='max-md:h-[120vh] md:h-[100vh] w-full flex items-center justify-center'>
      <div className=''>
        <h1 className='text-center text-4xl'>ABOUT ME</h1>

        <div className='flex-col mt-4 md:text-xl'>
          <p className='mt-3'>
            ▫️ Hii Everyone, My name is Yashkumar Saini
          </p>
          <p className='mt-3'>
            ▫️  I'm a second-year undergraduate student pursuing a Bachelor of Science in Computer Science.
          </p>
          <p className='mt-3'>
            ▫️ I am a Full Stack Developer and currently I am exploring new blockchain technologies and data structures and algorithms.
          </p>
          <p className='mt-3'>
            ▫️ I compete in programming contests and am working to get better at it.
          </p>
          <p className='mt-3'>
            ▫️ Solved 250+ problems on <Link to='https://leetcode.com/u/yashh56/' target='_blank' className='underline'>LeetCode</Link> and have a rating of 1700+.
          </p>

          <p className='mt-3'>
            ▫️ My hobbies are watching anime, cricket, and reading books .
          </p>

        </div>
        <div>
          <h1 className='text-3xl mt-8'>
            Skills
          </h1>
          <div className='flex max-md:justify-evenly flex-wrap gap-4 mt-2'>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`px-4 py-2 rounded-full text-white font-bold text-sm ${skill.color} transform transition-transform hover:scale-110`}
              >
                {skill.name}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe