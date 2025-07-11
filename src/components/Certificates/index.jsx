import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import cert1 from "../../assets/certificate/html css bs_cert.jpg";
import cert2 from '../../assets/certificate/Javascript_cert.jpg';
import cert3 from '../../assets/certificate/bs flexbox_cert.jpg';
import cert4 from "../../assets/certificate/pythonnw_cert.jpg";
import cert5 from '../../assets/certificate/python simple learn_cert.png';
import cert6 from '../../assets/certificate/sql_cert.jpg';
import cert7 from "../../assets/certificate/Git_cert.jpg";
import cert8 from '../../assets/certificate/bentley_cert.jpg';
import cert9 from '../../assets/certificate/celonis_cert.png';
import cert10 from "../../assets/certificate/cs-workshop_cert.png";
import cert11 from '../../assets/certificate/flexbox_cert.jpg';
import cert12 from '../../assets/certificate/gen-ai_cert.png';
import cert13 from '../../assets/certificate/jhub_cert.jpg';
import cert14 from "../../assets/certificate/mathwork_cert.jpg";
import cert15 from '../../assets/certificate/ml virtual internship cert.png';
import cert16 from '../../assets/certificate/ml_cert.png';
import cert17 from '../../assets/certificate/ui-ux workshop_cert.png';
// Import all certificates...

const certificates = [cert1, cert2, cert3,cert4,cert5,cert6,cert7,cert8,cert9,cert10,cert11,cert12,cert13,cert14,cert15,cert16,cert17];

const Certificates = () => {
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 5000, 
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear', 
    slidesToShow: 4,  
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="services-bg-container">
      <h2 className='skills-heading' data-aos="fade-right" data-aos-delay="100">Certificates</h2>
      <p className="skills-tagline" data-aos="fade-right" data-aos-delay="300">
        Verified certifications showcasing my skills.
      </p>

      <Slider {...settings} className="certificates-slider">
        {certificates.map((img, idx) => (
          <div key={idx} className="cert-card" data-aos="fade-in" data-aos-delay="400">
            <img src={img} alt={`certificate-${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
