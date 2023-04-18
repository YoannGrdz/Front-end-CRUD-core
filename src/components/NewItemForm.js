import React from "react";

export default function NewItemForm (props){

    const addItem = props.addItem;
    const setAddingItem = props.setAddingItem;

    // state for the form to set the name of the new element
    const id = React.useId();
    const [formData, setFormData] = React.useState({"itemName": "", id: id});


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

    // function called when the form is submitted, updates the main state by adding the item defined by the user then resets the form.
    function handleSubmit(event){
        event.preventDefault();
        addItem(formData);
        setFormData("");
    }

    // function used to cancel the form when the user decides they don't want to add an item after all or if they misclicked.
    function cancelForm(){
        setFormData({itemName: "", id: id});
        setAddingItem(false);
    }

    return(
        <div>
            <form className="newItemForm" onSubmit={handleSubmit}>
                <p>New item</p>
                <label className="newItemForm--Input--label">
                    name
                    <input 
                    className="newItemForm--Input"
                    type="text" 
                    value={formData.itemName}
                    onChange={handleChange}
                    name="itemName"
                    />
                </label>
                <button className="newItemForm--submit" type="submit">Add item</button>
                <button className="newItemform--cancel" onClick={cancelForm} type="button">Cancel</button>
            </form> 
        </div>
    )
}



