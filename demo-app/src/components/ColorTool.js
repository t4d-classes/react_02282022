import { useList } from '../hooks/useList';
import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, , , appendColor ] = useList([ ...props.colors ]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm onSubmitColor={appendColor} />
    </>
  );

};