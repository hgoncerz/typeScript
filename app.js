var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
person.hobbies.map(function (hob) {
    console.log(hob.toUpperCase());
});
if (person.role === Role.ADMIN) {
    console.log("is author");
}
