class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return ('My name is ' + this.name + '. I am ' + this.age + ' years old.');
  }
}

class Worker extends Person {
  introduce() {
    return (super.introduce() + ' I am a Teacher. I have a job.');
  }
}

export default Worker;