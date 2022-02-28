export const HelloWorld = () => {

  // JSX is an HTML-like syntax
  // JSX is really just a function call

  // lowercase tag name means the element is intrinsic

  // return React.createElement(React.Fragment, null,
  //  React.createElement('h1', null, 'Hello, World!'),
  //  React.createElement('span', null, 'test'));

  // empty angle brackets are a fragment
  return (
    <>
      <h1>Hello, World!</h1>
      <span>test</span>
    </>
  );

};