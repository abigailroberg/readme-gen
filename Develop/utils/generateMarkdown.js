// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if(license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if(license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  }
  if(license === 'GNU GPL v3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
  if(license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }
  if(license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if(license === 'Creative Commons') {
    return 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
  if(license === 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if(license === 'IBM') {
    return 'https://opensource.org/licenses/IPL-1.0'
  }
  if(license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  }
  return `## License
  For more information about the license on this project, please visit ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const license = renderLicenseSection(data.license)
  return `# ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  
  ${license}
  ## Contributing
  ${data.credits}
  ## Tests
  ${data.tests}
  ## Questions
  GitHub: https://github.com/${data.githubUser}</br>
  For additional questions, please email me at ${data.email}
`
}

module.exports = generateMarkdown
