import { render } from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

import './index.css';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000'},
  { id: 2, name: 'green', hexcode: '00ff00'},
  { id: 3, name: 'blue', hexcode: '0000ff'},
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 120000 },
];

render(
  <>
    <ColorTool colors={colorList} />
    <CarTool  cars={carList} />
  </>,
  document.querySelector("#root"),
);

