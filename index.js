// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Creating an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose of this project?",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "What license do you want to choose for this project?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "require",
        message: "What dependencies did you use for this project?",

    },
    {
        type: "input",
        name: "usage",
        message: "What languages/technologies are associated with this project?",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "name",
        message: "State your full name.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide valid email address",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors.",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required test if applicable.",
    },
];

//Writing README.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
// 
function init() {
    inquirer.prompt(questions).then((responces) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({...responces}));
    });
}
init();