import { StackContext, Api } from 'sst/constructs';

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    defaults: {},
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // TODO: Not really sure what to return here
  return {
    api,
  };
}
