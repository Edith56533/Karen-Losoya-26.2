const { createElement } = require("react");

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.createElement('footer');
document.body.appendChild(footer);

let copyright = document.createElement("p")
copyright.innerHTML = `&copy; ${thisYear} Karen Losoya`;

footer.appendChild(copyright);

let skills = ['JavaScript', 'HTML', 'CSS', 'GitHub']
let skillsList = document.querySelector('#skills ul')

for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
    
}
fetch("https://api.github.com/users/Edith56533/repos")
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => console.log(repo.name));
    })
    .catch(error => console.error(error));

const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/Edith56533/repos")
  .then(response => response.json())
  .then(data => {
    const repositories = data;
    console.log(repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(error => console.error(error));