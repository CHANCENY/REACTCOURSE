import React from "react";
import LineItem from "./LineItem";

//type Props = {}

const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
    //this is unordered list component
    <ul className="list-group ms-5 mt-4">
      {items.map((item) => (
        <LineItem key={item.id} item = {item} handleChecked ={handleChecked} handleDelete ={handleDelete}/>
      ))}
    </ul>
  );
};

export default ItemList;
