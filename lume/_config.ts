import lume from 'https:/deno.land/x/lume@v1.1.0/mod.ts';
import base_path from 'https:/deno.land/x/lume@v1.1.0/plugins/base_path.ts';
import bundler from 'https:/deno.land/x/lume@v1.1.0/plugins/bundler.ts';
import code_highlight from 'https:/deno.land/x/lume@v1.1.0/plugins/code_highlight.ts';
import date from 'https:/deno.land/x/lume@v1.1.0/plugins/date.ts';
import jsx from 'https:/deno.land/x/lume@v1.1.0/plugins/jsx.ts';
import postcss from 'https:/deno.land/x/lume@v1.1.0/plugins/postcss.ts';
import slugify_urls from 'https:/deno.land/x/lume@v1.1.0/plugins/slugify_urls.ts';

const site = lume();

site.use(base_path());
site.use(bundler());
site.use(code_highlight());
site.use(date());
site.use(jsx());
site.use(postcss());
site.use(slugify_urls());

export default site;
