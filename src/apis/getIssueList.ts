import { GithubIssues } from 'utils/octokit';

export const getIssueListApi = async (page: number) => {
  return await GithubIssues('GET', '', {
    sort: 'comments',
    state: 'open',
    direction: 'desc',
    per_page: 10,
    page,
  });
};
