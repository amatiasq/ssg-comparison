const eleventyVue = require('@11ty/eleventy-plugin-vue');

module.exports = config => {
  config.addPlugin(eleventyVue);

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
