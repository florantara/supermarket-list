import React, { Component } from 'react';
import '../css/List.css';
import Item from './Item'

class List extends Component {

    deleteThisItem(which){
        this.props.deleteFromListArray(which);
    }

    render() {
        return (
            <ul className="List">
                {this.props.items.map( (item, index) => {
                    return <Item key={index} text={item} onDelete={this.deleteThisItem.bind(this, index)}/>
                })

                }
            </ul>
        );
    }
}

export default List;