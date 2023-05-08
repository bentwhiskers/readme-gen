function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

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

function renderLicenseSection(license) {
  let licenseSection = "";
  
  if (license != "None") {
    licenseSection += "## License\n";
    licenseSection += `See ${renderLicenseLink(license)} to get more information about this license\n`;
  }
  return licenseSection;
}

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


  template += `## ${sections[0]}\n`;
  template += data.description + '\n';

  template += `## ${sections[1]}\n`;
  template += data.installation + '\n';

  template += `## ${sections[2]}\n`; 
  template += data.usage + '\n';

  template += renderLicenseSection(data.license) + '\n';
  
  template += `## ${sections[4]}\n`;
  template += data.contributing + '\n';
 
  template += `## ${sections[5]}\n`;
  template += data.tests + '\n';
  
  template += `## ${sections[6]}\n`;
  template += "You can find me at (https://github.com/" + data.username + ") on Github\n";
  template += `Email me at ${data.email} for additional questions.\n`
  
  return template;
}

module.exports = generateMarkdown;
