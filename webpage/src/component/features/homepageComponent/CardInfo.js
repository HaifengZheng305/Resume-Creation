import Modal from "./Modal";
import Card from "../../core/Card";
import { useState } from "react";

export default function CardInfo(props) {
  //make this work for multiple sections
  let cardOutline = null;

  const [card, setCard] = useState(props.card);

  const updateResume = () => {};

  if (props.type === "experience") {
    cardOutline = experienceTemplate(card, setCard, props.type);
  }

  return (
    <div>
      <Card CardInfo={cardOutline} />
    </div>
  );
}

const experienceTemplate = (card, setCard, type) => {
  const title = card["Job Title"];
  const organization = card["Company"];
  const startDate = card["Start Date"];
  const endDate = card["End Date"];

  console.log(card);

  return (
    <div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {organization}
        </h5>
        <p className="text-justify block font-sans text-base font-light leading-relaxed text-inherit antialiased py-10 h-[150px]">
          {title}
        </p>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-gray-950">
          {startDate} - {endDate}
        </p>
      </div>
      <Modal card={card} setCard={setCard} type={type}></Modal>
    </div>
  );
};
