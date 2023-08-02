import React from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from './PlanetsContainer'
import planets from '../data/planets'
import { useState } from 'react';

function App() {

  const [themeClassName, setThemeClassName] = useState('');

  return (
    <div className={`App ${themeClassName}`}>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button
        onClick={() => {
            themeClassName ? setThemeClassName('') : setThemeClassName('light-mode')
          }
        }>
        { themeClassName ? 'Dark Mode' : 'Light Mode'}
      </button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
