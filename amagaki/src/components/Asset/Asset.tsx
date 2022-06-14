import {Document} from '@amagaki/amagaki';
import {h} from 'preact';

interface StaticFile {
  url: {path: string};
  fingerprint: string;
}

export interface AssetOptions {
  url: string | StaticFile;
  altText: string;
  width?: number;
  height?: number;
  className?: string;
  context?: Document;
}

// TODO: Improve declaration of custom elements.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      'degu-image': {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
      };
    }
  }
}

function getUrl(item: any, context?: Document) {
  // TODO: Support relative URLs.
  if (item?.url?.path) {
    return item.url.path as string;
  }
  return item as string;
}

function Asset({
  url,
  altText,
  width,
  height,
  className,
  context,
}: AssetOptions) {
  return (
    <degu-image
      src={getUrl(url, context)}
      alt={altText}
      width={width}
      height={height}
      className={className}
    ></degu-image>
  );
}

export default Asset;
