import { useState } from 'react';

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#home" aria-label="RoadTrip Match home">
      <span className="brand-mark" aria-hidden="true">↗</span> roadtrip<span>match</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#how-it-works">How it works</a>
        <a href="#inspiration">Get inspired</a>
      </nav>
      <a className="header-cta" href="#planner">Plan a trip <span aria-hidden="true">→</span></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" role="img" aria-label="A winding road through a mountain landscape" />
      <div className="hero-content">
        <p className="eyebrow"><span /> GOOD ROADS. GREAT STORIES.</p>
        <h1>The best part<br />is getting <em>there.</em></h1>
        <p className="hero-copy">Pick a direction. We’ll help you find the stops, side roads, and small surprises that make the miles memorable.</p>
        <a className="text-link" href="#planner">Let’s map it out <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-note"><span className="note-line" /><span>TAKE THE LONG WAY</span></div>
      <div className="image-credit">YOUR NEXT GREAT STORY STARTS HERE</div>
    </section>
  );
}

function Planner() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const start = origin.trim();
    const end = destination.trim();
    if (!start || !end) return;
    setRoute({ origin: start, destination: end });
  }

  return (
    <section className="planner-section" id="planner">
      <div className="section-intro">
        <p className="eyebrow dark"><span /> YOUR NEXT GETAWAY</p>
        <h2>Where to, <em>roadtripper?</em></h2>
        <p>Start with two places. The fun stuff in between comes next.</p>
      </div>
      <form className="trip-form" onSubmit={handleSubmit}>
        <label className="location-field">
          <span className="field-icon origin-icon" aria-hidden="true" />
          <span className="field-copy"><span className="field-label">STARTING FROM</span>
            <input value={origin} onChange={(event) => setOrigin(event.target.value)} autoComplete="address-level2" placeholder="City or starting point" required />
          </span>
        </label>
        <span className="route-connector" aria-hidden="true"><span /></span>
        <label className="location-field">
          <span className="field-icon destination-icon" aria-hidden="true" />
          <span className="field-copy"><span className="field-label">HEADED TO</span>
            <input value={destination} onChange={(event) => setDestination(event.target.value)} autoComplete="address-level2" placeholder="Where do you want to go?" required />
          </span>
        </label>
        <button className="plan-button" type="submit">Find my route <span aria-hidden="true">→</span></button>
      </form>
      {route && (
        <div className="route-result" aria-live="polite">
          <span className="result-pin" aria-hidden="true">↗</span>
          <div><strong>Your road trip starts here.</strong>
            <p>{route.origin} <span aria-hidden="true">→</span> {route.destination} is on your list. Route planning is coming soon—until then, start collecting your favorite stops.</p>
          </div>
        </div>
      )}
      <p className="planner-footnote">No rigid itineraries. Just good ideas for the road ahead.</p>
    </section>
  );
}

const tripIdeas = [
  { kind: 'coast', number: '01 / COASTAL', title: 'Chase the coastline', description: 'Salt air, open windows, no rush.' },
  { kind: 'mountains', number: '02 / MOUNTAIN', title: 'Go where it gets quiet', description: 'Fresh air and room to roam.' },
  { kind: 'smalltown', number: '03 / SMALL TOWN', title: 'Stay for one more night', description: 'Find the place you didn’t plan for.' },
];

function Inspiration() {
  return (
    <section className="inspiration" id="inspiration">
      <div className="inspiration-heading">
        <div><p className="eyebrow dark"><span /> A LITTLE INSPIRATION</p><h2>Take a scenic <em>detour.</em></h2></div>
        <p>Because the best discoveries<br />rarely come with an exit number.</p>
      </div>
      <div className="idea-grid">
        {tripIdeas.map((idea) => (
          <article className={`idea-card card-${idea.kind}`} key={idea.kind}>
            <div className="card-number">{idea.number}</div>
            <div><h3>{idea.title}</h3><p>{idea.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

const steps = [
  ['Choose your two points', 'Start with where you are and where you’re curious about.'],
  ['Leave room for the good stuff', 'Get ideas for the scenic stops and detours along your way.'],
  ['Hit the road', 'Make it your own. The best plans always leave a little room.'],
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-copy"><p className="eyebrow"><span /> LESS PLANNING. MORE GOING.</p><h2>A road trip<br />should feel like <em>freedom.</em></h2></div>
      <div className="steps">
        {steps.map(([title, description], index) => (
          <div className="step" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return <footer><Brand footer /><p>Made for the miles in between.</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>;
}

export default function App() {
  return <><Header /><main id="home"><Hero /><Planner /><Inspiration /><HowItWorks /></main><Footer /></>;
}
