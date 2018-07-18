import React from 'react';
import Item from './Item';

const ItemsList = props => (
  <ul>
    {props.items.map(i => <Item key={i} item={i}/>)}
  </ul>
);

export default ItemsList;
