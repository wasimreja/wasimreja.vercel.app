const COMMANDS = [
  {
    command: "about",
    description: "About me",
  },
  {
    command: "education",
    description: "My education",
  },
  {
    command: "skills",
    description: "My tech stack",
  },
  {
    command: "projects",
    description: "My projects",
  },
  {
    command: "contact",
    description: "Contact me",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => 
    `My name is Wasim. I am a frontend developer from India. I love to build cool projects and solve coding problems in my free time.`,
  education: () => 
    `I am currently pursuing B.Tech in Information Technology from <a href="https://jgec.ac.in" target="_blank">Jalpaiguri Government Engineering College</a>, 9.32 SGPA till now.`,
  skills: () => 
    `<div class="skill"><b>Languages</b>: C++, HTML, CSS, JavaScript, TypeScript and Python<br /></div>
    <div class="skill"><b>Frameworks</b>: ReactJS, NextJS, Tailwind CSS, Material UI and Bootstrap<br /></div>
    <div class="skill"><b>Tools</b>: VS Code, Git, Firebase, Google Cloud Platform, Postman and Figma</div>`,
  projects: getProjects,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};
