Electron Project Template
=================
This is an Electron project template. You can clone and use under the MIT license. There is a tiny bit of code just to show some simple working concepts you need in Electron applications. The template helps with:
* electron project structure
* using npm to run commands
* unit testing
* code coverage
* lint checks
* building deployment artifacts
* publishing your app

You will have to ensure you install the Node JS Modules needed to run this. Also, the package.json file "publishers" under forge config is set to publish to MY repo. That will not work for you, so change it and set up your access token to allow publishing the project releases to YOUR repo. There are several other changes to make to package.json to make things point to your repo, your project name, links to your project, new keywords, etc. Other commands you need to get going are below.


Install commands needed
=================
* npm install - save-dev @electron-forge/cli
* npx electron-forge import
* npm i -g @electron-forge/maker-zip
* npm i -g @electron-forge/publisher-github
* npm i -g eslint


Note the '-g' flag means install globally, so that all future projects can use these modules and associated commands without needed to re-install the modules.

Life-cycle commands
=================
* npm run make
* npm run start
* npm test
* npm run lint
* npm run publish


Thanks!
