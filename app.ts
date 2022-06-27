enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ["sports"];

console.log(person.name);

person.hobbies.map((hob) => {
  console.log(hob.toUpperCase());
});

if (person.role === Role.ADMIN) {
  console.log("is author");
}
