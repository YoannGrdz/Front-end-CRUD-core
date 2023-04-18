import React from "react";
import EditItemForm from "./EditItemForm.js";

export default function Item(props){

    const key = props.key;
    const id = props.id;
    const itemName = props.itemName;
    const removeItem = props.removeItem;
    const setItemsState = props.setItemsState;

    // addingItem tracks whether an Item is being edited or not. Depending on its value, the EditItemForm can be displayed or removed.
    const [editingItem, setEditingItem] = React.useState(false);


    return(
        <div className="item" key={key}>
            <div className="item--content">
                <p>{itemName}</p>
                <button className="removeItemButton" onClick={() => {removeItem(id)}}>X</button>
                <button className="editItemButton" onClick={() => {setEditingItem(true)}}>...</button>
            </div>
            
            {/* displaying the form to edit an item if editingItem is active */}
            {editingItem && <EditItemForm setEditingItem={setEditingItem} setItemsState={setItemsState} editingItemId={id}/>}
        </div>
    )
}

