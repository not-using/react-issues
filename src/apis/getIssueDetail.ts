import { GithubIssues } from 'utils/octokit';

export const getIssueDetailApi = async (issueNumber: string) => {
  return await GithubIssues('GET', `/${issueNumber}`, {
    issue_number: +issueNumber,
  });
};
