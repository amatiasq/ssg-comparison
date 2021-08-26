const eleventyVue = require('@11ty/eleventy-plugin-vue');

module.exports = eleventyConfig => {
  // OR, Use your own options
  eleventyConfig.addPlugin(eleventyVue, {
    // // Directory to store compiled Vue single file components
    // cacheDirectory: '.cache/vue/',
    // // Pass in a file or multiple .vue files to limit compilation
    // // If this is empty, the plugin will search for all *.vue files
    // input: [],
    // // Use postcss in the single file components
    // rollupPluginVueOptions: {
    //   style: {
    //     postcssPlugins: [require('autoprefixer'), require('postcss-nested')],
    //   },
    // },
  });

  eleventyConfig.addTransform('add-html-doctype', (content, outputPath) => {
    const doctype = '<!doctype html>';
    const isHtml = outputPath.endsWith('.html');
    const startsWithDoctype = content
      .trim()
      .toLowerCase()
      .startsWith(doctype);

    return isHtml && !startsWithDoctype ? `${doctype}${content}` : content;
  });

  return {
    // dataTemplateEngine: 'njk',
    // htmlTemplateEngine: 'njk',
    // markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
