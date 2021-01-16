export default function isValidIndependentClause(str) {
  let isValid = false;

  const verbObject = /verb noun/i;
  // ^(verb)\s+(subjectPronoun|noun|objectPronoun)

  console.log('isValidIndependentClause', verbObject.test(str));
  // verb prepositional-phrase
    // walk to the door
    // jump on the couch
    // walk through to the door

  // verb adverb prepositional-phrase prepositional-phrase
    // walk quickly to the couch in the living room
    // verb adverb prepositionalPhrase prepositionalPhrase noun-Object
  
    // eat the dog food with my teeth
    // verb noun ...conjunction? with?...possessivePronoun objectPronoun


  // Consecutive nouns
  // Sheryl went to the tickets office → Sheryl went to the ticket office.




  return isValid;
};
