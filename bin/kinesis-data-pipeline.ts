#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { KinesisDataPipelineStack } from '../lib/kinesis-data-pipeline-stack';
import { account, region, resourcePrefix } from '../config';

const app = new cdk.App();
new KinesisDataPipelineStack(app, `${resourcePrefix}-kinesis-data-pipeline-stack`, {
  env: { account, region }
});