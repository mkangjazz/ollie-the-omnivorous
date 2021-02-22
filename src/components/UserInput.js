import React from 'react';

import InputParagraph from './InputParagraph';
import StoryParagraph from './StoryParagraph';

export default function UserInput(props) {
  function handleInputKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "Up":
      case "ArrowUp":
        event.preventDefault();

        event.target.value = props.inputHistory.length > 0 ? props.inputHistory[props.inputHistory.length - 1] : null;
        
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
        case 'instructions':
          props.setHistory((curr) => [
            ...curr,
            props.gameData.instructionsText.map((item, index) => (
              <StoryParagraph
                key={`item-${index}`}
              >
                {item}
              </StoryParagraph>
            ))
          ]);

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
          // autoFocus="autofocus"
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
