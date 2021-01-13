export default function hasValidIndependentClause(str) {
  console.log('hasValidIndependentClause');

  return;

  // define acceptable patterns
  // Verb object
    // eat food
    // we/i/you bite the human

  // verb prepositional-phrase
    // walk to the door
    // jump on the couch
    // walk through to the door

  // verb adverb prepositional-phrase prepositional-phrase
    // walk to the couch in the living room
    // eat the dog food with my teeth

  // Consecutive nouns
  // Sheryl went to the tickets office → Sheryl went to the ticket office.

  // Misused words correction
  // Using its contextual grammar checker, Ginger recognizes the misused words in any sentence and replaces them with the correct ones. I was wandering if there’s any news. → I was wondering if there’s any news.

  // Phonetic spelling mistakes are corrected even if the correct spelling is very different from the way they were originally written: I like books, exspecaley the classics → I like books, especially the classics

  // Irregular verb conjugations are corrected as well:
  // He flyed to Vancouver → He flew to Vancouver
};
