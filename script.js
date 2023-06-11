const players = ['Player 1', 'Player 2', 'Player 3'];
const person = {
  name: 'John',
  age: 25,
  nationality: 'USA'
};

// Create a variable 'team' that references the 'players' array
const team = players;

// Create a variable 'team1' that is a copy of the 'players' array
const team1 = [...players];

// Create a variable 'cap1' that is a copy of the 'person' object
const cap1 = { ...person };

console.log(team);   // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(team1);  // Output: ['Player 1', 'Player 2', 'Player 3']
console.log(cap1);   // Output: { name: 'John', age: 25, nationality: 'USA' }
