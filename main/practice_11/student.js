import Person from "./person.js";

class Student extends Person {
  constructor (id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce () {
    if (this.klass.leader && this.id === this.klass.leader.id) {
      return (super.introduce() + ` I am a Student. I am Leader of Class ${this.klass.number}.`);
    } else {
      return (super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`);
    }
  }
}

export default Student;