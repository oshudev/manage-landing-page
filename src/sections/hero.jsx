import heroIllustration from '@/assets/illustration-intro.svg';
import pill from '@/assets/bg-tablet-pattern.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="pill">
          <img src={pill} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="img-container">
          <img src={heroIllustration} alt="" />
        </div>
        <div className="content-container">
          <div className="text-container">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
          </div>
          <a href="#" className="button button--primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
