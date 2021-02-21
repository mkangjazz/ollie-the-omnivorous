import parseInput from '../js/parseInput';
// import isValidCommand from '../js/isValidCommand';

export default function UserInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    var value = e.target[0].value.trim();

    if (value) {
      switch (value) {
        case 'menu':
          props.setDisplay('menu');
          break;
        case 'awoo':
          props.setDisplay('game');
          break;
        case 'help':
          props.setDisplay('help');
          break;
        case 'win':
          props.setDisplay('win');
          break;
        case 'lose':
          props.setDisplay('lose');
          break;
        default:
          // need to validate this against state
          // check value here
          // props.setAnswer(value);
          parseInput(value);
          props.setAnswerHistory(prevState => ([...prevState, value]));
          break;
      }

      e.target.reset();
      e.target.focus();
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
