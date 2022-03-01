import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";

export const ColorTool = (props) => {

  // the code
  // props.colors.push({ id: 4, name: 'yellow', hexcode: '00ffff' });

  // props.colors = [];
  // props.newProp = "test";



  return (
    <>
      <ToolHeader headerText={props.headerText} />
      <ColorList colors={props.colors} />
    </>
  );

};