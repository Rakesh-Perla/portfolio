
import './index.css';
import front from "../../assets/frontenddevlogo.png"
import back from "../../assets/backenddevlogo.png"
import full from "../../assets/fullstackdevlogo.png"
import dbase from "../../assets/databasedevlogo.png"

const servicesList = [
  {
    imageurl:front,
    title: "Front-End Development",
    desc: "Crafting responsive and accessible user interfaces using React, HTML, CSS, and JavaScript to deliver smooth user experiences."
  },
  {
    imageurl:back,
    title: "Back-End Development",
    desc: "Building robust REST APIs with Node.js, Express.js and integrating with databases, focusing on performance, security, and scalability."
  },
  {
    imageurl:full,
    title: "Full-Stack Web Development",
    desc: "Combining frontend and backend technologies to create end-to-end web applications that are production-ready."
  },
  {
    imageurl:dbase,
    title: "Database Management",
    desc: "Designing, querying, and managing structured and unstructured data using SQL and MongoDB efficiently."
  }
];

function Services() {
  return (
    <div className="services-bg-container" id="services">
      <h1 className='skills-heading' data-aos="fade-right">Services</h1>
      <p className="skills-tagline" data-aos="fade-right" data-aos-delay="400">
        What I can do for you
      </p>

      <div className="services-grid">
        {servicesList.map((each, idx) => (
          <div
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={idx * 450}
            key={idx}
          >
            <div className='service-image-con'>
                <img className='service-image' src={each.imageurl} alt={each.title}/>
            </div>
            <h3>{each.title}</h3>
            <p>{each.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
