const account = process.env.AWS_ACCOUNT_ID;
const region = process.env.AWS_REGION;
const deployEnv = process.env.ENV;
const projectName = process.env.PROJECT_NAME;
const teamName = process.env.TEAM_NAME;
const resourcePrefix = `${teamName?.toLowerCase()}-${deployEnv?.toLowerCase()}`;

export { account, region, deployEnv, resourcePrefix, projectName, teamName }