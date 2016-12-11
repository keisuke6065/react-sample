import React, { Component} from 'react';
import {Link} from 'react-router';
import Nav from 'components/template/Nav.js';


class App extends Component {
  componentDidMount() {
    if (typeof componentHandler !== 'undefined') { // eslint-disable-line
      componentHandler.upgradeDom(); // eslint-disable-line
    }
  }

  componentDidUpdate() {
    if (typeof componentHandler !== 'undefined') { // eslint-disable-line
      componentHandler.upgradeDom(); // eslint-disable-line
    }
  }

  render() {
    return (
        <div className="mdl-layout mdl-js-layout">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                  <i className="material-icons">search</i>
                </label>
                <div className="mdl-textfield__expandable-holder">
                  <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp"/>
                </div>
              </div>
              </div>
          </header>
          
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title">Title</span>
              <nav className="mdl-navigation">
                <Link to="/todo" className="mdl-navigation__link">todo</Link>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
            <main className="mdl-layout__content">
              <div className="page-content">{this.props.children}</div>
            </main>
        </div>
        );
  }
}

export default App;
