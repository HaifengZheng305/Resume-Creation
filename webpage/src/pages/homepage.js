import React from "react";
import { useState } from "react";
import Section from "../component/features/homepageComponent/Section";

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

  let experience = resume["Experience Section"];

  const experienceSection = experience.map((section, index) => (
    <div key={Object.keys(section)}>
      <Section
        sectionType="experience"
        sectionCategory="Experience Section"
        index={index}
        setResume={setResume}
        resume={resume}
      />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div>{experienceSection}</div>
    </div>
  );
}
