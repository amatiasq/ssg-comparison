import React from 'react';
import { addPrefetchExcludes } from 'react-static';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

export default function App() {
  return <>APP</>;
}
