import React, { useState } from "react";
import "./Teams.css";
import back2 from '..//..//Assets/back2.webp'

const teamsData = [
  {
    id: 1,
    name: "Ferrari",
    description: "Scuderia Ferrari is one of the most historic teams in Formula 1, known for its iconic red cars and championship-winning legacy.",
    color: "#DC0000",
    secondaryColor: "#FF2800",
    logo: "https://images.seeklogo.com/logo-png/21/2/ferrari-logo-png_seeklogo-216873.png",
    founded: 1950,
    championships: 16,
    base: "Maranello, Italy"
  },
  {
    id: 2,
    name: "Mercedes",
    description: "Mercedes AMG Petronas dominates modern F1 with advanced engineering and world-class drivers.",
    color: "#00D2BE",
    secondaryColor: "#009E87",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/768px-Mercedes_AMG_Petronas_F1_Logo.svg.png?20200910075830",
    founded: 2010,
    championships: 8,
    base: "Brackley, UK"
  },
  {
    id: 3,
    name: "McLaren",
    description: "McLaren Racing blends innovation with speed, representing one of the most famous teams in F1 history.",
    color: "#FF8700",
    secondaryColor: "#FF5800",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/McLaren_Racing_logo.png/1200px-McLaren_Racing_logo.png?20221231090604",
    founded: 1963,
    championships: 8,
    base: "Woking, UK"
  },
  {
    id: 4,
    name: "Red Bull",
    description: "Red Bull Racing combines youthful energy with cutting-edge technology, competing fiercely at the top of F1.",
    color: "#1E41FF",
    secondaryColor: "#0600EF",
    logo: "https://vectorseek.com/wp-content/uploads/2023/08/Red-Bull-Racing-F1-Logo-Vector.svg-.png",
    founded: 2005,
    championships: 5,
    base: "Milton Keynes, UK"
  },
];

export default function Teams() {
  const [activeTeam, setActiveTeam] = useState(null);

  return (
    <div 
      className="teams-page"
      style={{ backgroundImage: `url(${back2})` }}
    >
      <div className="teams-overlay">
        <div className="teams-header">
          <h1>Formula 1 Teams </h1>
          <p className="teams-intro">
            Discover the top Formula 1 teams driving speed, innovation, and excitement on the track.
          </p>
        </div>
        
        <div className="teams-grid">
          {teamsData.map((team) => (
            <div 
              className={`team-card ${activeTeam === team.id ? 'active' : ''}`}
              key={team.id}
              onMouseEnter={() => setActiveTeam(team.id)}
              onMouseLeave={() => setActiveTeam(null)}
              style={{ 
                '--team-color': team.color,
                '--team-secondary': team.secondaryColor
              }}
            >
              <div className="team-card-header">
                <div className="team-logo-container">
                  <img src={team.logo} alt={team.name} className="team-logo" />
                </div>
                <div className="team-stats">
                  <div className="stat">
                    <span className="stat-value">{team.championships}</span>
                    <span className="stat-label">Championships</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{team.founded}</span>
                    <span className="stat-label">Founded</span>
                  </div>
                </div>
              </div>
              
              <div className="team-card-content">
                <h2>{team.name}</h2>
                <p className="team-base">{team.base}</p>
                <p className="team-description">{team.description}</p>
              </div>
              
              <div className="team-card-footer">
                <button className="team-button">View Details</button>
              </div>
              
              <div className="team-card-background" style={{ background: `linear-gradient(135deg, ${team.color} 0%, ${team.secondaryColor} 100%)` }}></div>
            </div>
          ))}
        </div>
        
        <div className="teams-footer">
          <p>© 2025 Formula 1 Teams Showcase. All team information is for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
}