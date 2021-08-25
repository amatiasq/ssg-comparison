// src/components/LayoutDefault.js
const { html } = require('htm/preact');

// const BaseWrapper = require('./BaseWrapper');

function BaseWrapper({ children }) {
  return children;
}

module.exports = ({ children }) => html`
  <div class="LayoutDefault">
    <main>${children}</main>
    <footer class="LayoutDefault__footer">
      <${BaseWrapper}> © Markus Oberlehner <//>
    </footer>
  </div>
`;
