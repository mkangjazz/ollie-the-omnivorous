import dictionary from '../data/dictionary';

export default function parseInput(userInput) {
  function getWordFromDictionary(word) {
    if (dictionary.hasOwnProperty(word)) {
      return dictionary[word];
    } else {
      return  false; 
    }
  }

  function isValidImperativeSentence(str) {
    // A simple sentence consists of a single independent clause with no dependent clauses.

    function hasValidIndependentClause() {
      // each of these valid independent clauses?
      // i eat the dog food
        // do we need "i" or any subject pronoun?
        // 
      // eat dog food
      // eat the dog food
      // eat the dog dog dog
      // eat the food
      // eat food
      // eat food dog
      // eat doggo foodo
      // eat kibble
      // nibble on kibble
      // chew food
      // chew kibble
      // sniff bowl
      // sniff food

      console.log('hasValidIndependentClause');
      // Subject verb agreement
      // The smell of flowers bring back memories. → The smell of flowers brings back memories.

      // Singular/Plural nouns
      // Six people lost their life in the accident → Six people lost their lives in the accident.

      // Consecutive nouns
      // Sheryl went to the tickets office → Sheryl went to the ticket office.

      // Misused words correction
      // Using its contextual grammar checker, Ginger recognizes the misused words in any sentence and replaces them with the correct ones. I was wandering if there’s any news. → I was wondering if there’s any news.

      // Contextual spelling correction
      // The Ginger Spell Checker is a contextual spell checker which identifies the correction that best fits the meaning of the original sentence. When combined with the Ginger Grammar Checker, you can correct entire sentences in a single click. The same misused word will have a different correction based on the context:
      // The marble statue hed a big hed → The marble statue had a big head.

      // Phonetic spelling mistakes are corrected even if the correct spelling is very different from the way they were originally written: I like books, exspecaley the classics → I like books, especially the classics

      // Irregular verb conjugations are corrected as well:
      // He flyed to Vancouver → He flew to Vancouver
      //    sentence requires a 
      //    return;
      //  }
    }

    function hasNoDependentClauses() {
      console.log('hasNoDependentClauses');
    }

    // return true || false;
  }

  function splitIntoTokens(str) {
    const regex = /\s+|\b/igm;
    const parts = str.split(regex);
    const tokens = parts.map((token) => getWordFromDictionary(token));

    return tokens.filter((token) => token !== false);
  }

  const tokens = splitIntoTokens(userInput);

  // isValidImperativeSentence();
  console.log('tokens', tokens);

  // what should we return?
  // the text response
  // the valid command (you eat the food)
  // an error message, if error

  // return words;
}
