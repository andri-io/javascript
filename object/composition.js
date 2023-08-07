//===== object composition =====
// class Developer {
//     constructor(name){
//         this.name = name;
//     }

//     commitChanger(){
//         console.log(`${this.name} Is Commiting Changes ...`);
//     }
// }

// class FrontEndDeveloper extends Developer{
//     buildUi(){
//         console.log(`${this.name} Is Building Ui ...`);
//     }
// }

// class BackendDeveloper extends Developer{
//     buildApi(){
//         console.log(`${this.name} Is Building Api ...`);
//     }
// }

// class DevOpsDeveloper extends Developer {
//     deployApp(){
//         console.log(`${this.name} Is Deploying APP ...`);
//     }
// }

// const dev = new Developer('Andri');
// dev.commitChanger();
// const frontEnd = new FrontEndDeveloper ('Risma Maya Sari');
// frontEnd.buildUi();
// const backend = new BackendDeveloper ('Arif Budiman');
// backend.buildApi();
// const devOps = new DevOpsDeveloper ('Zet Erlangga');
// devOps.deployApp();

// ===== CARA YANG LEBIH EFEKTIF !!! =====

class WebDev {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} Commiting Changes`);
  }
}

function canBuildUi(webDev) {
  return {
    buildUi: () => {
      console.log(`${webDev.name} Is Building Ui`);
    }
  }
}

function canBuildApi(webDev) {
  return {
    buildApi: () => {
      console.log(`${webDev.name} Is Building Api`);
    }
  }
}

function canDeployApp(webDev) {
  return {
    deployApp: () => {
      console.log(`${webDev.name} Is Deploying App`);
    }
  }
}
function createFrontEndDeveloper(name) {
  const developer = new WebDev(name);
  return Object.assign(developer, canBuildUi(developer));
}

function createBackendDeveloper(name) {
  const developer = new WebDev(name);
  return Object.assign(developer, canBuildApi(developer));
}

function createDevOpsDeveloper(name) {
  const developer = new WebDev(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new WebDev(name);
  return Object.assign(
    developer,
    canBuildUi(developer),
    canBuildApi(developer),
    canDeployApp(developer)
  );
}

const frontEndDeveloper = createFrontEndDeveloper("Andri");
frontEndDeveloper.buildUi();
frontEndDeveloper.commitChanges();
console.log(
  `${frontEndDeveloper.name} Is developer ?`,
  frontEndDeveloper instanceof WebDev
);

const backenDeveloper = createBackendDeveloper("Risma");
backenDeveloper.buildApi();
console.log(
  `${backenDeveloper.name} Is developer ?`,
  backenDeveloper instanceof WebDev
);

const devOpsDeveloper = createDevOpsDeveloper("Eos Ageng");
devOpsDeveloper.deployApp();
console.log(
  `${devOpsDeveloper.name} Is developer ?`,
  devOpsDeveloper instanceof WebDev
);

const fullStackDeveloper = createFullStackDeveloper('Zet Erlangga');
fullStackDeveloper.buildApi();
fullStackDeveloper.buildUi();
fullStackDeveloper.deployApp();

console.log(`${fullStackDeveloper.name} developer ? `, fullStackDeveloper instanceof WebDev);