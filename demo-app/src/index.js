import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000'},
  { id: 2, name: 'green', hexcode: '00ff00'},
  { id: 3, name: 'blue', hexcode: '0000ff'},
];

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList }); */}
    <ColorTool colors={colorList} />
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector("#root"),
);

