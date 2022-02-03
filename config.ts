const account = process.env.AWS_ACCOUNT_ID;
const region = process.env.AWS_REGION;
const deployEnv = process.env.ENV;
const resourcePrefix = `${process.env.ENV?.toUpperCase}`;

export { account, region, deployEnv, resourcePrefix }