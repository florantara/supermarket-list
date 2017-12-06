import React, { Component } from 'react'
import '../css/App.css'
import List from './List'
import Form from './Form'

class App extends Component {

    constructor(prop){
        super(prop);
        this.state={
            allItems: []
        }
    }

    updateListItems( fromInput ){
        this.setState({
            allItems: [
                ...this.state.allItems,
                fromInput
            ]
        })
    }

    handleDelete( which ) {
        let allItems = this.state.allItems;
        allItems.splice( which, 1 );
        this.setState({
            allItems
        })
    }

    render() {
        return (
            <div className="superMarketList">
                <div className="paper">
                    <h1>Supermarket List</h1>
                    <Form onItemAdded={this.updateListItems.bind(this)}/>
                    <List items={this.state.allItems} deleteFromListArray={this.handleDelete.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;
