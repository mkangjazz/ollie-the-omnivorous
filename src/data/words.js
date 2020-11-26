import verbs from './verbs';
import nouns from './nouns';

export default function words() {
  function Word(str, type) {
    var o = {};

    o.word = str;
    o.type = type; 
    
    return o;
  }
  
  return (function() {
    var arr = [];

    // if a word is already in the array,
    // just add to its property, don't re-add the word
    
    for (let i = 0; i < verbs.length; i++) {
      let w = new Word(verbs[i], 'verb');

      arr.push(w);
    }

    for (let i = 0; i < nouns.length; i++) {
      let w = new Word(nouns[i], 'noun');

      arr.push(w);
    }

    return arr;
  })();

};
