import objects from './interactiveObjects';
import rooms from './rooms';

const gamedata = {
  interactive_objects: objects,
  rooms: rooms,
  introText: [
    'You\'re a young Husky puppy named Ollie. You were just adopted from the local shelter, and this is your first evening in your new house with your new humans.'
  ],
  instructionsText: [
    'Two-word parser: verb + noun',
    'As a dog, you have no concept of things like kitchen or hallway, so...',
      'Verbs',
      'Nouns',
  ],
  winText: [
    'Win description',
  ],
  loseText: [
    'Lose description',
  ],
};

export default gamedata;
