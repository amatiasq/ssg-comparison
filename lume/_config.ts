import lume from 'lume/mod.ts';
import attributes from 'lume/plugins/attributes.ts';
import base_path from 'lume/plugins/base_path.ts';
import code_highlight from 'lume/plugins/code_highlight.ts';
import date from 'lume/plugins/date.ts';
import inline from 'lume/plugins/inline.ts';
import jsx from 'lume/plugins/jsx.ts';
import modify_urls from 'lume/plugins/modify_urls.ts';
import postcss from 'lume/plugins/postcss.ts';
import relative_urls from 'lume/plugins/relative_urls.ts';
import resolve_urls from 'lume/plugins/resolve_urls.ts';
import slugify_urls from 'lume/plugins/slugify_urls.ts';
import svgo from 'lume/plugins/svgo.ts';

const site = lume({
  src: 'src/public',
  dest: 'dist',
  // location: new URL('https://amatiasq.com'),
  components: {
    directory: 'src/components',
  },
  server: {
    port: 8888,
  },
});

site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(date());
site.use(inline());
site.use(jsx());
site.use(modify_urls());
site.use(postcss());
site.use(relative_urls());
site.use(resolve_urls());
site.use(slugify_urls());
site.use(svgo());

export default site;
