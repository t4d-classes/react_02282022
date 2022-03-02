import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";

export const CarTable = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car => car.id === props.editCarId
          ? <CarEditRow key={car.id} car={car} />
          : <CarViewRow key={car.id} car={car}
              onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>
  );

};
