import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_kinesis as kinesis } from 'aws-cdk-lib';
import { resourcePrefix } from '../config';

export class KinesisDataPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'KinesisDataPipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const dataStream = new kinesis.Stream( this, `${resourcePrefix}--data-stream`, {
    });
  }
}
