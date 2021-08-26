module.exports = eleventyConfig => {
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
