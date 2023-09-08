import { SSTConfig } from 'sst';
import { ApiStack } from './stacks/ApiStack';
import { PhotoAdminFrontendStack } from './stacks/PhotoAdminFrontendStack';
import { StorageStack } from './stacks/StorageStack';

export default {
  config(_input) {
    return {
      name: 'portrayal',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(PhotoAdminFrontendStack);
  },
} satisfies SSTConfig;
