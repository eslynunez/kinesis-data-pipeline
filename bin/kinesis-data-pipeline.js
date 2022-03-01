#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const kinesis_data_pipeline_stack_1 = require("../lib/kinesis-data-pipeline-stack");
const config_1 = require("../config");
const app = new cdk.App();
new kinesis_data_pipeline_stack_1.KinesisDataPipelineStack(app, `${config_1.resourcePrefix}-kinesis-data-pipeline-stack`, {
    env: { account: config_1.account, region: config_1.region }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1kYXRhLXBpcGVsaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2luZXNpcy1kYXRhLXBpcGVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMsb0ZBQThFO0FBQzlFLHNDQUE0RDtBQUU1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLHNEQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLHVCQUFjLDhCQUE4QixFQUFFO0lBQ2pGLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBUCxnQkFBTyxFQUFFLE1BQU0sRUFBTixlQUFNLEVBQUU7Q0FDekIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IEtpbmVzaXNEYXRhUGlwZWxpbmVTdGFjayB9IGZyb20gJy4uL2xpYi9raW5lc2lzLWRhdGEtcGlwZWxpbmUtc3RhY2snO1xuaW1wb3J0IHsgYWNjb3VudCwgcmVnaW9uLCByZXNvdXJjZVByZWZpeCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgS2luZXNpc0RhdGFQaXBlbGluZVN0YWNrKGFwcCwgYCR7cmVzb3VyY2VQcmVmaXh9LWtpbmVzaXMtZGF0YS1waXBlbGluZS1zdGFja2AsIHtcbiAgZW52OiB7IGFjY291bnQsIHJlZ2lvbiB9XG59KTsiXX0=