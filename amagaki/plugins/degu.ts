/**
 * Plugins for using Degu elements.
 */

import {
  DataType,
  Document,
  NunjucksTemplateEngine,
  Pod,
  StaticFile,
  Url,
} from '@amagaki/amagaki';

import {html} from '@amagaki/amagaki-plugin-page-builder';

interface NunjucksEnvironmentContext {
  ctx: {
    doc: Document;
  };
}

export class DeguPlugin {
  static register(pod: Pod) {
    const engine = pod.engines.getEngineByExtension(
      '.njk'
    ) as NunjucksTemplateEngine;
    engine.env.addGlobal('asset', DeguPlugin.asset);
  }

  /**
   * Returns a `<degu-image>` or `<degu-video>` depending on the requested file.
   *
   * Usage:
   * ```
   * {{asset(options)}}
   * ```
   */
  static asset(
    this: NunjucksEnvironmentContext,
    options: {
      url: string | StaticFile;
      altText: string;
      width?: number;
      height?: number;
      class?: string;
    }
  ) {
    let url = options.url;
    if (DataType.isStaticFile(options.url)) {
      const staticFile = options.url as StaticFile;
      url = `${staticFile.url.path}?fingerprint=${staticFile.fingerprint}`;
    }
    url = Url.relative(url as string, this.ctx.doc);
    return url.endsWith('.mp4') || url.endsWith('.webm')
      ? html`
          <degu-video
            src="${url}"
            alt="${options.altText}"
            ${options.width ? html`width="${options.width}"` : ''}
            ${options.height ? html`height="${options.height}"` : ''}
            ${options.width && options.height
              ? html`style="aspect-ratio: ${options.width}/${options.height}"`
              : ''}
            aria-label="${options.altText}"
            autoplayinview
          >
          </degu-video>
        `
      : html`
          <degu-image
            src="${url}"
            alt="${options.altText ?? ''}"
            ${options.class ? html`class="${options.class}"` : ''}
            ${options.width ? html`width="${options.width}"` : ''}
            ${options.height ? html`height="${options.height}"` : ''}
            ${options.width && options.height
              ? html`style="aspect-ratio: ${options.width}/${options.height}"`
              : ''}
          ></degu-image>
        `;
  }
}
