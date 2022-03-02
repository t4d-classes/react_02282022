import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from './ColorForm';

import { useColorToolStore } from "../hooks/useColorToolStore";




export const ColorTool = (props) => {


  const {
    sortedColors, addColor,
    sortAsc, sortDesc,
  } = useColorToolStore([ ...props.colors ]);



  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <button type="button" onClick={sortAsc}>Sort Asc</button>
      <button type="button" onClick={sortDesc}>Sort Desc</button>
      <ColorList colors={sortedColors} />
      <ColorForm onSubmitColor={addColor} />
    </>
  );

};