// src/pages/Talent.tsx
import './Talent.css'

const talents = [
  {
    name: 'Solace Path',
    role: 'Sound Producer, Influencer',
    image: '/images/RazanLatifMain.jpeg',
  },
  {
    name: 'Mikhaeil Noor',
    role: 'Fashion, Influencer',
    image: '/images/MikhaielMain.jpeg',
  },
  {
    name: 'Fargo',
    role: 'Creative Director',
    image: '/images/FargoMain.jpeg',
  },
  {
    name: 'Akkers',
    role: 'Fashion, Influencer',
    image: '/images/AkkersMain.jpeg',
  },
]

function Talent() {
  return (
    <div className="talent-page">
      <div className="talent-title">
        <img src="/images/DRAGONS.png" alt="DRAGONS" />
      </div>
      <div className="talent-grid">
        {talents.map((t, i) => (
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