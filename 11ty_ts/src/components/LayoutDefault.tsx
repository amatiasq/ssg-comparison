import React from 'react';

function BaseWrapper({ children }: any) {
  return children;
}

export default ({ children }: any) => (
  <div className="LayoutDefault">
    <main>{children}</main>
    <footer className="LayoutDefault__footer">
      <BaseWrapper> © Markus Oberlehner </BaseWrapper>
    </footer>
  </div>
);
