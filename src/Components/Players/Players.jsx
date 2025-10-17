import React from "react";
import "./Players.css";
import back1 from '../../Assets/back1.webp'

import h1 from '../../Assets/h1.webp'
import m1 from '../../Assets/m1.webp'
import b1 from '../../Assets/b1.webp'
import  N1 from '../../Assets/N1.webp';
import  l1 from '../../Assets/l1.jpg';

const playersData = [
  {
    name: "Lewis Hamilton",
    team: "Mercedes",
    photo: h1,
    teamColor: "#00D2BE",
    number: 44,
    country: "United Kingdom",
    highlights: "7-time World Champion"
  },
  {
    name: "Max Verstappen",
    team: "Red Bull Racing",
    photo: m1,
    teamColor: "#0600EF",
    number: 1,
    country: "Netherlands",
    highlights: "3-time World Champion"
  },
  {
    name: "Lando Norris",
    team: "McLaren",
    photo: N1,
    teamColor: "#FF8700",
    number: 4,
    country: "United Kingdom",
    highlights: "Multiple Grand Prix winner"
  },
  {
    name: "Charles Leclerc",
    team: "Ferrari",
    photo: l1,
    teamColor: "#DC0000",
    number: 16,
    country: "Monaco",
    highlights: "Multiple Grand Prix winner"
  },
  {
    name: "Valtteri Bottas",
    team: "Alfa Romeo",
    photo: b1,
    teamColor: "#900000",
    number: 77,
    country: "Finland",
    highlights: "10+ Grand Prix wins"
  },
];

export default function About() {
  return (
    <div className="players-page" style={{
        backgroundImage: `url(${back1})`
      }}  >
      <div className="container">
        <h1>Our Star Drivers </h1>
        <p className="players-intro">
          Meet the champions who push the limits on the Formula 1 track.
        </p>
        
        <div className="players-flex-container">
          {playersData.map((player) => (
            <div 
              className="player-card" 
              key={player.name}
              style={{ "--team-color": player.teamColor }}
            >
              <div className="card-header">
                <span className="driver-number">#{player.number}</span>
                <span className="team-name">{player.team}</span>
              </div>
              
              <div className="player-photo-container">
                <div
                  className="player-photo"
                  style={{ backgroundImage: `url(${player.photo})` }}
                ></div>
                <div className="player-overlay">
                  <div className="player-info">
                    <p><strong>Nationality:</strong> {player.country}</p>
                    <p><strong>Highlights:</strong> {player.highlights}</p>
                  </div>
                </div>
              </div>
              
              <div className="player-details">
                <h2>{player.name}</h2>
                <div className="team-color-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}