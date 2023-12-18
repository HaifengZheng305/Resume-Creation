function ExperienceObjectToText(ExperienceObject) {
  let resume_text = ` `;

  function addSectionTitle(section_title) {
    resume_text += `# ${section_title}\n`;
  }

  function addList(title, list) {
    formattedResume += `## ${title}\n`;
    list.forEach((item) => {
      Object.keys(item).forEach((key) => {
        const value = item[key];
        if (Array.isArray(value)) {
          formattedResume += `- **${key}:**\n${value
            .map((line) => `  - ${line}`)
            .join("\n")}\n`;
        } else {
          formattedResume += `- **${key}:** ${value}\n`;
        }
      });
      formattedResume += "\n";
    });
  }

  return resume_text;
}

module.export = { ExperienceObjectToText };
