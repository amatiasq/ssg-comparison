// src/components/App.js
const { html } = require('htm/preact');

const LayoutDefault = require('./LayoutDefault');

const sections = {
  // content: require('./SectionContent'),
  // hero: require('./SectionHero'),
  // teaser: require('./SectionTeaser'),
};

module.exports = ({ page }) => html`
  <${LayoutDefault}>
    <div class="App">${page.sections.map(({ data, name }) => html` <${sections[name]} data=${data} /> `)}</div>
  <//>
`;
