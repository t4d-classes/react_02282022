

export const ColorTool = (props) => {

  // the code
  // props.colors.push({ id: 4, name: 'yellow', hexcode: '00ffff' });

  // props.colors = [];
  // props.newProp = "test";

  const colorListItems = props.colors.map(color => <li key={color.id}>
    {color.name} {color.hexcode}
  </li>);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colorListItems}
      </ul>
    </>
  );

};