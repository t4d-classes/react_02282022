import { ToolHeader } from "./ToolHeader";
import { CarTable } from './CarTable';

export const CarTool = (props) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
    </>
  );

};
