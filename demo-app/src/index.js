import { render } from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

render(
  // tag name that starts with an upper-case letter means custom component
  // React.createElement(HelloWorld);
  <HelloWorld />,
  document.querySelector("#root"),
);

