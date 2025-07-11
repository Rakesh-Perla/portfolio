import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import jobbyImg from '../../assets/projectsThumbnails/jobby app thumbnail image.png';
import moneyManager from "../../assets/projectsThumbnails/money manager thumbnail image.png"
import emojiGame from "../../assets/projectsThumbnails/emoji game thumbnail image.png"
import matchGame from "../../assets/projectsThumbnails/match game thumbnail image.png"
import salesTracker from "../../assets/projectsThumbnails/sales tracker thumbnail image.png"
import rps from "../../assets/projectsThumbnails/rock paper scissors thumbnail image.png"
import portfolioImage from "../../assets/projectsThumbnails/portfolio thumbnail image.png"

const projectsList = [
  {
  title: 'Portfolio Website',
  image: portfolioImage,
  techStack: ['React','HTML', 'CSS', 'JavaScript','Aos'],
  description: 'Personal portfolio showcasing skills, projects, certificates, and contact info with a clean responsive design.',
  demoLink: 'https://rakesh-perla-portfolio.vercel.app/',
  githubLink: 'https://github.com/Rakesh-Perla/portfolio',
},
  {
    title: 'Jobby App',
    image: jobbyImg,
    techStack: ['React', "Node & Express","SQL", "HTML", 'CSS', 'REST API'],
    description: 'Job portal with secure login, job filtering, search functionality, protected routes, and detailed job descriptions',
    demoLink: 'https://jobby.live',
    githubLink: 'https://github.com/Rakesh-Perla/jobby-app',
  },
  {
    title: 'Sales Tracker',
    image: salesTracker,
    techStack: ['React', 'Node.js','MongoDB', 'Express',"HTML", 'CSS', 'REST API'],
    description: 'Dashboard to track sales and revenue, with visual graphs and filtering.',
    demoLink: 'https://sales-tracker.live',
    githubLink: 'https://github.com/Rakesh-Perla/sales-tracker',
  },
  {
    title: 'Money Manager',
    image: moneyManager,
    techStack: ['React', "HTML", 'CSS',"SQLITE","Node/Express"],
    description: 'Simple expense tracking app to manage your income and expenses with live balance updates.',
    demoLink: 'https://track-expences-by-rakesh.vercel.app/',
    githubLink: 'https://github.com/Rakesh-Perla/money-manager',
  },
  {
    title: 'Emoji Game',
    image: emojiGame,
    techStack: ['React', 'CSS',"Javascript"],
    description: 'Memory-based game where users must click unique emojis without repetition.',
    demoLink: 'https://emoji-game-by-rakesh.vercel.app/',
    githubLink: 'https://github.com/Rakesh-Perla/emoji-game',
  },
  {
    title: 'Image Match Game',
    image: matchGame,
    techStack: ['React', 'CSS', "Javascript"],
    description: 'Fun emoji matching game where users match emojis under time constraints.',
    demoLink: 'https://match-game-by-rakesh.vercel.app/',
    githubLink: 'https://github.com/Rakesh-Perla/match-game',
  },
  {
    title: 'Rock Paper Scissors',
    image: rps,
    techStack: ['React', 'CSS'],
    description: 'Classic Rock-Paper-Scissors game built with React, featuring score tracking and auto play.',
    demoLink: 'https://rock-paper-scissors-game-by-rakesh.vercel.app/',
    githubLink: 'https://github.com/Rakesh-Perla/rock-paper-scissors-game',
  },
  // Add more...
];

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 767, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };

  return (
    <div className="projects-section">
      <h2 className='skills-heading' data-aos="fade-right">Projects</h2>
      <p className='skills-tagline' data-aos="fade-right" data-aos-delay="500">Some of the work I'm proud of</p>
      <div className='slider-con-mobile'>
        <Slider {...settings} className="slider-container">
          {projectsList.map((project, index) => (
            <div className="project-card" key={index} data-aos="fade-in" data-aos-delay="400">
              <div className='project-img-con'>
                  <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-details">
                <h2>{project.title}</h2>
                <p className="desc">{project.description}</p>
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="links">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
