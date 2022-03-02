import { useState } from 'react';

export const useForm = initialForm => {

  const [ form, setForm ] = useState(initialForm);

  const change = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.type === "number"
        ? Number(target.value) : target.value,
    });
  };

  const resetForm = () => setForm(initialForm);

  // array type: elements of the array for a tuple
  return [ form, change, resetForm ];


};
