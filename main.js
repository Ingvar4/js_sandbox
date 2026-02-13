let person = {
  name: "John Doe",
  greet: function () {
    return "Hi, I'm " + this.name;
  }
};

let teacher = Object.create(person);

teacher.name = 'Kek Doe';
teacher.teach = function (subject) {
  return "I can teach " + subject;
}

console.log(teacher.greet())