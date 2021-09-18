const inquirer = require('inquirer');
const fs = require('fs');
const InputPrompts = require('./src/InputPrompts');
const generateHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamList = [];


const addMannager = () => {
    return inquirer.prompt(
        InputPrompts.managerPrompts
    )
    .then(managerProps => {
        // add manager to team list
        const { name, id, email, officeNumber } = managerProps
        const manager = new Manager(name, id, email, officeNumber);
        teamList.push(manager);

        console.log(`New manager added with name ${manager.getName()}`);
    })
}

const addEngineer = () => {
    return inquirer.prompt(
        InputPrompts.engineerPrompts
    )
    .then(engineerProps => {
        // add manager to team list
        const { name, id, email, github } = engineerProps
        const engineer = new Engineer(name, id, email, github);
        teamList.push(engineer);

        console.log(`New engineer added with name ${engineer.getName()}`);
    })
}

const addIntern = () => {
    return inquirer.prompt(
        InputPrompts.internPrompts
    )
    .then(internProps => {
        // add manager to team list
        const { name, id, email, school } = internProps
        const intern = new Intern(name, id, email, school);
        teamList.push(intern);

        console.log(`New intern added with name ${intern.getName()}`);
    })
}

const addRoleMenu = () => {
    return inquirer.prompt(
        InputPrompts.menuPrompts.chooseRole
    ).then(menuProps => {
        const {role } = menuProps;
        console.log(menuProps);
        if(role === 'Engineer'){
            return addEngineer().then(addMenu);
        } else if(role == 'Intern'){
            return addIntern().then(addMenu);
        }
        return teamList;
    });
}

const addMenu = () => {
    return inquirer.prompt(
        InputPrompts.menuPrompts.addEmployee
    ).then(menuProps => {
        const {isAddEmployee } = menuProps;
        console.log(menuProps);
        if(isAddEmployee){
             return addRoleMenu()
        }
        return teamList;
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => { 
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log("Your team profile has been successfully created! Please check out the dist/index.html")
        }
    })
}; 


addMannager()
    .then(addMenu)
    .then(teamList => {
        return generateHTML(teamList);
    })
    .then(pageHTML =>{
        writeFile(pageHTML);
    })
    .catch(err =>{
        console.error(err);
    });
