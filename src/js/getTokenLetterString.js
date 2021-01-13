//import map from '../data/parts_of_speech_map';

export default function getTokenLetterString(words) {
  const tokens = [];

  for (let i = 0; i < words.length; i += 1) {
    const arr = [];
    const parts = words[i]['part_of_speech'];
    
    for (let i = 0; i < parts.length; i += 1) {
      arr.push([parts[i]]);
    }

    tokens.push(arr.join('-'));
  }

  return tokens.join(',');
};
