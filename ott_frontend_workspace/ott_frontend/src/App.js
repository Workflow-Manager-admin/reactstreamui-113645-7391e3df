import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /**
   * OTT Streaming Service Homepage
   * Implements header navigation, hero banner, carousel sections, sidebar, and footer
   * Layout and styles follow a modern, minimal, light-themed UI per requirements.
   */
  return (
    <div className="app ott-app">
      {/* Header / Navigation */}
      <header className="ott-navbar">
        <div className="ott-navbar-left">
          <span className="ott-logo">
            <span className="ott-logo-mark">OTT</span>Stream
          </span>
        </div>
        <nav className="ott-nav-links">
          <a href="#" className="ott-nav-link active">Home</a>
          <a href="#" className="ott-nav-link">Movies</a>
          <a href="#" className="ott-nav-link">Shows</a>
          <a href="#" className="ott-nav-link">Watchlist</a>
        </nav>
        <div className="ott-navbar-right">
          <input
            type="text"
            placeholder="Search"
            className="ott-search"
            aria-label="Search content"
          />
          <button className="ott-btn ott-login-btn">Sign In</button>
        </div>
      </header>

      <main className="ott-main-content">
        {/* Sidebar */}
        <aside className="ott-sidebar">
          <div className="ott-sidebar-title">Categories</div>
          <ul className="ott-category-list">
            <li className="ott-category-item active">All</li>
            <li className="ott-category-item">Trending</li>
            <li className="ott-category-item">New Releases</li>
            <li className="ott-category-item">Action</li>
            <li className="ott-category-item">Drama</li>
            <li className="ott-category-item">Comedy</li>
            <li className="ott-category-item">Documentary</li>
          </ul>
        </aside>

        {/* Main Container */}
        <section className="ott-content-area">
          {/* Hero Banner */}
          <div className="ott-hero-banner">
            <h1 className="ott-hero-title">
              Unlimited Movies, TV <br /> Shows, and More
            </h1>
            <p className="ott-hero-subtitle">
              Watch anywhere. Cancel anytime. Content for everyone.
            </p>
            <button className="ott-btn ott-hero-btn">Start Watching</button>
          </div>

          {/* Carousel Section */}
          <div className="ott-section">
            <div className="ott-section-header">
              <span>Popular Now</span>
              <a href="#" className="ott-section-link">See All</a>
            </div>
            <div className="ott-carousel">
              {Array(6).fill(0).map((_, idx) => (
                <div className="ott-card" key={`c-popular-${idx}`}>
                  <div className="ott-card-thumb ott-thumb-demo"></div>
                  <div className="ott-card-title">Movie Title {idx+1}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ott-section">
            <div className="ott-section-header">
              <span>New Releases</span>
              <a href="#" className="ott-section-link">See All</a>
            </div>
            <div className="ott-carousel">
              {Array(6).fill(0).map((_, idx) => (
                <div className="ott-card" key={`c-new-${idx}`}>
                  <div className="ott-card-thumb ott-thumb-demo ott-thumb-new"></div>
                  <div className="ott-card-title">New Title {idx+1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ott-footer">
        <div>
          <span className="ott-footer-brand">OTTStream &copy; 2024</span>
          <span className="ott-footer-links">
            <a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Help</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
