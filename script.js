const players=["john","Bob","Alice","Poppy"];
const person={
    name: "John Doe",
    age:80,
};

const team = players;
const team1 = [...players];
const cap1 = {...person};

window.players= players;
window.person=person;
window.team= team;
window.team1= team1;
window.cap1=cap1;