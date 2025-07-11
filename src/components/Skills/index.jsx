import './index.css';
import react from "../../assets/reactlogo.png"
import node from "../../assets/nodejslogo.png"
import python from "../../assets/pythonlogo.png"
import html from "../../assets/htmllogo.png"
import css from "../../assets/csslogo.png"
import sql from "../../assets/sqllogo.png"
import js from "../../assets/jslogo.png"
import git from "../../assets/gitlogo.png"
import mongodb from "../../assets/mongodblogo.png"
const skillsList = [
  {
    imgurl: react,
    name: "React.js",
    description: "Component-based UI library for fast rendering.",
  },
  {
    imgurl: node,
    name: "Node.js",
    description: "Backend runtime for building scalable APIs.",
  },
  {
    imgurl: sql,
    name: "SQL",
    description: "Structured database queries and data modeling.",
  },
  {
    imgurl: html,
    name: "HTML",
    description: "Semantic structure for web content and layouts.",
  },
  {
    imgurl: css,
    name: "CSS3",
    description: "Styling web elements for responsive, clean design.",
  },
  {
    imgurl: js,
    name: "JavaScript",
    description: "Dynamic interactivity and browser-based logic.",
  },
  {
    imgurl: python,
    name: "Python",
    description: "Versatile language for scripting and backend logic.",
  },
  {
  imgurl: mongodb,
  name: "MongoDB",
  description: "NoSQL database for scalable, document-based data storage.",
  },
  {
    imgurl: git,
    name: "Git & GitHub",
    description: "Version control and project collaboration.",
  }
];



const Skills=()=> {
  return (
    <div className='skills-bg-container'>
      <h1 className='skills-heading' data-aos="fade-right" data-aos-delay="50">Skills</h1>
      <p className='skills-tagline' data-aos="fade-in" data-aos-delay="500">My top technical skills for building modern web apps.</p>
      <ul>
        {
          skillsList.map((each,i)=>(
            <li className='list-con' key={i} data-aos="fade-up" data-aos-delay={i*300}>
              <div className='img-con'>
                <img className='skill-img' src={each.imgurl} alt={each.name}/>
              </div>
              <div>
                <h1 className='skill-name'>{each.name}</h1>
                <p className='skill-desc'>{each.description}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Skills;
