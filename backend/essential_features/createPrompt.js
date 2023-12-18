const GIObjectToText = require("./ResumeObjectToText/GIObjectToText");
const educationObjectToText = require("./ResumeObjectToText/educationObjectToText");
const experienceObjectToText = require("./ResumeObjectToText/experienceObjectToText");
const resume_requirement = "";
//make resume_requirment into an object

function createPrompt(resume, resumeRequirement) {
  const GIText = GIObjectToText(resume.GI);
  const educationText = educationObjectToText(resume.education);
  const experienceText = experienceObjectToText(resume.experience);

  const resumeText = `${GIText}\n${educationText}\n${experienceText}`;

  const prompt = `${resumeRequirement}\n${resume}`;

  return prompt;
}

module.exports = { createPrompt };
