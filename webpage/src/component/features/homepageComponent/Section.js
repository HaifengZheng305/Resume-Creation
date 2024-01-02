import CardInfo from "./CardInfo";
import Button from "../../core/Button";
import React, { useState } from "react";

export default function Section(props) {
  let section = props.section;
  const sectionName = Object.keys(section)[0];

  let renderCard = null;

  const renderExperience = () => {
    return section[sectionName].map((card, index) => (
      <div key={index}>
        <CardInfo
          card={card}
          type={props.sectionType}
          updateSection={(updatedCard) => {
            const updatedSection = { ...section }; // Create a shallow copy
            updatedSection[sectionName][index] = updatedCard;
            props.updateExperience(updatedSection);
          }}
        />
      </div>
    ));
  };

  if (props.sectionType === "experience") {
    renderCard = renderExperience();
  }

  return (
    <div className="flex justify-items-start py-2 pl-5">
      <div className=" w-max sm:w-max md:w-max lg:w-max bg-white p-6 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">{sectionName}</h2>
          <Button
            text={"Add Card"}
            onClick={() =>
              newCard(
                props.sectionType,
                props.setResume,
                props.resume,
                props.sectionCategory,
                props.index,
                sectionName
              )
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 item-center">
          {renderCard}
        </div>
      </div>
    </div>
  );
}

/*function newCard(type, setResume, resume, sectionCategory, index, sectionName) {
  //need to make this work for experience, GI and education//
  const newCard = {
    card: [
      {
        "Job Title": "New Job",
        type: "text",
      },
      { Company: "New Company", type: "text" },
      {
        "Job Description": [],
        type: "text",
      },
      {
        "Start Date": "N/A",
        type: "date",
      },
      { "End Date": "N/A", type: "date" },
    ],
  };

  const updatedResume = { ...resume };
  updatedResume[sectionCategory][index][sectionName].push(newCard);
  setResume(updatedResume);
}*/
