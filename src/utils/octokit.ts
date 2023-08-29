import { OWNER, REPOSITORY } from 'configs/octokit';
import { Octokit } from 'octokit';

const instance = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export const GithubIssues = (method: 'GET', url: string) => {
  const baseUrl = `/repos/${OWNER}/${REPOSITORY}/issues`;

  return instance.request(`${method} ${baseUrl}${url}`, {
    owner: OWNER,
    repo: REPOSITORY,
    headers: {
      accept: 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
};
