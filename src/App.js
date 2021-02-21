import gamedata from './data/gamedata';

// import parseInput...

import './css/app.css';

import React, {useState} from 'react';

import UserInput from './components/UserInput';
import Article from './components/Article';

export default function App() {
  const [gameData, setGameData] = useState(gamedata);

  const [history, setHistory] = useState([]);
  const [inputHistory, setInputHistory] = useState([]);

  // render display (history)
  // user enters an input
  // check if it's valid
  // update room/object/game states
  // update display based on state

  console.log('gameData', gameData);
  console.log('inputHistory', inputHistory);

  return (
    <div className="App">
      <main>
        <h1>Ollie the Omnivorous</h1>
        <p>
          <small>&copy;{new Date().getFullYear()} Mike Kang</small>
        </p>
        <Article
          history={history}
          inputHistory={inputHistory}
         />
        <UserInput
          inputHistory={inputHistory}
          setHistory={setHistory}
          setInputHistory={setInputHistory}
        />
      </main>
    </div>
  );
}
