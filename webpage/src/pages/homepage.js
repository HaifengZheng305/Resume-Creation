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
            card: [
              {
                "Job Title": "Operations Associate",
                type: "text",
              },
              { Company: "Avin Express", type: "text" },
              {
                "Job Description": [
                  "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
                  "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
                  "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
                  "Investigate and resolved all disputes with satisfactory customer feedback",
                  "I read emails and answer them on a timely manner",
                ],
                type: "text",
              },
              {
                "Start Date": "November 2021",
                type: "date",
              },
              { "End Date": "Current", type: "date" },
            ],
          },
          {
            card: [
              {
                "Job Title": "Accounting Associate",
                type: "text",
              },
              { Company: "Avin Express", type: "text" },
              {
                "Job Description": [
                  "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
                  "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
                  "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
                  "Investigate and resolved all disputes with satisfactory customer feedback",
                  "I read emails and answer them on a timely manner",
                ],
                type: "text",
              },
              {
                "Start Date": "November 2021",
                type: "date",
              },
              { "End Date": "Current", type: "date" },
            ],
          },
        ],
      },
      {
        Projects: [
          {
            card: [
              {
                "Job Title":
                  "The correlation of various factors on the Average SAT of each State",
                type: "text",
              },
              { Company: "Stony Brook University", type: "text" },
              {
                "Job Description": [
                  "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
                  "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
                  "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
                  "Investigate and resolved all disputes with satisfactory customer feedback",
                  "I read emails and answer them on a timely manner",
                ],
                type: "text",
              },
              {
                "Start Date": "November 2021",
                type: "date",
              },
              { "End Date": "Current", type: "date" },
            ],
          },
        ],
      },
    ],
  });

  let experience = resume["Experience Section"];

  const experienceSection = experience.map((section) => (
    <div key={Object.keys(section)}>
      <Section section={section} sectionType="experience" />
    </div>
  ));

  return <div className="bg-gray-100 lg:h-screen">{experienceSection}</div>;
}
