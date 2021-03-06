function repoAndOwner(issue) {
  const {
    repository
  } = issue;

  const {
    owner
  } = repository;

  return {
    repo: repository.name,
    owner: owner.login
  };
}

module.exports.repoAndOwner = repoAndOwner;


function issueIdent(issue) {
  const { owner, repo } = repoAndOwner(issue);

  const { number } = issue;

  return `${owner}/${repo}#${number}`;
}

module.exports.issueIdent = issueIdent;