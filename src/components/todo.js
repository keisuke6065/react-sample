import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], text: '' };
  }

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
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <div className="mdl-textfield mdl-js-textfield">
            <input onChange={this.handleChange} value={this.state.text} className="mdl-textfield__input" type="text" id="sample1" />
            <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
          </div>
          <br />
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">{'Add #' + (this.state.items.length + 1)}</button>
        </form>

      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li className="mdl-list__item" key={item.id}>
            <span className="mdl-list__item-primary-content">
              <i className="material-icons mdl-list__item-icon">person</i>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;