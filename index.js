const fs = require('fs')
const inquirer = require('inquirer')
// array of questions for user
const questions = [
  'what is the title?',
  'what is the desciption?',
  'what is the installation?',
  'what is the usage?',
  'who are the contributors?',
  'what is the licence type?'
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
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
      type: 'input',
      name: 'licence',
      message: questions[5]
    }
  ])
  .then(data=>{
    let readme = ''
    readme += `> ${data.description}`
    console.log(readme)
  })
  .catch(err => console.log(err))
}

// function call to initialize program
init()
