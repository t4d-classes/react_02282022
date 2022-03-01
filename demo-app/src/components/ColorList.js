export const ColorList = (props) => {

  const colorListItems = props.colors.map(color => <li key={color.id}>
    {color.name} {color.hexcode}
  </li>);

  return (
    <ul>
      {colorListItems}
    </ul>
  );

};