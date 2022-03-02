import { useState } from 'react';

import { ToolHeader } from "./ToolHeader";
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  // both of these are application state

  // persistent data that application was created to manage
  const [ cars, setCars ] = useState([ ...props.cars ]);

  // temporary data used to render the ui at a given moment
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {

    setCars([
      ...cars,
      {
        ...car,
        // calculate the next id
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
  
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

};
