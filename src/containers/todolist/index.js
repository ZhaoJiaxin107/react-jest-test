import React, { Component, Fragment } from 'react';
import Header from './components/Header'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            undoList: []
        }
        this.addUndoItem = this.addUndoItem.bind(this);
    }
    addUndoItem(value) {
        this.setState({
            undoList: [...this.state.undoList, value]
        })
    }
    render() {
        return <Fragment><Header addUndoItem={this.addUndoItem}/>
        {
            this.state.undoList.map((item, index) => {
                return <div key = {index}>{item}</div>
            })
        }
        </Fragment>
    }
}

export default TodoList;