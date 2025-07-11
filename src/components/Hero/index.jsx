import './index.css';

const Hero = () => {
  return (
    <div className='bg-container'>
        <div className="hero-container">
            <h1
                className="hero-title"
                data-aos="fade-down"
                data-aos-delay="100"
            >
                Hey, I'm <span className="highlight">Rakesh Perla</span>
            </h1>

            <h2
                className="hero-subtitle"
                data-aos="fade-down"
                data-aos-delay="400"
            >
                Full Stack Developer
            </h2>

            <div
                className="hero-desc"
                data-aos="fade-down"
                data-aos-delay="750">
                    <p className='exp-count'>2+</p>
                    <p className='exp-desc'>years of hands on experience <br/>
                    in web development</p>
            </div>
            <p
                className="hero-desc"
                data-aos="fade-down"
                data-aos-delay="900">
                contributed to <br/>project developments<span className='exp-count'>10+</span> 
            </p>
        </div>
        <div className='right-card'
            data-aos="fade-left"
            data-aos-delay="800">
            <h1 className='outlined-text'>RAKESH PERLA</h1>
        </div>
    </div>
  );
}

export default Hero;

