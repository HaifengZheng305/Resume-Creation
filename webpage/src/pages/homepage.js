import React from "react";
import { useState } from "react";
import Section from "../component/features/homepageComponent/Section";
import JobDescription from "../component/features/homepageComponent/JobDescription";

export default function ResumeForm() {
  const [resume, setResume] = useState({
    "General Information": [],
    "Experience Section": [
      {
        Experiences: [
          {
            "Job Title": "Operations Associate",

            Company: "Avin Express",

            "Job Description": [
              "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
              "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
              "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
              "Investigate and resolved all disputes with satisfactory customer feedback",
              "I read emails and answer them on a timely manner",
            ],

            "Start Date": "2021-11-01",

            "End Date": "2021-11-01",
          },
          {
            "Job Title": "Accounting Associate",

            Company: "Avin Express",

            "Job Description": [
              "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
              "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
              "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
              "Investigate and resolved all disputes with satisfactory customer feedback",
              "I read emails and answer them on a timely manner",
            ],
            "Start Date": "2021-11-01",
            "End Date": "2021-11-01",
          },
        ],
      },
      {
        Projects: [
          {
            "Job Title":
              "The correlation of various factors on the Average SAT of each State",

            Company: "Stony Brook University",

            "Job Description": [
              "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
              "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
              "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
              "Investigate and resolved all disputes with satisfactory customer feedback",
              "I read emails and answer them on a timely manner",
            ],

            "Start Date": "2021-11-01",
            "End Date": "2021-11-01",
          },
        ],
      },
    ],
  });

  const [jobDescription, setJobDescription] = useState("");

  const updateSection = (section, newSection) => {
    setResume({ ...resume, [section]: newSection });
  };

  const updateJobDescription = (updatedJobDescription) => {
    setJobDescription(updatedJobDescription);
  };

  const experienceSection = resume["Experience Section"].map(
    (section, index) => (
      <div key={Object.keys(section)}>
        <Section
          sectionType="experience"
          //sectionCategory="Experience Section"
          //index={index}
          updateExperience={(section) => {
            let updatedResume = { ...resume };
            updatedResume["Experience Section"][index] = section;
            setResume(updatedResume);
          }}
          section={section}
        />
      </div>
    )
  );

  console.log(resume);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-2">
          <div>{experienceSection}</div>
        </div>
        <JobDescription
          updateJobDescription={updateJobDescription}
          test="test"
        />
      </div>
    </div>
  );
}
