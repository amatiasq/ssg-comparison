import mdx from '@mdx-js/mdx';

import { promises as fs } from 'fs';

(async () => {
  const file = await fs.readFile('./src/example.mdx');
  const result = await mdx(file);
  await fs.writeFile('./pages/example.jsx', result);

  const module = await import('./pages/example.jsx');
  console.log(result);
})();
