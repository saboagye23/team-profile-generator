
const employeePrompts = (role) => [
    {
        type: 'input',
        name: 'name',
        message: `What's the name of the ${role}?`,
        validate: employeeName => {
            if (employeeName && employeeName.trim() !==0) {
                return true;
            } else {
                console.log (`Please enter an ${role}'s name!`);
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter the ${role}'s ID.`,
        validate: employeeId => {
            if  (isNaN(employeeId)) {
                console.log (`Please enter the ${role}'s ID!`)
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the ${role}'s email.`,
        validate: employeeEmail => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)
            if (employeeEmail) {
                return true;
            } else {
                console.log ('Please enter a valid email address!')
                return false; 
            }
        }
    },
];

const managerPrompts = [
    ...employeePrompts('manager'),
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: managerOfficeNumber => {
            if  (isNaN(managerOfficeNumber)) {
                console.log ('Please enter an office number!')
                return false; 
            } else {
                return true;
            }
        }
    }
];

const engineerPrompts = [
    ...employeePrompts('enigineer'),
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Please enter the employee's github username!")
            }
        }
    },
];

const internPrompts = [
    ...employeePrompts('intern'),
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's school!")
            }
        }
    },
]; 

const menuPrompts = {
    addEmployee: [
        {
            type: 'confirm',
            name: 'isAddEmployee',
            message: 'Would you like to add an employee? No to exit',
            default: true
        }
    ],
    chooseRole: [
        {
            type: 'list',
            name: 'role',
            message: 'Please select which type of team member to add',
            choices: ['Engineer', 'Intern']
        }
    ]
}
    

module.exports = {
    menuPrompts,
    engineerPrompts,
    internPrompts,
    managerPrompts
}