//async await approach
//for step by step calls we are using async and await

function getUser(id) {
    return new Promise((resolve, reject) => {
      console.log("Reading from a database....");

      setTimeout(() => {
        resolve({ id: id, githubUsername: "jerrycode06" });
      }, 2000);
    });
  }

  function getRepositories(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Extracting Repositories for ${username}....`);
        resolve(["repo1", "repo2", "repo3"]);
        // reject(new Error("Error occurred in repositories"));
      }, 2000);
    });
  }

  function getCommits(repo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Extracting Commits for " + repo + "....");
        resolve(["commits"]);
      }, 2000);
    });
  }

  // getUser(1)
  //   .then((user) => getRepositories(user.githubUsername))
  //   .then((repos) => getCommits(repos[0]))
  //   .then((commits) => console.log("Commits", commits))
  //   .catch((err) => console.log("Error: ", err.message));

  // Async- await approach
  async function displayCommits() {
    try {
      console.log("hellobefore");

      const user =  getUser(1);
      console.log("hello");
      console.log(user);

      // for getting repos, i need to know the username
      const repos = await getRepositories(user.githubUsername);

      // for getting repos, i need to know the username
      const commits = await getCommits(repos[0]);
      console.log(commits);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  displayCommits();