import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from 'App';
import Todo from 'components/todo'
import Game from 'components/2048/2048'
import 'index.css';


class Index extends Component {
  render() {
    return <div>Index</div>;
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/todo" component={Todo} />
      <Route path="/game" component={Game} />
    </Route>
  </Router>
),
document.querySelector('#root'));
