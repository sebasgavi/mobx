import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import { delorean } from 'mobx-delorean';

class TodoStore {
  @observable tasks = [
    { name: 'Angular', done: false },
    { name: 'is', done: false },
    { name: 'for', done: false },
    { name: 'losers', done: false },
  ];

  @observable timer: number = 0;

  @computed get completed(){
    return this.tasks.reduce((count, task) => {
      console.log('computing...');
      return task.done ? count + 1 : count;
    }, 0);
  }

  @action toggleTask(task: any) {
    task.done = !task.done;
  }
}


const todoStore = new TodoStore();
delorean(todoStore);

@observer export class Todo extends React.Component {

  constructor(props: any){
    super(props);
    setInterval(() => todoStore.timer++, 1000);
  }

  render() {
    /*var completed = 0;
    this.tasks.forEach(t => {
      console.log('calculando...');
      if(t.done) completed++;
    });*/

    return (
      <div>
        <h2>Completed tasks: {todoStore.completed}</h2>
        <h3>{todoStore.timer}</h3>
        <ul>
          {todoStore.tasks.map((task) =>
            <li
              style={{ color: task.done ? 'red' : 'black' }}
              key={task.name}
              onClick={() => todoStore.toggleTask(task)}
              >
              {task.name}
            </li>
          )}
        </ul>

        <DeloreanTools />
      </div>
    )
  }
  
  
}

