const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const employees = [];

function startManager() {
inquirer.prompt([
    {
    type: "input",
    name: "getName",
    message: "What is your name?",
    },
    {
    type: "input",
    name: "getId",
    message: "What is your Id?",
    },
    {
    type: "input",
    name: "getEmail",
    message: "What is your email?",
    },
    {
    type: "input",
    name: "getOfficeNumber",
    message: "What is your office number?",
    },
])
.then((answers) => {
    console.log(answers)
    const newManager = new Manager(
        answers.getName,
        answers.getId,
        answers.getEmail,
        answers.getOfficeNumber
    )
    employees.push(newManager)
    addTeam();
})
}

startManager()

function addTeam() {
inquirer.prompt([
    {
    type: "list",
    name: "add",
    message:
        "Would you like to add an engineer, intern, or finish building your team?",
    choices: ["Engineer", "Intern", "Finish building my team"],
    },
])
.then((answers) => {
    if (answers.add == "Engineer") {
        return addEngineer();
    } else if (answers.add == "Intern") {
        return addIntern();
    } else if (answers.add == "Finish building my team") {
        return generateHTML();
    }

})

}
function addEngineer() {
inquirer.prompt([
    {
    type: "input",
    name: "getName",
    message: "What is your name?",
    },
    {
    type: "input",
    name: "getId",
    message: "What is your Id?",
    },
    {
    type: "input",
    name: "getEmail",
    message: "What is your email?",
    },
    {
    type: "input",
    name: "getGithub",
    message: "What is yor GitHub username?",
    },
])
.then((answers) => {
    console.log(answers)
    const newEngineer = new Engineer(
        answers.getName,
        answers.getId,
        answers.getEmail,
        answers.getGithub
    )
    employees.push(newEngineer)
addTeam();
}
)}

function addIntern() {
inquirer.prompt([
    {
    type: "input",
    name: "getName",
    message: "What is your name?",
    },
    {
    type: "input",
    name: "getId",
    message: "What is your Id?",
    },
    {
        type: "input",
        name: "getEmail",
        message: "What is your email?",
    },
    {
    type: "input",
    name: "getSchool",
    message: "What is your school name?",
    },
])
.then((answers) => {
    console.log(answers)

    const newIntern = new Intern(
        answers.getName,
        answers.getId,
        answers.getEmail,
        answers.getSchool
    )
    employees.push(newIntern)
addTeam();
}
)}
function generateHTML() {
    console.log(employees)
    writeHtml(employees)
}

const generateTeam = (team) => {
  // create the manager html
const generateManager = (manager) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
};

  // create the html for engineers
const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
};

  // create the html for interns
const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
};

const html = [];

html.push(
    team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager))
);
html.push(
    team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer))
    .join("")
);
html.push(
    team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern))
    .join("")
);

return html.join("");
};

// export function to generate entire page
function writeHtml(team) {
const Html = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
    fs.writeFile("./output/index.html", Html, () => {
        console.log("Hello Team")
    })
};
// })
