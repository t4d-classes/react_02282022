import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

render(
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector("#root"),
);

