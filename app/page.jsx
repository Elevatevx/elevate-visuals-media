export default function HomePage() {
  const services = [
    {
      title: "Photography",
      text: "Sharp, professional images for brands, artists, events, and real estate.",
    },
    {
      title: "Videography",
      text: "Cinematic edits built for websites, social media, and promotions.",
    },
    {
      title: "Drone Services",
      text: "Aerial shots that instantly elevate homes, businesses, and events.",
    },
    {
      title: "Real Estate Media",
      text: "Clean interior, exterior, and aerial coverage that helps listings stand out.",
    },
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$100",
      items: ["10–15 Photos", "1 Location", "1 Hour Shoot"],
      featured: false,
    },
    {
      name: "Standard",
      price: "$200",
      items: ["20–30 Photos", "Short Video", "Drone Shots Included"],
      featured: true,
    },
    {
      name: "Premium",
      price: "$350",
      items: ["30+ Photos", "Cinematic Video", "Full Drone Coverage"],
      featured: false,
    },
    {
      name: "Real Estate",
      price: "$150",
      items: ["15–20 Photos", "Drone Shots", "Perfect for listings"],
      featured: false,
    },
  ];

  const heroTags = ["Photography", "Videography", "Drone Shoots", "Real Estate"];

  return (
    <main>
      <section className="hero">
        <div className="overlay" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="container hero-grid">
          <div>
            <div className="pill">Elevate Visuals Media</div>
            <h1>
              Luxury <span>Photo</span>, <span>Video</span> &amp; <span>Drone</span> Content
            </h1>
            <p className="lead">
              High-end visuals for real estate, businesses, artists, and brands that want to
              stand out.
            </p>

            <div className="hero-actions">
              <a href="tel:3055528224" className="btn btn-primary">
                Call Now
              </a>
              <a href="mailto:elevatevx@gmail.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>

            <div className="tag-grid">
              {heroTags.map((item) => (
                <div key={item} className="tag-card">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="image-grid">
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80"
                alt="Drone over luxury home"
              />
            </div>
            <div className="image-card image-card-offset">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80"
                alt="Professional camera work"
              />
            </div>
            <div className="image-card image-wide">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury interior real estate photography"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section container center-text">
        <p className="eyebrow">Services</p>
        <h2>Content that makes you look premium</h2>
        <p className="section-copy">
          Whether you need listing media, brand content, artist visuals, or aerial footage, we
          create polished visuals that grab attention.
        </p>

        <div className="card-grid four-up">
          {services.map((service) => (
            <div key={service.title} className="glass-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="feature-panel">
          <div className="feature-grid">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2>Simple packages, premium results</h2>
              <p className="section-copy left-copy">
                Start with a package that fits your goals and upgrade anytime with custom edits or
                extra coverage.
              </p>
            </div>

            <div className="card-grid two-up">
              {pricing.map((plan) => (
                <div key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
                  <div className="price-top">
                    <h3>{plan.name}</h3>
                    {plan.featured && <span className="badge">Most Popular</span>}
                  </div>
                  <div className="price">{plan.price}</div>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>We help you look professional from the first impression</h2>
            <div className="check-list">
              <p>✔ High-end visuals with a luxury feel</p>
              <p>✔ Fast turnaround and clean edits</p>
              <p>✔ Perfect for real estate, businesses, artists, and social media</p>
              <p>✔ Easy booking by phone, email, or Instagram</p>
            </div>
          </div>

          <div className="glass-card contact-card">
            <h3>Ready to elevate your content?</h3>
            <p>
              Let’s create visuals that grab attention and make your brand look next-level.
            </p>

            <div className="contact-links">
              <a href="tel:3055528224">📞 305-552-8224</a>
              <a href="mailto:elevatevx@gmail.com">📧 elevatevx@gmail.com</a>
              <a href="https://instagram.com/elevatevisualsmedia" target="_blank" rel="noreferrer">
                📲 @elevatevisualsmedia
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © 2026 Elevate Visuals Media • Elevate your brand. Capture your moment.
      </footer>
    </main>
  );
}
