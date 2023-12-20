import React from "react";
import { useState } from "react";

export default function ResumeForm() {
  const [resume, setResume] = useState({
    "Relevant Experience": {
      Experience: [
        {
          sectionElement: [
            {
              category: "Job Title",
              type: "text",
              input: "Operations Associate",
            },
            { category: "Company", type: "text", input: "Avin Express" },
            {
              category: "Job Description",
              type: "text",
              input: [
                "Utilized Pivot tables to visualize 250+ container that are ready for pickup and delivery weekly",
                "Monitored and addressed all incoming emails and phone calls resulting in no miscommunication with clients since January of 2022",
                "Analyzed delivery address travel distance to optimize delivery routes for 9 drivers daily",
                "Investigate and resolved all disputes with satisfactory customer feedback",
                "I read emails and answer them on a timely manner",
              ],
            },
            {
              category: "Start Date",
              type: "date",
              input: "November 2021",
            },
            { category: "End Date", type: "date", input: "Current" },
          ],
        },
        {
          sectionElement: [
            {
              category: "Job Title",
              type: "text",
              input: "Accounting Associate",
            },
            { category: "Company", type: "text", input: "Avin Express" },
            {
              category: "Job Description",
              type: "text",
              input: [
                "Audited all current open statements and discovered $200,000 of uncollected invoices",
                "Implement an internal sorting system to compile more effectively supporting document saving 5+ hour weekly",
                "Utilized QuickBooks to produce and bill 250+ invoices weekly with a 95% accuracy",
                "Updates customers monthly statements and maintained constant communication too make sure the customer paid up",
                "I make sure that the customers pays money on a timely manner",
              ],
            },
            {
              category: "Start Date",
              type: "date",
              input: "February 2021",
            },
            { category: "End Date", type: "date", input: "November 2021" },
          ],
        },
        {
          sectionElement: [
            {
              category: "Job Title",
              type: "text",
              input: "Accounting Intern",
            },
            { category: "Company", type: "text", input: "Avin Express" },
            {
              category: "Job Description",
              type: "text",
              input: [
                "Utilized QuickBooks to create 250+ sales order weekly while ensuring pricing of items are accurate",
                "Sorted and scanned 700+ physical documents manually including proof of deliveries, receipts, tickets, and interchange receipts weekly",
                "Maintained the company pricing dashboard keeping all pricings for 900 delivery locations up to date",
                "I just create invoices whenever I get them",
              ],
            },
            {
              category: "Start Date",
              type: "date",
              input: "February 2021",
            },
            { category: "End Date", type: "date", input: "November 2021" },
          ],
        },
      ],
      Projects: [
        {
          sectionElement: [
            {
              category: "Job Title",
              type: "text",
              input:
                "The correlation of various factors on the Average SAT of each State",
            },
            { category: "Company", type: "text", input: "Stony Brook" },
            {
              category: "Job Description",
              type: "text",
              input: [
                "Utilized R to perform regressions models and hypothesis tests and concluded that there is no significant correlation between the median household income and the number of public-school days of each state on the average SAT score of each state",
                "Motivated a team of 3 by dividing tasks and setting timelines for the projects by arranging weekly team meetings",
              ],
            },
            {
              category: "Start Date",
              type: "date",
              input: "November 2021",
            },
            { category: "End Date", type: "date", input: "Current" },
          ],
        },
      ],
      "Extracurricular Activites": [
        {
          sectionElement: [
            {
              category: "Job Title",
              type: "text",
              input: "General Member",
            },
            { category: "Company", type: "text", input: "Delta Sigma Pi" },
            {
              category: "Job Description",
              type: "text",
              input: [
                "Participated in all Delta Sigma Pi Events while maintaining a 3.5 GPA as a full-time student and maintaining 2 internships",
                " Committed 80 hour+ of community service",
              ],
            },
            {
              category: "Start Date",
              type: "date",
              input: "November 2021",
            },
            { category: "End Date", type: "date", input: "Current" },
          ],
        },
      ],
    },
  });
}
