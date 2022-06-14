/** @jsx h */

import Asset, {AssetOptions} from '../../components/Asset/Asset';
import Button, {ButtonProps} from '../../components/Button/Button';

import {Document} from '@amagaki/amagaki';
import {getClassName} from '../../utils/partials';
import {h} from 'preact';

// TODO: Improve declaration of custom elements.

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'details-dialog': any;
    }
  }
}

interface HeaderProps {
  options?: string[];
  logo: {
    doc: Document;
    image: AssetOptions;
  };
  nav: Document[];
  buttons: ButtonProps[];
}

function Header({partial, doc}: {partial: HeaderProps; doc: Document}) {
  return (
    <div className={getClassName('header', partial.options)}>
      <div className="header__grid">
        <div className="header__grid__logo">
          <a href={partial.logo?.doc?.url?.path}>
            <Asset {...partial.logo?.image} />
          </a>
        </div>
        <div className="header__grid__links">
          {partial.nav.map(item => (
            <a
              href={item.url?.path}
              className={`header__grid__links__link ${
                item.url?.path === doc.url?.path &&
                'header__grid__links__link--active'
              }`}
            >
              {item.fields.navTitle}
            </a>
          ))}
        </div>
        <div className="header__grid__buttons">
          <div className="header__grid__buttons__desktop-buttons">
            {partial.buttons?.map(button => (
              <Button {...button} />
            ))}
          </div>
          <details className="header__mobile-nav">
            <summary className="header__mobile-nav__summary">
              <Button label="Menu" ariaLabel="Toggle menu" />
            </summary>
            <details-dialog className="header__mobile-nav__dialog">
              <div className="header__mobile-nav__dialog__links">
                {partial.nav?.map(item => (
                  <a
                    href={item.url?.path}
                    className="header__mobile-nav__dialog__links__link"
                  >
                    {/*  {{'header__mobile-nav__dialog__links__link--active' if item.url.path == doc.url.path}} */}
                    {item.fields.navTitle}
                  </a>
                ))}
              </div>
              <div className="header__mobile-nav__buttons">
                {partial.buttons?.map(button => (
                  <Button {...button} />
                ))}
              </div>
            </details-dialog>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Header;
