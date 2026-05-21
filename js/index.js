let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p")
copyright.innerHTML = `&copy; ${thisYear} Karen Losoya`;

footer.appendChild(copyright);

let skills = ['Java Script', 'HTML', 'CSS', 'GitHub']
let skillsList = document.querySelector('#Skills ul')

for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
    
}

