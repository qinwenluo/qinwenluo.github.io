"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const publications = [
  {
    index: "J3",
    year: "2026",
    venue: "KDD 2026",
    type: "Conference",
    title: "Compress the Easy, Explore the Hard: Difficulty-Aware Entropy Regularization for Efficient LLM Reasoning",
    authors: "Qin-Wen Luo, Sheng Ren, Xiang Chen, Rui Liu, Jun Fang, Naiqiang Tan, Sheng-Jun Huang",
    description: "Difficulty-aware entropy regularization that shortens reasoning on easy problems while preserving exploration on hard ones.",
    paper: "https://arxiv.org/abs/2602.22642",
    code: "https://github.com/QinwenLuo/CEEH",
    tags: ["LLM Reasoning", "Reinforcement Learning"],
  },
  {
    index: "J2",
    year: "2025",
    venue: "ICML 2025",
    type: "Conference",
    title: "Learning to Trust Bellman Updates: Selective State-Adaptive Regularization for Offline RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description: "State-adaptive regularization for balancing Bellman-driven learning and conservative offline RL updates.",
    paper: "https://arxiv.org/abs/2505.19923",
    code: "https://github.com/QinwenLuo/SSAR",
    tags: ["Offline RL", "Regularization"],
  },
  {
    index: "J1",
    year: "2024",
    venue: "NeurIPS 2024",
    type: "Conference",
    title: "Optimistic Critic Reconstruction and Constrained Fine-Tuning for General Offline-to-Online RL",
    authors: "Qin-Wen Luo, Ming-Kun Xie, Ye-Wen Wang, Sheng-Jun Huang",
    description: "A general offline-to-online framework that reconstructs the critic before stable constrained fine-tuning.",
    paper: "https://arxiv.org/abs/2412.18855",
    code: "https://github.com/QinwenLuo/OCR-CFT",
    tags: ["Offline-to-Online RL", "Policy Fine-Tuning"],
  },
];

const interests = [
  ["Offline & Skill-based RL", "Practical reinforcement learning from fixed datasets, reusable skills, and limited online interaction."],
  ["RL for Large Models", "Reinforcement learning algorithms for large models, efficient reasoning, and emerging training paradigms."],
  ["Embodied Intelligence", "Connecting reinforcement learning with agents that perceive and act, including VLA and WAM models."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const [showFilters, setShowFilters] = useState(true);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return publications.filter((publication) => {
      const matchesYear = year === "All" || publication.year === year;
      const haystack = `${publication.title} ${publication.authors} ${publication.venue} ${publication.tags.join(" ")}`.toLowerCase();
      return matchesYear && (!normalized || haystack.includes(normalized));
    });
  }, [query, year]);

  return (
    <main id="top">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Qinwen Luo</a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a className="active" href="#publications">Selected Publications</a>
          <a href="#research">Research Interests</a>
          <a href="https://github.com/QinwenLuo" target="_blank" rel="noreferrer">GitHub</a>
          <span className="nav-divider" />
          <span className="language"><strong>EN</strong><span>中文</span></span>
        </div>
      </nav>

      <div className="page-shell">
        <section className="publications-section" id="publications">
          <h1>Selected Publications</h1>
          <p className="publication-note">Reinforcement Learning / Large Models / Embodied Intelligence</p>
          <p className="author-note">Qin-Wen Luo is highlighted as the primary author.</p>

          <div className="search-row">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search publications..."
                aria-label="Search publications"
              />
            </label>
            <button className="filter-button" type="button" onClick={() => setShowFilters((value) => !value)}>
              <span aria-hidden="true">▽</span> Filters
            </button>
          </div>

          {showFilters && (
            <div className="filter-panel">
              <div className="filter-group">
                <strong>▣ Year</strong>
                <div>
                  {["All", "2026", "2025", "2024"].map((item) => (
                    <button className={year === item ? "selected" : ""} type="button" onClick={() => setYear(item)} key={item}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="filter-group">
                <strong>▤ Type</strong>
                <div><span>Conference</span></div>
              </div>
              <div className="filter-group tag-filter">
                <strong>◇ Tags</strong>
                <div><span>Offline RL</span><span>LLM</span><span>Embodied AI</span></div>
              </div>
            </div>
          )}

          <p className="result-count">Found <strong>{filtered.length}</strong> publication(s).</p>

          <div className="publication-list">
            {filtered.map((publication) => (
              <article className="publication" key={publication.title}>
                <h2><span>[{publication.index}]</span> {publication.title}</h2>
                <p className="authors"><strong>Qin-Wen Luo</strong>{publication.authors.replace("Qin-Wen Luo", "")}</p>
                <p className="venue-line">{publication.venue}, {publication.year}</p>
                <p className="paper-description">{publication.description}</p>
                <div className="paper-bottom">
                  <div className="paper-links">
                    <a href={publication.paper} target="_blank" rel="noreferrer">Paper <Arrow /></a>
                    <a href={publication.code} target="_blank" rel="noreferrer">Code <Arrow /></a>
                  </div>
                  <div className="paper-tags">
                    {publication.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    <span className="gold-tag">{publication.type}</span>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && <div className="empty-state">No publications match the current search.</div>}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="profile-column">
            <Image src="/profile.jpg" alt="Portrait of Qinwen Luo" className="portrait" width={360} height={360} />
            <h2>Qinwen Luo</h2>
            <p className="role">Ph.D. Student</p>
            <p className="affiliation">Nanjing University of Aeronautics and Astronautics</p>
            <blockquote>“<em>认清</em>你之<em>所是</em>，<em>成为</em>你之<em>所是</em>。”</blockquote>
          </div>
          <div className="about-copy">
            <p className="section-label">About</p>
            <h2>About Me</h2>
            <p>I am a second-year Ph.D. student in Computer Science and Technology at Nanjing University of Aeronautics and Astronautics (NUAA), advised by Professor <a href="https://parnec.nuaa.edu.cn/huangsj/" target="_blank" rel="noreferrer">Sheng-Jun Huang</a>. I received my M.S. degree in Computer Science from NUAA in 2025, also under his supervision.</p>
            <p>My research spans the foundations of reinforcement learning and its practical applications. I study offline and skill-based RL, RL for large models and new learning paradigms, and the connection between RL and embodied intelligence—including VLA and WAM models. Together, these directions explore how agents can learn reliably, reason about unfamiliar situations, and act effectively in complex environments.</p>
            <div className="education">
              <div><span>Present</span><p><strong>Ph.D. Student</strong><br />Computer Science and Technology · NUAA</p></div>
              <div><span>2025</span><p><strong>M.S. in Computer Science</strong><br />Nanjing University of Aeronautics and Astronautics</p></div>
            </div>
          </div>
        </section>

        <section className="research-section" id="research">
          <p className="section-label">Research</p>
          <h2>Research Interests</h2>
          <div className="interest-grid">
            {interests.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>
      </div>

      <footer><p>© 2026 Qinwen Luo</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
