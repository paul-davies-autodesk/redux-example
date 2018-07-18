import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemInput from './ItemInput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], newItem: ''};

    this.onAddItem = this.onAddItem.bind(this);
    this.onItemChanged = this.onItemChanged.bind(this);
  }

  onItemChanged(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  onAddItem() {
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: ''
    });
  }

  render() {
    return (
      <div>
        <ItemInput newItem={this.state.newItem} onAddItem={this.onAddItem} onItemChanged={this.onItemChanged}/>
        <ItemsList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
