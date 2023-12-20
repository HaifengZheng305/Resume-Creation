import React from "react";
import { useState } from "react";
import Section from "../component/features/homepageComponent/ResumeSection";

export default function ResumeForm() {
  const [resume, setResume] = useState({
    "General Information": [],
    "Experience Section": [
      {
        Experience: [
          {
            id: 1,
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
            id: 2,
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
        ],
      },
      {
        Test: [
          {
            id: 1,
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
        ],
      },
    ],
  });

  let experience = resume["Experience Section"];

  const experienceSection = experience.map((section) => (
    <div key={Object.keys(section)}>
      <Section prop={section} />
    </div>
  ));

  return <div>{experienceSection}</div>;
}
