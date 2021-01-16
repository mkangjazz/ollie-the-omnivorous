import splitIntoKnownWords from './splitIntoKnownWords';
import getTokenLetterString from './getTokenLetterString';
import isValidIndependentClause from './isValidIndependentClause';

export default function parseInput(userInput) {
  const knownWords = splitIntoKnownWords(userInput);

  if (knownWords) {
    const tokenLetterString = getTokenLetterString(knownWords);
    
    const isValid = isValidIndependentClause(tokenLetterString);
    
   console.log('parseInput', tokenLetterString, isValid);
  }

  // what should we return?
  // the text response
  // the valid command (you eat the food)
  // an error message, if error
  // need to update the game state?
  // return words;
}
