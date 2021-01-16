import './css/app.css';
import './css/bootstrap-grid.min.css';

import data_levels from './data/levels';
import data_objects from './data/objects';
import data_rooms from './data/rooms';

import React, {useState} from 'react';

import UserInput from './components/UserInput';
import Article from './components/Article';

export default function App() {
  // feel free to mutate the data NOT as state
  // const [levels, setLevels] = useState(data_levels);
  // const [objects, setObjects] = useState(data_objects);
  // const [rooms, setRooms] = useState(data_rooms);

  const [level, setLevel] = useState('intro');
  const [room, setRoom] = useState('');

  const [answer, setAnswer] = useState('');
  const [answerHistory, setAnswerHistory] = useState('');

  function getText() {
  // decouple room from object in the room??
  // function getPromptText() {
  // }
  // function getObjectText() {
  // }

    let text = [];

    switch (level) {
      case 'intro':
        text = text.concat(data_levels[level].text);
        break;
      case 'playing':
        // room state
        // object state
        text = text.concat(data_rooms[room].text);
        text = text.concat();
        break;
      default:
        break;
    }

    return text;
  }

  console.log('level', level);

  return (
    <div className="App py-4">
      <div className="container container-sm">
        <div className="row">
          <div className="col">
            <main>
              <h1>Ollie the Omnivorous</h1>
              <Article
                text={getText()} 
              />
              <UserInput
                level={level}
                levels={data_levels}
                objects={data_objects}
                room={room}
                rooms={data_rooms}
                setAnswer={setAnswer}
                setAnswerHistory={setAnswerHistory}
                setLevel={setLevel}
                setRoom={setRoom}
              />
            </main>
            <footer>
              <p>
                <small>&copy;{new Date().getFullYear()} Mike Kang</small>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}