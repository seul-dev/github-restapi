import { Octokit } from '@octokit/rest';
const { REACT_APP_GITHUB_TOKEN } = process.env;

const octokit = new Octokit({
  auth: REACT_APP_GITHUB_TOKEN,
});

export const getIssueList = async (pageNumber) => {
  const { data } = await octokit.rest.issues.listForRepo({
    owner: 'angular',
    repo: 'angular-cli',
    state: 'open',
    sort: 'comments',
    page: pageNumber,
    per_page: 10,
  });
  return data;
};

export const getIssue = async (issueNumber) => {
  const { data } = await octokit.rest.issues.get({
    owner: 'angular',
    repo: 'angular-cli',
    issue_number: issueNumber,
  });
  return data;
};
