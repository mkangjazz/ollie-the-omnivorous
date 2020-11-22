import './css/app.css';
import './css/bootstrap-grid.min.css';

import React, { component, useState, useEffect } from 'react';
import TitleCard from './components/TitleCard';
import DiningRoom from './components/DiningRoom';
import UserInput from './components/UserInput';

export default function App() {
  const [inputText, setInputText] = useState("");

//  useEffect(() => {
//    document.title = `${inputText}`;
//  });

  function _handleSubmit(e) {
//    e.preventDefault();
//    setInput({ Input1: "", Input2: "" });
//    setButton("Submitted");
//    setTimeout(() => setButton("Button"), 1000);
//    console.log("Submitted");
  }

  return (
    <div className="App py-4">
      <div className="container container-sm">
        <div className="row">
          <div className="col">
            <main>
              <div className="ui-story" id="ui-story">
                <TitleCard />
              </div>
              <div className="ui-user-input" id="ui-user-input">
                <UserInput />
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