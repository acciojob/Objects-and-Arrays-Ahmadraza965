let players = []; // Array of players
let person = {}; // Object named person

let team = players; // Variable storing a reference to players array
let team1 = [...players]; // Variable storing a copy of players array using spread syntax

let cap1 = { ...person }; // Variable storing a copy of person object using spread syntax
