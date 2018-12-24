import Person from "./person.js";

class Teacher extends Person {
  constructor (id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    if (this.klasses) {
      let classNumber = this.klasses.map(klass => klass.number).join(', ')
      return (super.introduce() + ` I am a Teacher. I teach Class ${classNumber}.`);
    } else {
      return (super.introduce() + ' I am a Teacher. I teach No Class.');      
    }
  }

  isTeaching(student) {
    return (this.klasses.number.reduce((result, klass) => result || klass.isIn(student)));
  }
}

export default Teacher;