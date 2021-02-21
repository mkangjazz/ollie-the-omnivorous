import gamedata from './data/gamedata';

import './css/app.css';

import React, {useState, useEffect} from 'react';

import Map from './components/Map';
import UserInput from './components/UserInput';
import Article from './components/Article';

export default function App() {
  const [answerHistory, setAnswerHistory] = useState('');
  const [currentRoom, setCurrentRoom] = useState('living-room');
  const [display, setDisplay] = useState('menu');
  const [gameData, setGameData] = useState(gamedata);

  useEffect(() => {

  }, [
    display,
  ]);

  console.log('gameData', gameData);

  return (
    <div className="App">
      <main>
        <h1>Ollie the Omnivorous</h1>
        <Article
          currentRoom={currentRoom}
          display={display}
          gameData={gameData}
        />
        <Map
          currentRoom={currentRoom}
        />
        <UserInput
          currentRoom={currentRoom}
          display={display}
          gameData={gameData}
          setAnswerHistory={setAnswerHistory}
          setDisplay={setDisplay}
          setCurrentRoom={setCurrentRoom}
          setGameData={setGameData}
        />
      </main>
      <footer>
        <p>
          <small>&copy;{new Date().getFullYear()} Mike Kang</small>
        </p>
      </footer>
    </div>
  );
}
