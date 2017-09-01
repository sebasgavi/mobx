import * as React from 'react';
import { render } from 'react-dom';

class Test extends React.Component<{},{}>{
  constructor(props){
    super(props);
  }

  render(){
    return <div>
      Hola
    </div>
  }
}


render(
  <div>
    Danulo
    <Test />
  </div>,
  document.getElementById('root')
);

