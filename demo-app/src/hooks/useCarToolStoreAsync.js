import { useState, useEffect } from 'react';

import { createApi } from '../services/apiData';


const carsApi = createApi('cars');

export const useCarToolStoreAsync = () => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = async () => {
    const cars = await carsApi.all();
    setCars(cars);
  };

  const addCar = async (car) => {
    await carsApi.append(car);
    await refreshCars();
    setEditCarId(-1);
  };

  const saveCar = async (car) => {
    await carsApi.replace(car);
    await refreshCars();
    setEditCarId(-1);
  };

  const deleteCar = async carId => {
    await carsApi.remove(carId);
    await refreshCars();
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  useEffect(() => {

    // run some code on the first render only
    refreshCars();

  }, []);

  return {
    cars, editCarId,
    editCar: setEditCarId, addCar,
    saveCar, deleteCar, cancelCar
  }

}