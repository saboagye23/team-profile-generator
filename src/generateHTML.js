// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-12 col-md-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4><i class="fas fa-mug-hot"></i> Manager</h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr>
                        <td>ID: ${manager.id}</td>
                    </tr>
                    <tr>
                        <td>Email: <a href="mailto:${manager.email}">${manager.email}</a></td>
                    </tr>
                    <tr>
                        <td>Office Number: ${manager.officeNumber}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-12 col-md-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr>
                        <td>ID: ${engineer.id}</td>
                    </tr>
                    <tr>
                        <td>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></td>
                    </tr>
                    <tr>
                        <td>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-12 col-md-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4><i class="fas fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <tr>
                        <td>ID: ${intern.id}</td>
                    </tr>
                    <tr>
                        <td>Email: <a href="mailto:${intern.email}">${intern.email}</a></td>
                    </tr>
                    <tr>
                        <td>School: ${intern.school}</td>
                    </tr>
                </table>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
            <h1 class="navbar-brand h1 w-100 text-center">My Team</h1>
          </nav>
      </header>
      <main class="mb-20">
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </html>
`;
}


module.exports = generateHTML;
