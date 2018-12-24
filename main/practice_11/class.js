class Class {
  constructor(number) {
    this.number = number;
  }

  getDisplayName() {
    return ('Class ' + this.number);
  }

  isIn(student) {
    return (student.klass === this) ? true : false;
  }

  registerAssignLeaderListener(teacher) {
    this.teacher = teacher;
  }

  registerJoinListener(teacher) {
    this.teacher = teacher;
  }

  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
      if (this.teacher) {
        console.log('I am ' + this.teacher.name + '. I know ' + this.leader.name + ' become Leader of Class ' + this.number + '.');
      }
    } else {
      console.log('It is not one of us.');
    }
  }

  appendMember(student) {
    student.klass = this;
    if (this.teacher) {
      console.log('I am ' + this.teacher.name + '. I know ' + student.name + ' has joined Class ' + this.number + '.');
    }
  }
}

export default Class;