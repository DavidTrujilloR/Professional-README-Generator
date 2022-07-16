function fileGenerator(response){
    var content = `# ${response.title}
    ## App Installation

    ${response.installation}
    
    ## Instructions

    ${response.instructions}
    
    ## How to use the app

    ${response.usage}
    
    ## Screenshot 
    [example Readme](${response.screenshot})
    
    ## Author

    #### GitHub:${response.username}

    #### GitHub link:${response.GitHub}
    
    ## License
    
    ${response.license}`
    return content;
};

module.exports = fileGenerator;