import React from 'https://esm.sh/react';
import { renderToStaticMarkup } from 'https://esm.sh/react-dom/server';

function MyComponent() {
  return <div>potato</div>;
}

console.log(renderToStaticMarkup(<MyComponent />));
