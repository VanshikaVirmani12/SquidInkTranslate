#!/usr/bin/env node
import { App } from 'aws-cdk-lib/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-demo-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: '250748858298', region: 'us-east-2' },
});

app.synth();