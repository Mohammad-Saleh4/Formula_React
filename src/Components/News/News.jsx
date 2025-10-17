import fo from "../../Assets/fo.webp";
import './News.css';
import m2 from '../../Assets/m2.webp';
import mac from '../../Assets/mac.webp';
import fer from '../../Assets/fer.webp';
import  mer from '../../Assets/mer.webp';
import  miami from '../../Assets/miami.webp';
import  aston from '../../Assets/aston.webp';
const newsData = [
  {
    title: "Max Verstappen Wins Belgian GP",
    date: "August 20, 2025",
    image: m2,
    description: "Red Bull's Max Verstappen dominated the race with a flawless performance, securing his 10th win of the season.",
    category: "Race Report"
  },
  {
    title: "Mercedes Brings Aero Upgrades",
    date: "August 18, 2025",
    image: mer,
    description: "Mercedes introduced a new floor and rear wing to improve cornering speed and downforce.",
    category: "Technical"
  },
  {
    title: "Ferrari Eyes 2026 Power Unit",
    date: "August 15, 2025",
    image: fer ,
    description: "Ferrari is testing components for the upcoming 2026 regulation changes in their Maranello facility.",
    category: "Development"
  },
  {
    title: "McLaren Signs New Young Driver",
    date: "August 12, 2025",
    image: mac,
    description: "McLaren announces a promising talent joining their F1 academy program for the 2026 season.",
    category: "Team News"
  },
  {
    title: "New Street Circuit Proposed for Miami",
    date: "August 10, 2025",
    image: miami,
    description: "Plans unveiled for a new street circuit in downtown Miami to host a second US Grand Prix.",
    category: "Calendar"
  },
  {
    title: "Aston Martin Reveals Sustainability Plan",
    date: "August 8, 2025",
    image:aston ,
    description: "Aston Martin becomes the first F1 team to commit to carbon-neutral operations by 2030.",
    category: "Sustainability"
  }
];

export default function Explore() {
  return (
    <div 
      className="news-page"
      style={{ backgroundImage: `url(${fo})` }}
    >
      <div className="news-overlay">
        <div className="news-container">
          <header className="news-header">
            <h1 className="news-title">Latest Formula One News <span className="f1-icon">🏎️</span></h1>
            <p className="news-subtitle">Stay updated with the latest from the world of Formula 1 racing</p>
          </header>
          
          <div className="news-filters">
            <button className="filter-btn active">All News</button>
            <button className="filter-btn">Race Reports</button>
            <button className="filter-btn">Technical</button>
            <button className="filter-btn">Team News</button>
          </div>
          
          <div className="news-grid">
            {newsData.map((news, index) => (
              <div className="news-card" key={index}>
                <div className="news-image-container">
                  <img src={news.image} alt={news.title} className="news-image" />
                  <div className="news-category">{news.category}</div>
                  <div className="news-date-badge">{news.date}</div>
                </div>
                <div className="news-content">
                  <h2 className="news-card-title">{news.title}</h2>
                  <p className="news-description">{news.description}</p>
                  <div className="news-actions">
                    <button className="read-more-btn">Read More</button>
                    <div className="news-social">
                      <span className="social-icon">♡</span>
                      <span className="social-icon">↗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="news-pagination">
            <button className="pagination-btn">Previous</button>
            <span className="pagination-page">Page 1 of 3</span>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}