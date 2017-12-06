import React from 'react'


// Functional Component:

// Why? ....

// - This component doesn't need to handle state

// Cool notes:
// - It doesn't use "this"
// - Receives props as params
// - Doesn't have lifecycle, thus no render(), just return()

const Item  = ({text, onDelete}) => {

    const deleteMe = () => {
        onDelete()
    }

    return (

        // - <small> receives an onClick that will trigger a funcion on the parent that will pass the index up to the array and the parent component will update state with the new array

        <li>{text} <small onClick={deleteMe} > &times;  </small> </li>
    )
}

export default Item;