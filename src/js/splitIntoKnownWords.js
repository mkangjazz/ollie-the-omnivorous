import dictionary from '../data/dictionary';

export default function splitIntoKnownWords(str) {
  function getWordFromDictionary(word) {
    if (dictionary.hasOwnProperty(word)) {
      return dictionary[word];
    } else {
      return word; 
    }
  }

  const regex = /\s+|\b/igm;
  const parts = str.split(regex);
  const words = parts.map((word) => getWordFromDictionary(word));

  const invalid = words.filter((obj) => typeof obj !== 'object');
  const valid = words.filter((obj) => typeof obj === 'object');
  
  if (invalid.length > 0) {
    console.log("i don't understand: ", invalid);
  }
 
  return valid;
};
