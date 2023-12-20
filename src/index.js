import React from 'react';
import ReactDOM from 'react-dom';

import Deck from './Components/RevealComponents/Deck';
import Slides from './Slides';

import './index.css';
import './Themes/override.css';
import 'reveal.js/dist/theme/sky.css'


//const App = () => (
//  <div className="App">
//    <Deck>{Slides}</Deck>
//  </div>
//);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div  class="reveal">
      <Deck>{Slides}</Deck>
    </div>
  </React.StrictMode>
);


//ReactDOM.render(<App />, document.getElementById('root'));
