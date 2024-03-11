import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

const initialTodosList = []

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteFunction = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(each => each.id !== id)

    this.setState({todoList: filteredTodoList, input: ''})
  }

  onAdd = () => {
    const {input, todoList} = this.state

    const arr = input.split(' ')
    const lastNumber = input.slice(-1)
    if (arr.length === 1) {
      console.log(input)
      todoList.unshift({
        id: uuidv4(),
        title: input,
        count: 0,
      })
    }

    if (!Number.isNaN(parseInt(lastNumber))) {
      const numbe = arr[arr.length - 1]
      arr.pop()
      let i = 1
      while (i <= numbe) {
        const todo = arr.join(' ')
        todoList.unshift({id: uuidv4(), title: todo, count: 0})
        i += 1
      }
    }

    this.setState({todoList, input: ''})
  }

  editFunction = id => {
    const {todoList} = this.state
    const updated = todoList.map(each => {
      if (each.id === id) {
        return {...each, count: each.count + 0.5}
      }
      return each
    })
    this.setState({
      todoList: updated,
    })
  }

  render() {
    const {todoList, input} = this.state
    console.log(todoList)
    return (
      <div className="container">
        <div className="todoContainer">
          <h1 className="heading">Day Goals!</h1>
          <div className="inpp">
            <input
              type="text"
              className="inp"
              onChange={e => this.setState({input: e.target.value})}
              value={input}
            />
          </div>
          <button type="button" className="add-button" onClick={this.onAdd}>
            Add Todo
          </button>

          <ul className="unorderedList">
            {todoList.map(each => (
              <TodoItem
                item={each}
                key={each.id}
                deleteFunction={this.deleteFunction}
                editFunction={this.editFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
// Write your code here
