import React, { Component } from 'react';
import ListItem from './Components/ListItem/ListItem';
import AddItem from './Components/AddItem/AddItem';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Amr', age: 23 },
      { id: 2, name: 'Mohamed', age: 31 },
      { id: 3, name: 'Ahmed', age: 35 }
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState(
      { items }
    )
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState(
      { items }
    )
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>
          TodoList App
        </h1>
        < ListItem items={this.state.items} deleteItem={this.deleteItem} />
        < AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
