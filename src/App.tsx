


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="space">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#" className="logo">
          BEYOND<span> EARTH</span>
        </a>

        <div className="nav-links">
          <a href="#missions">Missions</a>
          <a href="#hardware">Hardware</a>
          <a href="#builder">Mission Builder</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="eyebrow">
          NASA SPACE HARDWARE EXPLORER
        </div>

        <h1>
          EXPLORE
          <br />
          <span>BEYOND EARTH.</span>
        </h1>

        <p>
          Discover humanity's journey across the solar system.
        </p>

        <a href="#missions" className="button">
          EXPLORE MISSIONS ↗
        </a>

        <div className="counter">
          <span>MISSION CONTROL / 001</span>
          <span>EARTH · SOL SYSTEM</span>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="section" id="missions">
        <p className="eyebrow">01 / MISSION ARCHIVE</p>
        <h2>Humanity's reach.</h2>

        <div className="cards">
          <article>
            <span>01 / DEEP SPACE</span>
            <h3>Voyager 1</h3>
            <p>Exploring interstellar space.</p>
          </article>

          <article>
            <span>02 / MARS</span>
            <h3>Perseverance</h3>
            <p>Searching for signs of ancient life.</p>
          </article>

          <article>
            <span>03 / SATURN</span>
            <h3>Cassini</h3>
            <p>Revealing Saturn's extraordinary system.</p>
          </article>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="section" id="hardware">
        <p className="eyebrow">02 / HARDWARE EXPLORER</p>
        <h2>
          Machines that
          <br />
          changed everything.
        </h2>

        <p>Rovers · Orbiters · Landers · Spacecraft</p>
      </section>

      {/* MISSION BUILDER */}
      <section className="section" id="builder">
        <p className="eyebrow">03 / MISSION BUILDER</p>
        <h2>Your mission begins here.</h2>

        <p>Design your own educational space mission.</p>

        <button
          className="button"
          onClick={() => setCount((previous) => previous + 1)}
        >
          CREATE MISSION {count > 0 && `(${count})`}
        </button>

        {count > 0 && (
          <p className="mission-feedback">
            Mission drafts created: {count}
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        BEYOND EARTH © 2026 · EDUCATIONAL SPACE EXPLORATION
      </footer>
    </main>
  )
}

export default App
