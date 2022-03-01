import { useState } from 'react';

export const ColorForm = (props) => {

  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: ''});

  const change = ({ target }) => {
    setColorForm({
      ...colorForm,
      [target.name]: target.type === "number"
        ? Number(target.value) : target.value,
    });
  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: '', hexcode: '',
    });
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>Add Color</button>
    </form>
  )


};