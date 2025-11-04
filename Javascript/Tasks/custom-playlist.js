const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping",
];
let firstElement = musicPlaylist.shift();
let lastElement = musicPlaylist.pop();
let newEnd = musicPlaylist.push("Fire");
let newStart = musicPlaylist.unshift("Heart", "Bones");

console.log(musicPlaylist);
