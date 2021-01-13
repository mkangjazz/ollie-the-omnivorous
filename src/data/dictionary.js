import verbs from './verbs';
import nouns from './nouns';
import subject_pronouns from './subject_pronouns';
import object_pronouns from './object_pronouns';

const dictionary = (function() {  
  function Word(str) {
    var o = {};
    
    o.word = str;
    o.part_of_speech = [
      // noun,
      // subject_pronoun,
      // object_pronoun,
      // adjective,
      // determiner,
      // verb,
      // adverb,
      // preposition,
      // conjunction,
      // interjection
    ];

    return o;
  }

  var dictionary = {};

  function addWordsToDictionary(words, type) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (dictionary.hasOwnProperty(word)) {
        try {
          if (dictionary[word]['part_of_speech'].indexOf(type) === -1) {
            dictionary[word]['part_of_speech'].push(type);
          }
        } catch(e) {
          console.log(e);
        }
      } else {
        const newWord = new Word(word);

        try {
          newWord['part_of_speech'].push(type);

          dictionary[word] = newWord;
        } catch(e) {
          console.log(e);
        }
      }
    }
  }

  addWordsToDictionary(verbs, 'verb');
  addWordsToDictionary(nouns, 'noun');
  addWordsToDictionary(subject_pronouns, 'subjectPronoun');
  addWordsToDictionary(object_pronouns, 'objectPronoun');

  return dictionary;
})();

export default dictionary;