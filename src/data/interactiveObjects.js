const interactiveObjects = [];

function InteractiveObject(name, description) {
  this.name = name;
  this.description = description;  
}

interactiveObjects.push(new InteractiveObject(
  'food bowl',
  'half full or empty of dog food',
));

// what kinds of interactions and states do we need to track?
  // isDrinkable
  // isEdible
  // isShreddable
  // is biteable/chewable
  // is barkable

  // points for eating/consuming
  // side effects, like makes people anger meter increase
    // makes you feel sick

export default interactiveObjects;
