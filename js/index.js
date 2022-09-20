const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Bita Samiei Moghaddam &#169;${thisYear}</span>`;
footer.appendChild(copyright);
const skills = ['Basic JavaScript','Basic HTML','3Ds MAX', 'AutoCAD','V-Ray'];
const skillSection = document.querySelector('#skills');
const skillsList = skillSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
