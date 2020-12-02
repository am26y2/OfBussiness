import axios from "axios";

const url = "https://api.github.com";

const githubToken = "ec506640935ddc60796e8a96603c1729da265491";

export const fetchIssues = async () => {
  return await axios.get(
    `${url}/search/issues?q={facebook}&per_page=100&page_number=1`,
    {
      headers: {
        Authorization: `token ${githubToken}`
      }
    }
  );
};

export const getIssues = async () => {
  const issues = await fetchIssues();

  return await issues.data.items;
};

export const fetchIssueReadme = async (urlIssue: any) => {
  return await axios.get(`${urlIssue}/readme`);
};

export const renderIssueReadme = async (urlReadme: any) => {
  return await axios.get(urlReadme);
};

export const getComments = async (urlComments: any) => {
  return await axios.get(urlComments);
};
