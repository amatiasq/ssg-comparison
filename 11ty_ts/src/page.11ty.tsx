// src/page.11ty.js
import React from 'react';
import { page } from './util';

export const data = {
  title: 'Setting up Eleventy with Preact and htm',
  // layout: 'layout.njk',
  // pagination: {
  //   data: 'pages',
  //   size: 1,
  //   alias: 'page',
  //   addAllPagesToCollections: true,
  // },
  // permalink: ({ page }: any) => `/${page.slug}/index.html`,
};

export const render = page(<>POTATO5</>);
