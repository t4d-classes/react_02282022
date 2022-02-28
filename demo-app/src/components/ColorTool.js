

export const ColorTool = (props) => {



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