const Hero = () => {
  return (
    <main className="hero   container">
      <div className="hero-content">
        <h1>YOU DESERVE THE BEST QUALITY</h1>
        <p>STEP INTO A WORLD OF ENDLESS STORIES, KNOWLEDGE,
          <span>AND INSPIRATION. EXPLORE BOOKS.</span> </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/daraz.png" alt="Daraz logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img className="pic" src="/images/pic3.jpg" alt="" />
      </div>
    </main>
  );
};

export default Hero;
