import splitIntoKnownWords from './splitIntoKnownWords';
import getTokenLetterString from './getTokenLetterString';

export default function parseInput(userInput) {
  const knownWords = splitIntoKnownWords(userInput);
//  const knownWordsPOS = knownWords.map(obj => obj.part_of_speech);
// const hasValidIndependentClause = hasValidIndependentClause(tokenString);

//  console.log(knownWordsPOS);
  
//  console.log('tokens', tokens);

  if (knownWords) {
    const tokenLetterString = getTokenLetterString(knownWords);
    
    console.log(tokenLetterString);
  }

  // what should we return?
  // the text response
  // the valid command (you eat the food)
  // an error message, if error

  // return words;
}
