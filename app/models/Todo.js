import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';

class Todo {

  constructor(todo) {
    this.id = uuidv1();

    this.text = todo.text;
    this.time = moment().startOf('hour').fromNow();
    this.type = 'active';
    this.completed = false;
  }

  getId = () => {
     return this.id;
  }

  getText = () => {
     return this.text;
  }

  setText = (text) => this.text = text;

  getType = () => {
    return this.type;
  }

  setType = (type) => this.type = type;

  isCompleted = () => {
    return this.completed;
  }

  setCompleted = (completed) => this.completed = completed;
}

export default Todo;
