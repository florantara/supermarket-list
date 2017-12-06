import React, { Component } from 'react'
import '../css/Form.css'

class Form extends Component {

    state={
        newListItem: "",
        input: ""
    }

    pushToParent( e ){
        e.preventDefault();
        if ( this.state.newListItem !== "" ){
            this.props.onItemAdded(this.state.newListItem);
        }
        this.setState({
            newListItem: "",
            input: ""
        })
    }

    getValueFromInput( value ){
        this.setState({
            newListItem: value,
            input: value
        })
    }

    render() {
        return (
            // pushToParent callback
            <form onSubmit={this.pushToParent.bind(this)}  >

                {/*
                    - value is handled by state making this a "Controlled Component"
                    - onChange it passes its value to the getValueFromInput to set the state and make it ready to be sent when onSubmit triggers.
                */}

                <input value={this.state.input}  name="listItem" onChange={ (event) => this.getValueFromInput( event.target.value ) } />

                <input type="submit" value="Create Item" />

            </form>

        )
    }
}
export default Form