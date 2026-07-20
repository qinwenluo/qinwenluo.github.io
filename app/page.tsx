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
    title: "Offline & Skill-based RL",
    text: "Reinforcement learning settings with strong potential for real-world use, including offline RL and skill-based RL.",
  },
  {
    number: "02",
    title: "RL for Large Models",
    text: "Reinforcement learning for large models, with an emphasis on effective algorithms and emerging learning paradigms.",
  },
  {
    number: "03",
    title: "Embodied Intelligence",
    text: "The intersection of reinforcement learning and embodied agents, including VLA and WAM models.",
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
          Qinwen Luo
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
                src="/profile.jpg"
                alt="Qinwen Luo"
                className="portrait"
                width="520"
                height="520"
                priority
              />
              <span className="status-dot" title="Open to research conversations" />
            </div>
            <p className="eyebrow">Ph.D. Student</p>
            <h1>Qinwen Luo</h1>
            <p className="profile-note profile-quote">
              “<em>认清</em>你之<em>所是</em>，<em>成为</em>你之<em>所是</em>。”
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
            <strong>RL × Embodied Intelligence</strong>
            <p>From learning algorithms to agents that reason and act.</p>
          </div>
        </aside>

        <div className="content-column">
          <header className="hero" id="about">
            <p className="section-kicker">About me</p>
            <h2>About Me</h2>
            <div className="about-copy">
              <p>
                I am a second-year Ph.D. student in Computer Science and
                Technology at Nanjing University of Aeronautics and
                Astronautics (NUAA), advised by Professor{" "}
                <a
                  href="https://parnec.nuaa.edu.cn/huangsj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sheng-Jun Huang
                </a>
                . I received my M.S. degree in Computer Science from NUAA in
                2025, also under his supervision.
              </p>
              <p>
                My research interests span the foundations of reinforcement
                learning algorithms and their real-world applications. I study
                practical RL settings such as offline and skill-based RL,
                reinforcement learning for large models and new learning
                paradigms, and the intersection of RL with embodied
                intelligence—including VLA and WAM models. Across these
                directions, I aim to connect reliable learning from imperfect
                data with agents that can reason, adapt, and act in complex
                environments.
              </p>
            </div>
            <div className="academic-timeline" aria-label="Academic background">
              <div>
                <span>Present</span>
                <p><strong>Ph.D. Student</strong> · Computer Science and Technology, NUAA</p>
              </div>
              <div>
                <span>2025</span>
                <p><strong>M.S. in Computer Science</strong> · NUAA</p>
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
                From reinforcement learning foundations to large models and
                embodied agents that operate in the real world.
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
