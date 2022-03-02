import { useState } from 'react';

import { useList } from './useList';


export const useCarToolStore = (initialCars) => {

  // both of these are application state

  // persistent data that application was created to manage
  const [ cars, replaceCar, removeCar, appendCar ] = useList([ ...initialCars ]);

  // temporary data used to render the ui at a given moment
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars, editCarId,
    editCar: setEditCarId, addCar,
    saveCar, deleteCar, cancelCar
  }

}