// setInputCount((inputCount) => inputCount + 1);

// setInputValue((arr) => [...arr, value]);
//The main commands in text adventures tend to be LOOK3, those for movement (N, E, S, W, NE, NW, SE, SW, UP, DOWN) and those for handling objects (GET, DROP, INVENTORY4), but you'll certainly need others to get anywhere. Most games have a vocabulary of dozens of words and can cope with sentences like 'HANG RED COAT ON HOOK's.

const verbs = [
  'bark',
  'beg',
  'bite',
  'chew',
  'chomp',
  'dash',
  'eat',
  'examine',
  'explore',
  'nip',
  'growl',
  'hop',
  'jump',
  'lick',
  'lay',
  'leap',
  'lie',
  'sniff',
  'pick up',
  'plant',
  'play',
  'put down',
  'run',
  'settle',
  'sit',
  'taste',
  'test',
  'whine',
  'sprint',
  'pounce',
  'sleep',
  'nuzzle',
  'paw',
  'wag',
  'walk',
  'trot',
  'try', // is this...? like test/taste, try using, try barking...
];

export default verbs;