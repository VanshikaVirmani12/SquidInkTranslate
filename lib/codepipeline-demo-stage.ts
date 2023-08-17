import { CfnOutput, Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodepipelineBuildDeployStack } from './codepipeline-build-deploy-stack';

export class CdkpipelinesDemoStage extends Stage {
    public readonly urlOutput: CfnOutput;
    
    constructor(scope: Construct, id: string, props?: StageProps) {
      super(scope, id, props);
  
      const service = new CodepipelineBuildDeployStack(this, 'WebService');
      
      // Expose CodepipelineBuildDeployStack's output one level higher
      const urlOutput = service;
    }
  }
