import Image from "next/image";

const publications = [
  {
    year: "2026",
    venue: "KDD 2026",
    title:
      "Compress the Easy, Explore the Hard: Difficulty-Aware Entropy Regularization for Efficient LLM Reasoning",
    authors:
      "Qin-Wen Luo, Sheng Ren, Xiang Chen, Rui Liu, Jun Fang, Naiqiang Tan, Sheng-Jun Huang",
    description:
      "Difficulty-aware entropy regularization that shortens reasoning on easy problems while preserving exploration on hard ones.",
    paper: "https://arxiv.org/abs/2602.22642",
    code: "https://github.com/QinwenLuo/CEEH",
    tone: "mint",
    short: "CEEH",
  },
  {
    year: "2025",
    venue: "ICML 2025",
    title:
      "Learning to Trust Bellman Updates: Selective State-Adaptive Regularization for Offline RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description:
      "State-adaptive regularization for balancing Bellman-driven learning and conservative offline RL updates.",
    paper: "https://arxiv.org/abs/2505.19923",
    code: "https://github.com/QinwenLuo/SSAR",
    tone: "blue",
    short: "SSAR",
  },
  {
    year: "2024",
    venue: "NeurIPS 2024",
    title:
      "Optimistic Critic Reconstruction and Constrained Fine-Tuning for General Offline-to-Online RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description:
      "A general offline-to-online framework that reconstructs the critic before stable constrained fine-tuning.",
    paper: "https://arxiv.org/abs/2412.18855",
    code: "https://github.com/QinwenLuo/OCR-CFT",
    tone: "peach",
    short: "OCR-CFT",
  },
];

const interests = [
  {
    number: "01",
    title: "Offline Reinforcement Learning",
    text: "Reliable policy learning from fixed datasets, with selective regularization and trustworthy value updates.",
  },
  {
    number: "02",
    title: "Offline-to-Online RL",
    text: "Turning offline initialization into stable online improvement under distribution shift.",
  },
  {
    number: "03",
    title: "Efficient LLM Reasoning",
    text: "Adaptive exploration and concise reasoning without sacrificing difficult-problem performance.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Qinwen Luo home">
          Q<span>L</span>
        </a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
        </div>
        <a
          className="nav-cta"
          href="https://github.com/QinwenLuo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow />
        </a>
      </nav>

      <div className="page-shell" id="top">
        <aside className="profile-column">
          <div className="profile-card">
            <div className="portrait-wrap">
              <Image
                src="/profile.png"
                alt="Qinwen Luo"
                className="portrait"
                width="520"
                height="520"
                priority
              />
              <span className="status-dot" title="Open to research conversations" />
            </div>
            <p className="eyebrow">Researcher</p>
            <h1>Qinwen Luo</h1>
            <p className="role">Reinforcement Learning &amp; LLM Reasoning</p>
            <p className="profile-note">
              Building reliable learning systems that know when to trust,
              explore, and adapt.
            </p>
            <div className="profile-links">
              <a
                href="https://github.com/QinwenLuo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a href="#publications">Selected work ↓</a>
            </div>
          </div>

          <div className="mini-card">
            <span>Currently exploring</span>
            <strong>Selective adaptation</strong>
            <p>Across offline RL and efficient reasoning.</p>
          </div>
        </aside>

        <div className="content-column">
          <header className="hero" id="about">
            <p className="section-kicker">Hello, I&apos;m Qinwen.</p>
            <h2>
              I work on learning systems that are
              <em> reliable by design.</em>
            </h2>
            <p className="hero-copy">
              My research spans offline reinforcement learning,
              offline-to-online adaptation, and efficient LLM reasoning. I am
              especially interested in how a model can adapt its behavior to
              uncertainty and problem difficulty—conservative when needed,
              exploratory when useful.
            </p>
            <div className="hero-stats" aria-label="Research highlights">
              <div>
                <strong>3</strong>
                <span>selected papers</span>
              </div>
              <div>
                <strong>2</strong>
                <span>research threads</span>
              </div>
              <div>
                <strong>’24—’26</strong>
                <span>recent work</span>
              </div>
            </div>
          </header>

          <section className="section-block" id="research">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Research interests</p>
                <h2>Questions I care about</h2>
              </div>
              <p>
                A focused agenda around reliable decisions, distribution
                shifts, and efficient exploration.
              </p>
            </div>
            <div className="interest-grid">
              {interests.map((interest) => (
                <article className="interest-card" key={interest.number}>
                  <span>{interest.number}</span>
                  <h3>{interest.title}</h3>
                  <p>{interest.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="publications">
            <div className="section-heading publications-heading">
              <div>
                <p className="section-kicker">Selected publications</p>
                <h2>Recent work</h2>
              </div>
              <a
                className="text-link"
                href="https://github.com/QinwenLuo"
                target="_blank"
                rel="noreferrer"
              >
                View all code <Arrow />
              </a>
            </div>

            <div className="publication-list">
              {publications.map((publication) => (
                <article className="publication" key={publication.title}>
                  <div className={`paper-mark ${publication.tone}`}>
                    <span>{publication.year}</span>
                    <strong>{publication.short}</strong>
                    <i />
                  </div>
                  <div className="paper-content">
                    <div className="paper-meta">
                      <span>{publication.venue}</span>
                      <span>{publication.year}</span>
                    </div>
                    <h3>{publication.title}</h3>
                    <p className="authors">{publication.authors}</p>
                    <p className="paper-description">{publication.description}</p>
                    <div className="paper-links">
                      <a href={publication.paper} target="_blank" rel="noreferrer">
                        Paper <Arrow />
                      </a>
                      <a href={publication.code} target="_blank" rel="noreferrer">
                        Code <Arrow />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-card">
            <div>
              <p className="section-kicker">Let&apos;s connect</p>
              <h2>Interested in reliable learning systems?</h2>
            </div>
            <a
              href="https://github.com/QinwenLuo"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <Arrow />
            </a>
          </section>
        </div>
      </div>

      <footer>
        <p>© 2026 Qinwen Luo</p>
        <p>Designed for clear ideas and careful research.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
