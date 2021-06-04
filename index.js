const fs = require('fs')
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')
// array of questions for user
const questions = [
  'what is the title?',
  'what is the desciption?',
  'what is the installation?',
  'what is the usage?',
  'who are the contributors?',
  'select your licence type'
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}readme.md`, data, err => {
    if (err) { console.log(err) }
    console.log('readme Created!')
  })
}

// function to initialize program
function init() {
  inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: questions[0]
  },
  {
   type: 'input',
    name: 'description',
   message: questions[1]
  },
  {
    type: 'input',
    name: 'installation',
    message: questions[2]
  },
  {
     type: 'input',
     name: 'usage',
     message: questions[3]
  },
    {
      type: 'input',
      name: 'contributors',
      message: questions[4]
    },
    {
      type: 'list',
      name: 'license',
      message: questions[5],
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
  ])
  .then(data=>{
    let readme = `# ${data.title} \n`
    readme += `
## Description
> ${data.description} \n`
    readme += `
### Installing 
${data.installation} \n`
    readme +=`
## Usage
${data.usage} \n`
    readme += `
## License
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg) \n`
    readme += `
## Contributors
    ${data.contributors} \n`
    //console.log(readme)
    writeToFile(data.title, readme)
  })
  .catch(err => console.log(err))
}

// function call to initialize program
init()
