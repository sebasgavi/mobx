import * as React from 'react';
import { render } from 'react-dom';

<<<<<<< HEAD
class Test extends React.Component<{},{}>{
  render(){
    return <div>
      React is working!
    </div>
  }
}
=======
import { Root } from './root';
>>>>>>> fb933db6c0786ee4967cf279b05d02bd0e1e2f03

render(
  <Root />,
  document.getElementById('root')
);