# White Belt Template

This repository explains how to set up template repository for the white belt

## Setting up a new template repository

1. Create the directory `mkdir <your name>-nodejs-template`  
1. Open the directory in VS Code `code <your name>-nodejs-template`  
1. Setup Git `git init`  
1. Setup the Node package `npm init`  
    1. When prompted for the test command enter `jest --coverage --verbose`
1. Install Jest as a dev package `npm install jest --save-dev`
1. Setup your test watcher in your package.json `"test:watch": "npm run test -- --watchAll",`
1. Create a test file with a description and test
1. Start your test watcher `npm run test:watch"
1. Verify that the test fails as expected
1. Create a dummy source file
1. Verify that your test passes
1. Create a README.md file  
1. Create a NOTES.md file  
    1. Put in basic details of what is needed  
1. Create a .gitignore, which ignores your node_modules and coverage directory at the very least
1. Commit your code
1. Create your repository on <https://github.ibm.com/cio-london-xp-farm> making sure that it is public
1. Add the remote git configuration by running the add origin commend `e.g. git remote add origin git@github.ibm.com:xpfarm/<your name>-<nodejs>-template.git`
1. Make sure that you have the branch set to main `git branch -M main`
1. Push your code to origin `git push -u origin main`
1. Verify that you can see all of the code on github.ibm.com
1. Open the settings tab for the repository and check the checkbox for `Template repository`
1. Verify in the code tab you now have a `Use this template` button which is usually green
