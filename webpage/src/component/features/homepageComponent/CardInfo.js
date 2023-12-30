import Modal from "./Modal";
import Card from "../../core/Card";

export default function CardInfo(props) {
  //make this work for multiple sections
  const title = props["card"]["Job Title"];
  const organization = props["card"]["Company"];
  const startDate = props["card"]["Start Date"];
  const endDate = props["card"]["End Date"];

  const experienceOutline = (
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
      <Modal {...props}> </Modal>
    </div>
  );
  return (
    <div>
      <Card CardInfo={experienceOutline} />
    </div>
  );
}
