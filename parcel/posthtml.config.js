module.exports = ctx => {
  return {
    plugins: {
      'posthtml-expressions': { locals: ctx.locals },
    },
  };
};
