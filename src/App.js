import React, {Component} from 'react'; 
import Nav from 'components/template/Nav.js';

class App extends Component {
  render() {
    // ナビゲーションを作る
    return (
      <div className="App">
        <Nav></Nav>
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
