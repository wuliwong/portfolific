import React from 'react';
import { observer } from 'mobx-react';

@observer
class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div><h1>Landing page</h1></div>
    )
  }
}

export default Landing;