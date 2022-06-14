import {getClassName} from '../../utils/partials';
import {h} from 'preact';

enum SpacerOptions {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface SpacerProps {
  options?: SpacerOptions[];
}

function Spacer({partial}: {partial: SpacerProps}) {
  return <div className={getClassName('spacer', partial.options)}></div>;
}

export default Spacer;
