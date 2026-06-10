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
let messageForm = document.querySelector('[name="leave_message"]')
messageForm.addEventListener('submit', function(event){
event.preventDefault()
let name = event.target.usersName.value
let email = event.target.usersEmail.value
let message = event.target.usersMessage.value

console.log(name, email, message)

let messageSection = document.querySelector('#messages')
let messageList = messageSection.querySelector('ul')
let newMessage = document.createElement('li')
newMessage.innerHTML = `<a href = "mailto:${email}">${name}</a> <span>${message}</span>`

messageList.appendChild(newMessage)

let removeButton = document.createElement('button')
removeButton.setAttribute('type', 'button')
removeButton.innerHTML = 'Remove'
removeButton.addEventListener('click', function(){
    let entry = this.parentNode
    entry.remove()
})

newMessage.appendChild(removeButton)

messageForm.reset()
})

