import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'al-components',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ajmchambers/al-components',
      proxiesFile: '../al-components-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
