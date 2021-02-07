import './css/app.css';
import './css/bootstrap-grid.min.css';

import data_objectives from './data/objectives';

// import parseInput from './js/parseInput';
import React, {useState, useEffect} from 'react';

import UserInput from './components/UserInput';
import Article from './components/Article';

export default function App() {
  const [display, setDisplay] = useState('menu');
  const [room, setRoom] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerHistory, setAnswerHistory] = useState('');

  useEffect(() => {

  }, [
    display,
  ]);

  return (
    <div className="App py-4">
      <div className="container container-sm">
        <div className="row">
          <div className="col">
            <main>
              <h1>Ollie the Omnivorous</h1>
              <Article
                display={display}
                setDisplay={setDisplay}
              />
              <UserInput
                display={display}
                setAnswer={setAnswer}
                setAnswerHistory={setAnswerHistory}
                setDisplay={setDisplay}
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