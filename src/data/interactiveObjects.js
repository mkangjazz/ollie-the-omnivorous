const interactiveObjects = [
  {
    name: 'food bowl',
    description: 'half full or empty of dog food',
    state: 'half full', // can i reduce this to true/false states...
    // i can/should be completely oblivious to what room i'm in
  },
];

function InteractiveObject(name, description) {
  this.name = name;
  this.description = description;  
}

// what kinds of interactions and states do we need to track?
  // isDrinkable
  // isEdible
  // isShreddable
  // points for eating/consuming
  // side effects, like makes people anger meter increase
    // makes you feel sick

export default interactiveObjects;
