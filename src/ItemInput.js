import React from 'react';

const ItemInput = props => (
  <div>
    <input type="text" onChange={props.onItemChanged} value={props.newItem}/>
    <button onClick={props.onAddItem}>Add</button>
  </div>
);

export default ItemInput;
