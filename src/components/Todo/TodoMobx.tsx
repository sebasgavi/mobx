import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer export class Todo extends React.Component {
  @observable tasks = [
    { name: 'Angular', done: false },
    { name: 'is', done: false },
    { name: 'for', done: false },
    { name: 'losers', done: false },
  ];

  @observable timer: number = 0;

  constructor(props: any){
    super(props);
    setInterval(() => this.timer++, 1000);
  }

  @computed get completed(){
    return this.tasks.reduce((count, task) => {
      console.log('computing...');
      return task.done ? count + 1 : count;
    }, 0);
  }
  
  render() {
    /*var completed = 0;
    this.tasks.forEach(t => {
      console.log('calculando...');
      if(t.done) completed++;
    });*/

    return (
      <div>
        <h2>Completed tasks: {this.completed}</h2>
        <h3>{this.timer}</h3>
        <ul>
          {this.tasks.map((task) =>
            <li
              style={{ color: task.done ? 'red' : 'black' }}
              key={task.name}
              onClick={() => this.onElementClick(task)}
              >
              {task.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
  
  @action onElementClick(task: any) {
    task.done = !task.done;
  }
}

