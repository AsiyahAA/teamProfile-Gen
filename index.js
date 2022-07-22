const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager name?',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager employee Id?',
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the manager office number?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager email?',
    },
    {
        type: 'list',
        name: 'addTeam',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ["Engineer", "Intern", "Finish building my team"]
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer name?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer Id?',
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'What is the engineer GitHub username?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer email?',
    },
    {
        type: 'list',
        name: 'anotherTeam',
        message: 'Would you like to add another engineer, an intern, or finish building your team?',
        choices: ["Engineer", "Intern", "Finish building my team"]
    },
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern name?',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern Id?',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the intern school name?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern email?',
    },

    ])

    .then(ans=>{
    console.log(ans)

    // if(addTeam == choices.length[0]){
    //     return engineerName
    // }else if(addTeam == choices.length[1]){
    //     return internName
    // }else if(addTeam == choices.length[2]){
    //     return ans
    // }
    // if(anotherTeam == choices.length[0]){
    //     return engineerName
    // }else if(anotherTeam == choices.length[1]){
    //     return internName
    // }else if(anotherTeam == choices.length[2]){
    //     return ans
    // }
    const htmlString = `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>

<h5>Team Manager</h5>
<p>${ans.managerName}</p>

<h6>Employee Id</h6>
<p>${ans.managerId}</p>

<h6>Office Number</h6>
<p>${ans.managerOffice}</p>

<h6>Email</h6>
<p>${ans.managerEmail}</p>

<h6>Team Engineer</h6>
<p>${ans.engineerName}</p>

<h6>Engineer Id</h6>
<p>${ans.engineerId}</p>

<h6>Engineer Github</h6>
<p>${ans.engineerGitHub}</p>

<h6>Engineer Email</h6>
<p>${ans.engineerEmail}</p>

<h6>Team Intern</h6>
<p>${ans.internName}</p>

<h6>Intern Id</h6>
<p>${ans.internId}</p>

<h6>Intern School</h6>
<p>${ans.internSchool}</p>

<h6>Intern Email</h6>
<p>${ans.internEmail}</p>`

    const lower = ans.managerName
    const lowerCase = lower.toLowerCase()
    fs.writeFile(`./output/${lowerCase}.html`,
    htmlString, (err,data) => {if(err){throw err}
})

    })