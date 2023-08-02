import React from 'react'
import PlanetFacts from "./PlanetFacts"
import { useState } from 'react';

function PlanetCard({planet}) {

  const [displayInfo, setDisplayInfo] = useState(false);

  return (
      <div className="card" onClick={() => { setDisplayInfo(!displayInfo) }}>
        <h2>{planet.name}</h2>
        { 
          displayInfo ? 
            <PlanetFacts planet={ planet }/> : 
            <img className={ planet['is_planet'] ? "": "not-planet"} src={planet.image} alt={planet.name} />
        }
      </div>
  )
}

export default PlanetCard
