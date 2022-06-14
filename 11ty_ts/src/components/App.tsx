import React from 'react';
import LayoutDefault from './LayoutDefault';

const sections: any = {
  // content: require('./SectionContent'),
  // hero: require('./SectionHero'),
  // teaser: require('./SectionTeaser'),
};

export default ({ page }: { page: any }) => (
  <LayoutDefault>
    <div className="App">
      {page.sections.map(({ data, name }: any) => {
        const Component = sections[name];
        return <Component data={data} />;
      })}
    </div>
  </LayoutDefault>
);
