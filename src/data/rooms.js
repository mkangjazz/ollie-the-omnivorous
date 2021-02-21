const rooms = [];

function Room(name, description, exits, objects) {
  this.description = description;
  this.exits = exits;
  this.name = name;
  this.objects = objects;
}

rooms.push(new Room(
  'living-room',
  'living room description ipsum dolor',
  [
    'hallway',
    'kitchen',
  ],
  [],
));

rooms.push(new Room(
  'hallway',
  'hallway narrow corridor wooden floor several doors',
  [
    'bathroom',
    'bedroom',
    'guest',
    'kitchen',
    'office',
  ],
  [],
));

rooms.push(new Room(
  'kitchen',
  'kitchen description ipsum dolor',
  [
    'backyard',
    'bathroom-2',
    'living-room',
    'hallway',
  ],
  [],
));

rooms.push(new Room(
  'bathroom',
  'bathroom description ipsum dolor',
  [
    'hallway',
  ],
  [],
));

rooms.push(new Room(
  'master-bedroom',
  'masterBedroom description ipsum dolor',
  [
    'bathroom-2',
    'hallway',
  ],
  [],
));

rooms.push(new Room(
  'guest',
  'guestBedroom description ipsum dolor',
  [
    'hallway',
  ],
  [],
));

rooms.push(new Room(
  'office',
  'office description ipsum dolor',
  [
    'hallway',
  ],
  [],
));

rooms.push(new Room(
  'backyard',
  'backyard description ipsum dolor',
  [
    'kitchen',
  ],
  [],
));

rooms.push(new Room(
  'bathroom-2',
  'bathroom-2 description ipsum dolor',
  [
    'bedroom',
    'kitchen',
  ],
  [],
));

export default rooms;
