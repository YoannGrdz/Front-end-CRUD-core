import React from "react";

export default function EditItemForm (props){

    const id = props.editingItemId;
    const setEditingItem = props.setEditingItem;
    const setItemsState = props.setItemsState;
    

    const [formData, setFormData] = React.useState({itemName: "", id: id})

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(
          previous => {
            return {
              ...previous,
              [name]: value
            }
          }
        )
    }

    // pseudo code :

    /* 
    - make a copy of the formData object

    - get the id of the object currently being modified

    - in mainstate array find the index of the object whose id corresponds to the id of the object currently being modified

    - change the object located at that index to the formData copy object

    - close edit form
    */


    // function called when the form is submitted, updates the main state by updating the item as edited bythe user then removes the form.
    function handleSubmit(event){
        event.preventDefault();
        const itemObjectCopy = {...formData};
        setItemsState(
            (previous) => {

                const mainStateCopy = [...previous];
                let index = null;
                for (let i = 0; i < mainStateCopy.length; i++){
                    if (mainStateCopy[i].id === id){
                        index = i;
                    }
                }
                mainStateCopy[index].itemName = itemObjectCopy.itemName;
                return mainStateCopy;
            }
        )
        setEditingItem(false);
    }



    return(
        <div>
            <form className="editItemForm" onSubmit={handleSubmit}>
                <p>Edit item</p>
                <label className="editItemForm--Input--label">
                    name
                    <input 
                    className="editItemForm--Input"
                    type="text" 
                    value={formData.itemName}
                    onChange={handleChange}
                    name="itemName"
                    />
                </label>
                <button className="editItemForm--submit" type="submit">Confirm</button>
                <button className="editItemform--cancel" onClick={() => {setEditingItem(false)}} type="button">Cancel</button>
            </form> 
        </div>
    )
}