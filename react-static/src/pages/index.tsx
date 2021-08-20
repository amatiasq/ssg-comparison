import '../pages-parts/index.scss';

import * as React from 'react';
import { useRouteData } from 'react-static';

import { Experiments, ExperimentsProps } from '../organisms/Experiments';
import { Navigation } from '../organisms/Navigation';
import {
  ProfessionalExperiences,
  ProfessionalExperiencesProps
} from '../organisms/ProfessionalExperience';
import { Projects, ProjectsProps } from '../organisms/Projects';
import { Talks, TalksProps } from '../organisms/Talks';
import { IndexHeader } from '../pages-parts/IndexHeader';

export type IndexProps = ExperimentsProps & ProjectsProps & ProfessionalExperiencesProps & TalksProps;

export default function Index() {
  const props = useRouteData<IndexProps>();

  return (
    <>
      <Navigation />
      <main className="page-content">
        <IndexHeader />
        <div className="container">
          <ProfessionalExperiences jobPositions={props.jobPositions} />
          <Projects projects={props.projects} />
          <Talks talks={props.talks} />
          <Experiments experiments={props.experiments} />
        </div>
      </main>
    </>
  );
}
