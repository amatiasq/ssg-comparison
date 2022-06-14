import { renderToStaticMarkup } from 'react-dom/server';

export const page = (jsx: JSX.Element) => () => renderToStaticMarkup(jsx);
