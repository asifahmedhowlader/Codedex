const dnaPieces = ["A", "C", "G", "T"];
let myDna = [];
for (let i = 0; i < 24; i++) {
  let randomIndex1 = Math.floor(Math.random() * dnaPieces.length);
  let randomIndex2 = Math.floor(Math.random() * dnaPieces.length);
  let randomIndex3 = Math.floor(Math.random() * dnaPieces.length);
  //console.log(randomIndex1, randomIndex2, randomIndex3);
  let sequence =
    dnaPieces[randomIndex1] + dnaPieces[randomIndex2] + dnaPieces[randomIndex3];

  myDna.push(sequence);
}
console.log(myDna);
