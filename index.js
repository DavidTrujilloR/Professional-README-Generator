const fileGenerator = require('./fileGenerator');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Repository title',
        name: 'title'
    },

    {
        type: 'input',
        message: 'App installation',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Intructions',
        name: 'instructions'
    },

    {
        type: 'input',
        message: 'Provide a screenshot',
        name: 'screenshot'
    },

    {
        type: 'input',
        message: 'GitHub user name',
        name: 'username'
    },

    {
        type: 'input',
        message: 'GitHub link profile',
        name: 'GitHub'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you want to use',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'GNU',
            'N/L'

        ],
    },

];

inquirer.prompt(questions).then(function(response) {
    console.log(response);

    var content = fileGenerator(response);
    console.log(content);
    fs.writeFile('./ReadMe.md', content, function(err){
        if(err) throw err
        console.log('success');
    });

});

