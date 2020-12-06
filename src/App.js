import './css/app.css';
import './css/bootstrap-grid.min.css';

import React, {useState} from 'react';
import TitleCard from './components/TitleCard';
import UserInput from './components/UserInput';

export default function App() {  
  const [story, setStory] = useState([
    <TitleCard />,
  ]);

  return (
    <div className="App py-4">
      <div className="container container-sm">
        <div className="row">
          <div className="col">
            <main>
              <div className="ui-story" id="ui-story">
                {story.map((item, index) => {
                  return <div key={index}>{item}</div>
                })}
              </div>
              <div className="ui-user-input" id="ui-user-input">
                <UserInput setStory={setStory} />
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