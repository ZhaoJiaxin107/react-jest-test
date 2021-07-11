import React, { Component } from 'react';
class Header extends Component {
    
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
        this.state = {
            value: ''
        }
    }
    handleInputChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleInputKeyUp(e){
        const { value } = this.state;
        if(e.keyCode === 13 && value){
            this.props.addUndoItem(value);
            this.setState({value: ''});
        }
    }
    render() {
        const { value } = this.state
        return <div>
            <input 
            data-test = 'input' 
            value = {value} 
            onChange = {this.handleInputChange}
            onKeyUp = {this.handleInputKeyUp}/>
        </div>
    }
}

export default Header;