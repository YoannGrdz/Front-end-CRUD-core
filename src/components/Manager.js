import React from "react";
import Item from "./Item.js";
import NewItemForm from "./NewItemForm.js";

export default function Manager(){

    // main state storing the items created by the user
    const [itemsState, setItemsState] = React.useState(
        []
    )

    // addingItem tracks whether a new Item is being created or not. Depending on its value, the NewItemForm can be displayed or removed.
    const [addingItem, setAddingItem] = React.useState(false);


    // to be moved to NewItemForm ?
    // function that turns the state of the NewItemform into a new item, then hides the form. Passed to the NewItemForm component as props
    function addItem(itemObject){
        const itemObjectCopy = {...itemObject};
        setItemsState(
            (previous) => {
                return [...previous, {"itemName": itemObjectCopy.itemName, id: itemObjectCopy.id}];
            }
        )
        setAddingItem(false); 
    }

    // to be moved to Item ?
    // function to pass to an item so that it can be removed
    function removeItem(id) {
        setItemsState((previous) => {
            return previous.filter((item) => item.id !== id);
        });
    }

    return (
        <div className="manager">

            {/* mapping over the main state to display the llst of items created by the user  */}
            {itemsState.map((item) => <Item 
                key={`id${item.id}`} 
                id={item.id}
                itemName={item.itemName} 
                removeItem={removeItem} 
                setItemsState={setItemsState}
            />)}


            {/* displaying the form to create a new item if addingItem is active */}
            {addingItem && <NewItemForm setAddingItem={setAddingItem} addItem={addItem}/>}

            {/* button to activate addingItem and make the form to create a new item appear appear */}
            <button className="newItemButton" onClick={() => {setAddingItem(true)}}>New item</button>

        </div>
    )
}

