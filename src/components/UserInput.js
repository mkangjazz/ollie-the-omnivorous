import React, {useState, useEffect } from 'react';

export default function UserInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value;

    props.setInputCount((inputCount) => inputCount + 1);
    props.setInputValue((arr) => [...arr, value]);
    
    e.target.reset();
  }

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