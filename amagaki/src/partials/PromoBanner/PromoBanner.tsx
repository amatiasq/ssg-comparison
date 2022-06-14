import Asset, {AssetOptions} from '../../components/Asset/Asset';
import Button, {ButtonProps} from '../../components/Button/Button';

import {getClassName} from '../../utils/partials';
import {h} from 'preact';

export interface PromoBannerProps {
  options?: string[];
  assets?: AssetOptions[];
  title?: string;
  body?: string;
  buttons?: ButtonProps[];
}

function PromoBanner({partial}: {partial: PromoBannerProps}) {
  return (
    <div className={getClassName('promo-banner', partial.options)}>
      <div className="promo-banner__wrap">
        {partial.assets && (
          <div className="promo-banner__wrap__assets">
            {partial.assets?.map(asset => (
              <Asset {...asset} />
            ))}
          </div>
        )}
        <div className="promo-banner__wrap__content">
          {partial.title && (
            <div
              className="promo-banner__wrap__content__title"
              role="heading"
              aria-level={3}
            >
              {partial.title}
            </div>
          )}
          {partial.body && (
            <div className="promo-banner__wrap__content__body">
              {partial.body}
            </div>
          )}
          {partial.buttons?.map(button => (
            <div className="promo-banner__wrap__content__buttons">
              <Button {...button} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
