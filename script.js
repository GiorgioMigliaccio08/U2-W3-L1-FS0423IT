const User = function (_firstName, _lastName, _age, _location) {
  this.firstName = _firstName;
  this.lastName = _lastName;
  this.age = _age;
  this.location = _location;
  this.showCompleteName = function () {
    return `Mi chiamo ${this.firstName} ${this.lastName} ho ${this.age} anni, vivo a ${this.location}`;
  };
};

const Giorgio = new User("Giorgio", "Migliaccio", "23", "Prizzi");

console.log(Giorgio.showCompleteName());

const Jonny = new User("Jonny", "Gallina", "21", "Vicari");

console.log(Jonny.showCompleteName());

const Peppe = new User("Peppe", "Ippolito", "27", "Prizzi");

console.log(Peppe.showCompleteName());

const Luigi = new User("Luigi", "Conte", "22", "Palazzo ");

console.log(Luigi.showCompleteName());

function comparaEtà(userA, userB) {
  if (userA.age > userB.age) {
    console.log(
      `${userB.firstName} ${userB.lastName} è più piccolo di ${userA.firstName} ${userA.lastName}`
    );
  } else {
    console.log(
      ` ${userA.firstName} ${userA.lastName} è più piccolo di ${userB.firstName} ${userB.lastName}`
    );
  }
}
comparaEtà(Giorgio, Jonny);
