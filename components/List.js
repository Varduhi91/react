import React from "react";
import PropTypes from "prop-types"

export default function List(props) {
    return (
      <ol style = {{margin: "-15px"}}>
        {props.list.map(item => (
          <li key={item._id}>
            {item.name.first} 
            {item.name.last}
            {item.balance} 
          </li>
        ))}
      </ol>
    );
  }

  List.ProtoTypes = {
    data: PropTypes.array
  }
