import { useState } from 'react';

import { useForm } from '../hooks/useForm';

const initCarForm = () => ({
  make: '', model: '', year: 1900, color: '', price: 0,
});

export const CarForm = (props) => {

  // component state
  const [ carForm, change, resetCarForm ] = useForm(initCarForm());

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    resetCarForm(initCarForm())
  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>Add Car</button>
    </form>
  )


};