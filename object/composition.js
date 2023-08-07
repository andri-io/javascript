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
 class Developer {
    constructor(name){
        this.name = name;
    }

    commitChanger(){
        console.log(`${this.name} Is Commit Changges ...`)
    }
 }

 function canBuildUi(Developer){
    return {
        buildUi : () => {
            console.log(`${Developer.name} Is Building Ui ...`);
        }
    }
 }

 function canBuildApi(Developer){
    return {
        buildApi : () =>{
            console.log(`${Developer.name} Is Building Api ...`);
        }
    }
 }

 function canDeployApp(Developer){
    return{
        deployApp : () =>{
            console.log(`${Developer.name} Is Deploying App ...`);
        }
    }
 }

function createFrontendDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUi(developer));
}

// function createBackendDeveloper(name){
//     const developer = new 
// }
