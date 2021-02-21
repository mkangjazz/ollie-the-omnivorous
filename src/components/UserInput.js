import React from 'react';

import InputParagraph from './InputParagraph';

export default function UserInput(props) {
  function handleInputKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "Up":
      case "ArrowUp":
        event.preventDefault();
        console.log('handleInputEvent, cycle through previous commands');
        // what if you do it again? and again? -1 needs to be a variable
        event.target.value = props.inputHistory[props.inputHistory.length - 1];

        break;
      case "Tab":
        event.preventDefault();
        console.log('handleInputEvent tab autocomplete or suggestions');
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value.trim();

    if (value) {
      props.setHistory((curr) => [...curr, <InputParagraph>{value}</InputParagraph>]);
      props.setInputHistory((curr) => [...curr, value]);

      switch (value) {
        case 'awoo':
          // initialize the game first? need state variable somewhere to see if it's valid
          // props.setDisplay('game');
          break;
        case 'help':
          // append 'help text' to history
          break;
        case 'win':
          // props.setDisplay('win');
          break;
        case 'lose':
          // props.setDisplay('lose');
          break;
        default:
          // all the actual game commands!
          // need to validate this against state
          // props.setAnswer(value);
          // parseInput(value);
          // props.setHistory(prevState => ([...prevState, value]));
          break;
      }
    }

    e.target.reset();
    e.target.focus();
  }

  return (
    <form
      aria-label="input an action"
      className="ui-user-input"
      id="ui-user-input"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="user-input"
      >
        <span>&gt;</span>
        <input
          autoFocus="autofocus"
          id="user-input"
          onKeyDown={handleInputKeyDown}
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
