pig = {
  name: "Pit",
  type: "pig",
  age: 3,
  makeSound() {
    console.log(
      `${pig.name} is a ${pig.age} years old ${pig.type} that goes snort.`
    );
  },
};
sheep = {
  name: "Mike",
  type: "sheep",
  age: 2,
  makeSound() {
    console.log(
      `${sheep.name} is a ${sheep.age} years old ${sheep.type} that goes baa.`
    );
  },
};
dog = {
  name: "Tom",
  type: "dog",
  age: 5,
  makeSound() {
    console.log(
      `${dog.name} is a ${dog.age} years old ${dog.type} that goes bhau.`
    );
  },
};
pig.makeSound();
sheep.makeSound();
dog.makeSound();
