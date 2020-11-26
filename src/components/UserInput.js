import React from 'react';

import words from '../data/words';

export default function UserInput(props) {
//  function parseInput() {
//  }
  
  function wrapInputText(text) {
    return <p className="user-input">{text}</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value;

// setInputCount((inputCount) => inputCount + 1);

// setInputValue((arr) => [...arr, value]);
//The main commands in text adventures tend to be LOOK3, those for movement (N, E, S, W, NE, NW, SE, SW, UP, DOWN) and those for handling objects (GET, DROP, INVENTORY4), but you'll certainly need others to get anywhere. Most games have a vocabulary of dozens of words and can cope with sentences like 'HANG RED COAT ON HOOK's.

    // accept input
    // is it "legal"
    // parse input, based on game state
    // check game state
    // grab and display response
    
    console.log('words', words());

    props.setStory((arr) => [...arr, wrapInputText(value)]);
    
    e.target.reset();
  }
  
//  const [inputCount, setInputCount] = useState(0);
//  const [inputValue, setInputValue] = useState(['']);
  // we should check for valid inputs and then only store those?

  return (
    <form
      aria-label="input an action"
      onSubmit={handleSubmit}
    >
      <label
        className="d-flex align-items-center"
        htmlFor="user-input"
      >
        <span>&gt;</span>
        <input
          autoFocus="autofocus"
          id="user-input"
          spellCheck="false"
          type="text"
        />
      </label>
      <input
        className="sr-only"
        value="submit"
        type="submit"
      />
    </form>
  );
}