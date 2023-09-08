import { Bucket, StackContext } from 'sst/constructs';

export function StorageStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, 'Pictures');

  return {
    bucket,
  };
}
