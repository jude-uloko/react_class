import './profileCad2.css';

export default function Card2 () {
  return (
    <div class="card green">
      <div class="banner">
        <div class="avatar">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="9" r="4" stroke="#1a1a6e" stroke-width="1.5"/>
            <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="#1a1a6e" stroke-width="1.5"/>
            <path d="M8 6c0-2 2-3 4-3s4 1 4 3" stroke="#1a1a6e" stroke-width="1.5"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <div class="header-row">
          <div>
            <p class="name">Olivia Rhye</p>
            <p class="handle">@Oliviar_</p>
          </div>
          <div class="actions">
            <button class="follow-btn">Follow</button>
            <button class="bookmark-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12a1 1 0 011 1v19l-7-4-7 4V3a1 1 0 011-1z"/></svg>
            </button>
          </div>
        </div>
        <div class="stats">
          <div class="stat">
            <div class="stat-value">★ 4.9</div>
            <div class="stat-label">Rating</div>
          </div>
          <div class="stat">
            <div class="stat-value">▤ 125</div>
            <div class="stat-label">Posts</div>
          </div>
          <div class="stat">
            <div class="stat-value">👤 12.4K</div>
            <div class="stat-label">Followers</div>
          </div>
        </div>
        <button class="cta">
          <span class="arrow-circle">→</span>
          Get in Touch
        </button>
      </div>
    </div>
  )
}