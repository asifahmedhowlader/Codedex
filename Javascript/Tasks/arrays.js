let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

groceryList[2] = "🧈 Butter";
groceryList[4] = "🧼 Laundry soap";

console.log(`array length: ${groceryList.length}`);

console.log(groceryList);
//looping over arrays

const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
  console.log(musicNotes[i]);
}
