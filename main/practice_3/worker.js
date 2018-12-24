import Person from './person.js';

class Worker extends Person {
  introduce() {
    return (`I am a Worker. I have a job.`);
  }
}

export default Worker;