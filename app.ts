// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: Role.ADMIN,
// };

// let favoriteActivities: string[];
// favoriteActivities = ["sports"];

// console.log(person.name);

// person.hobbies.map((hob) => {
//   console.log(hob.toUpperCase());
// });

// if (person.role === Role.ADMIN) {
//   console.log("is author");
// }

type Combinable = number | string;
type ConversionDescriptor = "as-numbers" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConver: ConversionDescriptor
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConver === "as-numbers") {
    return +result;
  } else {
    return result.toString();
  }
};

const combinedAges = combine(30, 26, "as-numbers");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-numbers");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
