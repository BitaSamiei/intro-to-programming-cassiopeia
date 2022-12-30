const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span>Bita Samiei Moghaddam &#169;${thisYear}</span>`;
footer.appendChild(copyright);
const skills = ['Basic JavaScript','Basic HTML','CSS','3Ds MAX', 'AutoCAD','V-Ray','Adobe Photoshop','Revit'];
const skillSection = document.querySelector('#skills');
const skillsList = skillSection.querySelector('ul');
const projectSection = document.querySelector('#projects');
const projectList = projectSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('tag');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

messageForm = document.querySelector('[name = leave_message]');
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    const messageSection = document.querySelector('#messages');

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message} </span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('type', 'button'); 

    removeButton.addEventListener('click', function() {
        newMessage.remove();

        if (messageList.childElementCount === 0){
            messageSection.setAttribute('style', 'display: none');
        }
        
        });

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit'
    editButton.setAttribute('type', 'button');
    editButton.addEventListener('click', function(event){
        newMessage.remove();
        const nameElement = document.querySelector('[name = name]');
        const emailElement = document.querySelector('[name = email]');
        const messageElement =document.querySelector('[name = message]');
        nameElement.value = name;
        emailElement.value = email;
        messageElement.value = message;
    } )
        
    newMessage.appendChild(editButton);    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    messageForm.reset();
});

fetch('https://api.github.com/users/BitaSamiei/repos')
  .then((response) => response.json())
  .then(afterRespose);

function afterRespose(response) {
    for(let i=0; i < response.length; i++) {
        const project = document.createElement('li');
         project.innerHTML = `<a href="${response[i].html_url}">${response[i].name}</a>`;
        const details = document.createElement('ul');
        const description = document.createElement('li');
        description.innerHTML = response[i].description;
        details.appendChild(description);

         project.classList.add('projects');
        projectList.appendChild(project);
    }
}





