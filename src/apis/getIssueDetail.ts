import { GithubIssues } from 'utils/octokit';
import { remark } from 'remark';
import html from 'remark-html';
import type { IssueDetail } from 'types/issue';

export const getIssueDetailApi = async (issueNumber: string) => {
  return await GithubIssues('GET', `/${issueNumber}`, {
    issue_number: +issueNumber,
  }).then(async (response: IssueDetail) => {
    const parsedBody = await remark().use(html).process(response.body);
    return {
      ...response,
      body: parsedBody.toString(),
    };
  });
};
