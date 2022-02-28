

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'red', hexcode: 'ff0000'},
    { id: 2, name: 'green', hexcode: '00ff00'},
    { id: 3, name: 'blue', hexcode: '0000ff'},
  ];

  const colorListItems = colors.map(color => <li key={color.id}>
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