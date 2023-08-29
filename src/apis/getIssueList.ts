import { GithubIssues } from 'utils/octokit';

export const getIssueListApi = async () => {
  return await GithubIssues('GET', '', {
    sort: 'comments',
    state: 'open',
    direction: 'desc',
  });
};
