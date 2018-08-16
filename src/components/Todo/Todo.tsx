import * as React from 'react';

interface ITodoProps{
}

interface ITodoState{
  tasks: { name: string, done: boolean }[];
}

export class Todo extends React.Component<ITodoProps, ITodoState> {
  constructor(props: ITodoProps) {
    super(props)
    this.state = {
      tasks: [
        { name: 'Angular', done: false },
        { name: 'is', done: false },
        { name: 'for', done: false },
        { name: 'losers', done: false },
      ]
    };
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task) =>
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
  
  onElementClick(task: any) {
    task.done = !task.done;
    this.setState({});
  }
}

/**
 * Usar this.setState({}); nos muestra 2 problemas:
 * * setState internamente está haciendo una especie de forceUpdate
 * * setState no verifica que información se está pasando para hacer el render, no es óptimo
 */