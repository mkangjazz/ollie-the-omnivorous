import React, {useState, useEffect } from 'react';

export default function UserInput() {
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
    <label
      className="d-flex align-items-center"
      aria-label="Action"
      htmlFor="user-input"
    >
      <span>&gt;</span>
      <input
        id="user-input"
        autofocus="autofocus"
        type="text"
      />
    </label>
  );
}