let car = {
  model: "Ford Focus",
  year: 2025,
  color: "Green",
  used: false,
};
if (car.used == true) {
  console.log(
    `I'm looking for a ${car.color} ${car.year} ${car.model} that is used.`
  );
} else {
  console.log(
    `I'm looking for a ${car.color} ${car.year} ${car.model} that is new.`
  );
}
