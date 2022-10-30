import { Octokit } from '@octokit/rest';
const { REACT_APP_GITHUB_TOKEN } = process.env;

const octokit = new Octokit({
  auth: REACT_APP_GITHUB_TOKEN,
});

// async function getPaginateList() {
//   for await (const response of octokit.paginate.iterator(
//     octokit.rest.issues.listForRepo,
//     {
//       owner: 'angular',
//       repo: 'angular-cli',
//       state: 'open',
//       sort: 'comments',
//     }
//   )) {
//     console.log(response.data);
//   }
// }

export const getIssueList = async () => {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'angular',
    repo: 'angular-cli',
    state: 'open',
    sort: 'comments',
    page: 1,
    per_page: 10,
  });
  return data;
};

export const getIssue = async (issueNumber) => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      owner: 'angular',
      repo: 'angular-cli',
      issue_number: issueNumber,
    }
  );
  return data;
};
