// src/pages/Talent.tsx
import { useState } from 'react'
import './Talent.css'

const talents = [
  {
    name: 'Solace Path',
    role: 'Sound Producer, Influencer',
    image: '/images/RazanLatifMain.jpeg',
    category: 'Creative',
  },
  {
    name: 'Mikhaiel',
    role: 'Fashion, Influencer',
    image: '/images/MikhaielMain.jpeg',
    category: 'Talent',
  },
  {
    name: 'Fargo',
    role: 'Creative Director',
    image: '/images/FargoMain.jpeg',
    category: 'Creative',
  },
  {
    name: 'Akkers',
    role: 'Fashion, Influencer',
    image: '/images/AkkersMain.jpeg',
    category: 'Talent',
  },
]

function Talent() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Talent', 'Creative', 'Athlete']

  const filteredTalents =
    activeFilter === 'All'
      ? talents
      : talents.filter((t) => t.category === activeFilter)

  return (
    <div className="talent-page">
      <div className="talent-title">
        <img src="/images/DRAGONS.png" alt="DRAGONS" />
      </div>

      <div className="talent-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="talent-grid">
        {filteredTalents.map((t, i) => (
          <div className="talent-card" key={i}>
            <div className="talent-image-box">
              <img src={t.image} alt={t.name} />
              <p className="talent-overlay-name"><em>{t.name}</em></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Talent