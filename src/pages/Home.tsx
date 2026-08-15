import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <main className="home-main">
        <div className="hero-wrapper">
          <img src="/images/DragonVisual.png" alt="" className="poster-bg" />
          <div className="image-box">
            <img src="/images/Featured.jpeg" alt="Featured" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home