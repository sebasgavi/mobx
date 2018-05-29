import * as React from 'react';
import { render } from 'react-dom';

class Test extends React.Component<{},{}>{
  render(){
    return <div>
      React is working!
    </div>
  }
}

render(
  <Test />,
  document.getElementById('root')
);

