// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  
  if (license != "None") {
    licenseSection += "## License\n";
    licenseSection += `See ${renderLicenseLink(license)} to get more information about this license\n`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const sections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];

  let template = `# ${data.title}\n`;
  
  template += renderLicenseBadge(data.license) + "\n";

  template += `## Table of Contents\n`;
    for (let i = 0; i < sections.length; i++) {
      if (! (sections[i] === "License" && data.license === "None")) {
        template += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
      }
    }
  template += "\n";

  // add description 
  template += `## ${sections[0]}\n`;
  template += data.description + '\n';
  // add installation
  template += `## ${sections[1]}\n`;
  template += data.installation + '\n';
  // add usage
  template += `## ${sections[2]}\n`; 
  template += data.usage + '\n';
  // add license
  template += renderLicenseSection(data.license) + '\n';
  // add contributing
  template += `## ${sections[4]}\n`;
  template += data.contributing + '\n';
  // add tests
  template += `## ${sections[5]}\n`;
  template += data.tests + '\n';
  // add questions
  template += `## ${sections[6]}\n`;
  template += "You can find me at (https://github.com/" + data.username + ") on Github\n";
  template += `Email me at ${data.email} for additional questions.\n`
  
  return template;
}

module.exports = generateMarkdown;
