import React from 'react';

import dictionary from '../data/dictionary';
import parseInput from '../js/parseInput';

export default function UserInput(props) {  
  function wrapInputText(text) {
    return <p className="user-input">{text}</p>;
  }

  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value;

    parseInput(value, dictionary);

    props.setStory((arr) => [...arr, wrapInputText(value)]);
    
    e.target.reset();
  }

//  const [inputCount, setInputCount] = useState(0);
//  const [inputValue, setInputValue] = useState(['']);
//  we should check for valid inputs and then only store those?

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