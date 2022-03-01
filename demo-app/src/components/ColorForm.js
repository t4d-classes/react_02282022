import { useState } from 'react';

export const ColorForm = () => {

  const formState = useState(
    { name: '', hexcode: '' } // initial form state
  );

  // state data
  const colorForm = formState[0];

  // function to update the state data, and triggers the re-render
  const setColorForm = formState[1];


  

  // fn
  const change = (e) => {

    // get the input element where the event fired
    const inputElement = e.target; // target is the element where the change event fired

    const valueTypedInByTheUser = inputElement.value;
    const formControlName = inputElement.name;

    // produced a new object reference and copied over the values from the
    // original colorForm object
    const newColorForm = {
      name: colorForm.name,
      hexcode: colorForm.hexcode,
    };

    newColorForm[formControlName] = valueTypedInByTheUser;

    // update the state data, and triggers the re-render
    setColorForm(newColorForm);

  };

  console.log(colorForm);

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button">Add Color</button>
    </form>
  )


};