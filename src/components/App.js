import React from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from './PlanetsContainer'
import planets from '../data/planets'

function App() {

  return (
    <div className="App">

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button>Light Mode</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
