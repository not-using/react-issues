import { OWNER, REPOSITORY } from 'configs/octokit';
import { Octokit } from 'octokit';

const instance = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const GithubIssues = (
  method: 'GET',
  url: string,
  options?: {
    sort?: 'created' | 'updated' | 'comments';
    state?: 'open' | 'closed' | 'all';
    direction?: 'asc' | 'desc';
    issue_number?: number;
    per_page?: number;
    page?: number;
  },
) => {
  const baseUrl = `/repos/${OWNER}/${REPOSITORY}/issues`;

  return instance
    .request(`${method} ${baseUrl}${url}`, {
      owner: OWNER,
      repo: REPOSITORY,
      ...options,
      headers: {
        accept: 'application/vnd.github.v3+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    .then((reponse) => reponse.data);
};
