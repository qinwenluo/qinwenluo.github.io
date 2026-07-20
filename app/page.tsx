import Image from "next/image";

const publications = [
  {
    index: "J3",
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
    tags: ["LLM Reasoning", "Reinforcement Learning"],
  },
  {
    index: "J2",
    year: "2025",
    venue: "ICML 2025",
    title:
      "Learning to Trust Bellman Updates: Selective State-Adaptive Regularization for Offline RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description:
      "State-adaptive regularization for balancing Bellman-driven learning and conservative offline RL updates.",
    paper: "https://arxiv.org/abs/2505.19923",
    code: "https://github.com/QinwenLuo/SSAR",
    tags: ["Offline RL", "Regularization"],
  },
  {
    index: "J1",
    year: "2024",
    venue: "NeurIPS 2024",
    title:
      "Optimistic Critic Reconstruction and Constrained Fine-Tuning for General Offline-to-Online RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description:
      "A general offline-to-online framework that reconstructs the critic before stable constrained fine-tuning.",
    paper: "https://arxiv.org/abs/2412.18855",
    code: "https://github.com/QinwenLuo/OCR-CFT",
    tags: ["Offline-to-Online RL", "Policy Fine-Tuning"],
  },
];

const interests = [
  {
    title: "Offline & Skill-based RL",
    text: "Practical reinforcement learning from fixed datasets, reusable skills, and limited online interaction.",
  },
  {
    title: "RL for Large Models",
    text: "Reinforcement learning algorithms for large models, efficient reasoning, and emerging training paradigms.",
  },
  {
    title: "Embodied Intelligence",
    text: "Connecting reinforcement learning with agents that perceive and act, including VLA and WAM models.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Qinwen Luo home">
          Qinwen Luo
        </a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a className="active" href="#publications">Selected Publications</a>
          <a href="https://github.com/QinwenLuo" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </nav>

      <div className="page-shell">
        <section className="intro" id="about">
          <aside className="profile">
            <Image
              src="/profile.jpg"
              alt="Portrait of Qinwen Luo"
              className="portrait"
              width={420}
              height={420}
              priority
            />
            <h1>Qinwen Luo</h1>
            <p className="role">Ph.D. Student</p>
            <p className="affiliation">
              Nanjing University of Aeronautics and Astronautics
            </p>
            <div className="profile-links">
              <a href="https://github.com/QinwenLuo" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href="#publications">Publications ↓</a>
            </div>
            <blockquote>
              “<em>认清</em>你之<em>所是</em>，<em>成为</em>你之<em>所是</em>。”
            </blockquote>
          </aside>

          <div className="about">
            <p className="section-label">About</p>
            <h2>Learning systems that reason, adapt, and act.</h2>
            <p>
              I am a second-year Ph.D. student in Computer Science and Technology
              at Nanjing University of Aeronautics and Astronautics (NUAA), advised
              by Professor{" "}
              <a href="https://parnec.nuaa.edu.cn/huangsj/" target="_blank" rel="noreferrer">
                Sheng-Jun Huang
              </a>
              . I received my M.S. degree in Computer Science from NUAA in 2025,
              also under his supervision.
            </p>
            <p>
              My research spans the foundations of reinforcement learning and its
              practical applications. I study offline and skill-based RL, RL for
              large models and new learning paradigms, and the connection between
              RL and embodied intelligence—including VLA and WAM models. Together,
              these directions ask how agents can learn reliably from imperfect
              experience, reason about unfamiliar situations, and turn decisions
              into effective actions.
            </p>

            <div className="education" aria-label="Education">
              <div>
                <span>Present</span>
                <p><strong>Ph.D. Student</strong><br />Computer Science and Technology · NUAA</p>
              </div>
              <div>
                <span>2025</span>
                <p><strong>M.S. in Computer Science</strong><br />Nanjing University of Aeronautics and Astronautics</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-title-row">
            <div>
              <p className="section-label">Research</p>
              <h2>Research Interests</h2>
            </div>
            <p>From algorithmic foundations to agents operating in the physical world.</p>
          </div>
          <div className="interest-grid">
            {interests.map((interest, index) => (
              <article className="interest-card" key={interest.title}>
                <span>0{index + 1}</span>
                <h3>{interest.title}</h3>
                <p>{interest.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="publication-heading">
            <p className="section-label">Research output</p>
            <h2>Selected Publications</h2>
            <p>Three publication(s). Qin-Wen Luo is highlighted as the primary author.</p>
          </div>

          <div className="year-strip" aria-label="Publication years">
            <span>Year</span>
            <div>
              <span>2026</span>
              <span>2025</span>
              <span>2024</span>
            </div>
            <span>Conference</span>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <div className="paper-topline">
                  <span className="paper-index">[{publication.index}]</span>
                  <span className="venue">{publication.venue}</span>
                </div>
                <h3>{publication.title}</h3>
                <p className="authors">
                  <strong>Qin-Wen Luo</strong>{publication.authors.replace("Qin-Wen Luo", "")}
                </p>
                <p className="paper-description">{publication.description}</p>
                <div className="paper-footer">
                  <div className="tags">
                    {publication.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="paper-links">
                    <a href={publication.paper} target="_blank" rel="noreferrer">Paper <Arrow /></a>
                    <a href={publication.code} target="_blank" rel="noreferrer">Code <Arrow /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer>
        <p>© 2026 Qinwen Luo</p>
        <p>Reinforcement Learning · Large Models · Embodied Intelligence</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
