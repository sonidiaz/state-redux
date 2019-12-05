import React, { Component } from 'react';
import {Header} from './Header';
import List from './List';

import {connect} from 'react-redux'
import {createNewList} from '../state/list/list-actions-creator' 

import '../styles/App.css';

 class App extends Component {
   constructor(props) {
    super(props)
    this.state = {
      lists: ['lista1', 'lista 2']
    }

    this.changeListName = this.changeListName.bind(this);
  }
  render() {
    return(
      <>
        <Header/>
        <button onClick={this.createList.bind(this)} className="tdl-add_list_button">Create new list</button>
        <section className="tdl-main-section">
          {this.props.lists.map((list, idx, lists) => (
            <List
              key={idx}
              newListName={() => this.newListName(idx)}
              submitName={this.submitName}
              changeListName={() => this.changeListName(idx)}
            >
              {list}
            </List>
          ))}
        </section>
      </>
  )};
  changeListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = "";

    this.setState({
      lists: newArr
    });
  }

  newListName(index, event) {
    let newArr = this.state.lists.slice(0);
    newArr[index] = event.target.value;

    this.setState({
      lists: newArr
    });
  }

  submitName = (event) => {
    if(event.keyCode === 13){ event.target.blur() }
  }

  createList() {
    this.props.createNewList("New List")
  }
}


function mapStateToProps(state){
  return {
    lists: state.lists
  }
}

function mapDispatchToProps(dispach) {
  return {
    createNewList:(lists) => dispach(createNewList(lists))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);