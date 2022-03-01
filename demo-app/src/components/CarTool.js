import { ToolHeader } from "./ToolHeader";
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
      <CarForm />
    </>
  );

};
