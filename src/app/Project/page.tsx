// pages/projects.tsx
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Project 1',
    description: 'Fast Food Website',
    image: '/assets/Project-1.png', // Replace with your image path
    viewLink: 'https://tahakhankoti.github.io/Fast-Food-Website/',
    githubLink: 'https://github.com/TahaKhankoti/Fast-Food-Website',
  },
  {
    title: 'Project 2',
    description: 'Design Your Home Website',
    image: '/assets/Project-2.png',
    viewLink: 'https://tahakhankoti.github.io/Assignment-No-3/',
    githubLink: 'https://github.com/TahaKhankoti/Assignment-No-3',
  },
  {
    title: 'Project 3',
    description: 'Mobilex Website',
    image: '/assets/Project-3.png',
    viewLink: 'https://tahakhankoti.github.io/Mobile-Web/',
    githubLink: 'https://github.com/TahaKhankoti/Mobile-Web',
  },
  {
    title: 'Project 4',
    description: 'Services Shoe Website',
    image: '/assets/Project-4.png',
    viewLink: 'https://tahakhankoti.github.io/Services-Web-Page/',
    githubLink: 'https://github.com/TahaKhankoti/Services-Web-Page',
  },
  {
    title: 'Project 5',
    description: 'Techno Mobile Website',
    image: '/assets/Project-5.png',
    viewLink: 'https://viewlink5.com',
    githubLink: 'https://github.com/username/project5',
  },
  {
    title: 'Project 6',
    description: 'Facebook Page',
    image: '/assets/Project-6.png',
    viewLink: 'https://tahakhankoti.github.io/Assignment-No-4/',
    githubLink: 'https://github.com/TahaKhankoti/Assignment-No-4',
  },
  {
    title: 'Project 7',
    description: 'Portfolio',
    image: '/assets/Project-7.png',
    viewLink: 'https://viewlink7.com',
    githubLink: 'https://github.com/username/project7',
  },
];

const Project = () => (
  <>
    
    <main className="container mx-auto p-5 bg-slate-500">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-slate-900 underline">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-900 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <Link href={project.viewLink} className="text-blue-500 hover:underline">
                <h6 className=' text-1xl text-blue-900'>View Project</h6>
                </Link>
                <Link href={project.githubLink} className="text-blue-700 hover:text-gray">
                <h6>github</h6>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Project;
