
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { observer } from 'mobx-react';
import Landing from './landing';
import { Container, Appbar } from 'muicss/react';

@observer
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  routes() {
    return (
      <Switch>
        <Route exact path="/" component={ Landing } />
      </Switch>
    );
  }

  render() {
    let s1 = {verticalAlign: 'middle'};

    return (
      <Container>
        <Appbar>
          <table>
            <tbody>
             <tr style={s1}>
               <td className="mui--appbar-height"><h3>Portfolific</h3></td>
             </tr>
           </tbody>
         </table>
        </Appbar>
        <Router>
          { this.routes() }
        </Router>
      </Container>
    );
  }
}

export default Main;