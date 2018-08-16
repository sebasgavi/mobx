import * as React from 'react';

interface ISelectProps{
  values: string[];
  onSelect?: (value: string) => void
}

interface ISelectState{
  selection: string;
  clicks: number[];
}

export class Select extends React.Component<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props)
    this.state = {
      selection: props.values[0],
      clicks: Array(props.values.length).fill(0),
    };
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.props.values.map((value: string, index) =>
            <li
              style={{ color: value === this.state.selection ? 'red' : 'black' }}
              key={value}
              onClick={() => this.onElementClick(value)}
              >
              {value} - {this.state.clicks[index]}
            </li>
          )}
        </ul>

        <button onClick={() => this.onNextClick()}>next!</button>
      </div>
    )
  }
  
  onElementClick(value: string) {
    this.state.clicks[this.props.values.indexOf(value)]++;
    this.setState({
      selection: value,
      clicks: this.state.clicks,
    });
    this.callOnSelect();
  }

  onNextClick(){
    const { values } = this.props;
    const { selection, clicks } = this.state;

    const index = values.indexOf(selection),
          next = index >= values.length - 1 ? 0 : index + 1,
          value = values[next];

    clicks[next]++;
    this.setState({ selection: value, clicks: clicks });
    this.callOnSelect();
  }

  callOnSelect(){
    const { onSelect } = this.props;
    if(typeof onSelect === 'function')
      onSelect(this.state.selection);
  }
}
