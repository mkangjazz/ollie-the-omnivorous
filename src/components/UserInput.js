import React from 'react';

import dictionary from '../data/dictionary';
import parseInput from '../js/parseInput';

export default function UserInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value;

    if (value.trim()) {
      e.target.reset();

      switch (props.level) {
        case 'intro':
          props.setRoom('livingRoom');

          if (props.levels[props.level].answer.indexOf(value) !== -1) {
            props.setLevel('playing');
          }

          break;
        case 'playing':
          parseInput(value, dictionary);

          props.setAnswer(value);
          props.setAnswerHistory(prevState => ([...prevState, value]));

          break;
        default:
          break;
      }
    }
  }

  return (
    <form
      aria-label="input an action"
      className="ui-user-input"
      id="ui-user-input"
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
