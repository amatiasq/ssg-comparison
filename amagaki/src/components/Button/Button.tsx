import {getClassName} from '../../utils/partials';
import {h} from 'preact';

export enum ButtonOptions {
  HighEmphasis = 'high-emphasis',
  MediumEmphasis = 'medium-emphasis',
  LowEmphasis = 'low-emphasis',
}

export interface ButtonProps {
  label: string;
  url?: string;
  ariaLabel?: string;
  onClick?: any;
  options?: ButtonOptions[];
}

function Button({label, url, ariaLabel, options, onClick}: ButtonProps) {
  return (
    <a
      className={getClassName('button', options)}
      href={url}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className="button__label">{label}</span>
    </a>
  );
}

export default Button;
