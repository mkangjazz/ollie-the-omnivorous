import intro from '../data/intro';
import help from '../data/help';
// import rooms from '../data/rooms';
// import rooms from '../data/objects';

export default function isValidCommand(input, display) {
  let returnValue = false;

  switch (display) {
    case 'intro':
      if (intro.options.indexOf(input) !== -1) {
        returnValue = true;
      }

      break;
    case 'help':
      if (help.options.indexOf(input) !== -1) {
        returnValue = true;
      }

      break;
    default:
      break;
  }

  return returnValue;
}
