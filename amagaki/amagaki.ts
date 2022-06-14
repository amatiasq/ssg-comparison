import {DeguPlugin} from './plugins/degu';
import {PageBuilder} from '@amagaki/amagaki-plugin-page-builder';
import {Pod} from '@amagaki/amagaki';
import {PlaceholderPlugin} from './plugins/placeholder';
import {PreactEnginePlugin} from '@amagaki/amagaki-engine-preact';

export default (pod: Pod) => {
  PreactEnginePlugin.register(pod);
  DeguPlugin.register(pod);
  PageBuilder.register(pod, {
    inspector: {
      enabled: pod.env.name !== 'prod',
    },
    head: {
      siteName: 'Starter',
      scripts: [
        {
          href: pod.staticFile('/dist/chunks/main.js'),
          module: true,
        },
      ],
      icon: pod.staticFile('/src/static/images/amagaki.png'),
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Manrope:400,500,600,700|Material+Icons&amp;display=swap',
        pod.staticFile('/dist/css/main.css'),
      ],
    },
    beautifyContainer: false,
    partialPaths: {
      module: true,
      css: ['/dist/css/${partial.partial}/${partial.partial}.css'],
      js: ['/dist/chunks/partials/${partial.partial}/${partial.partial}.js'],
      view: ['/src/partials/${partial.partial}/${partial.partial}.tsx'],
    },
    header: {
      content: '/content/partials/header.yaml',
      view: '/src/partials/Header/Header.tsx',
    },
    footer: {
      content: '/content/partials/footer.yaml',
      view: '/src/partials/Footer/Footer.tsx',
    },
  });

  pod.configure({
    localization: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    staticRoutes: [
      {
        path: '/static/images/',
        staticDir: '/src/static/images/',
      },
      {
        path: '/static/css/',
        staticDir: '/dist/css/',
      },
      {
        path: '/static/chunks/',
        staticDir: '/dist/chunks/',
      },
    ],
    environments: {
      prod: {},
    },
  });

  if (pod.env.name !== 'prod') {
    PlaceholderPlugin.register(pod, {
      sizes: ['16x9', '1x1', '4x3', '9x16', '7x3', '8x4'],
    });
  }
};
