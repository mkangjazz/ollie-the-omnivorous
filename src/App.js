import './css/app.css';
import './css/bootstrap-grid.min.css';

import React, {useState} from 'react';
import TitleCard from './components/TitleCard';
//import DiningRoom from './components/DiningRoom';
import UserInput from './components/UserInput';

export default function App() {
  const [inputCount, setInputCount] = useState(0);
  const [inputValue, setInputValue] = useState(['']);

  console.log('history', inputValue, inputCount);
  
  return (
    <div className="App py-4">
      <div className="container container-sm">
        <div className="row">
          <div className="col">
            <main>
              <div className="ui-story" id="ui-story">
                <TitleCard />
                <p>Input: {inputValue[inputCount]}</p>
              </div>
              <div className="ui-user-input" id="ui-user-input">
                <UserInput
                  inputValue={inputValue}
                  setInputCount={setInputCount}
                  setInputValue={setInputValue}
                />
              </div>
            </main>
            <footer>
              <p>
                <small>&copy; 2020 Mike Kang</small>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}