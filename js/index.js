//Copyright footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.createElement('footer');
document.body.appendChild(footer);

let copyright = document.createElement("p")
copyright.innerHTML = `&copy; ${thisYear} Karen Losoya`;

footer.appendChild(copyright);

//Skills as list items
let skills = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Git', 'MySQL', 'Tableau']
let skillsList = document.querySelector('#skills ul')

for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}

//Projects: fetch GitHub repository in list form
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");

fetch("https://api.github.com/users/Edith56533/repos")
  .then(response => response.json())
  .then(data => {
    const repositories = data;
    console.log(repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const link = document.createElement("a")
      link.href = repositories[i].html_url;
      link.target = "_blank";
      link.innerText = repositories[i].name;
      project.appendChild(link);
      projectList.appendChild(project);
    }
  })
  .catch(error => console.error(error));

//Leave a Message: how the form is submitted and the message list is built
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

