import { useState } from "react";

export default function TextBox(props) {
  let textBoxTemplate = null;

  if (props.type === "experience") {
    textBoxTemplate = experienceTemplate(props);
  }

  return <div>{textBoxTemplate}</div>;
}

const experienceTemplate = (prop) => {
  const [organization, setOrganization] = useState(prop.card["Company"]);
  const [position, setPosition] = useState(prop.card["Job Title"]);
  const [startDate, setStartDate] = useState(prop.card["Start Date"]);
  const [endDate, setEndDate] = useState(prop.card["End Date"]);

  const [jobDescriptionList, setJobDescriptionList] = useState(
    prop.card["Job Description"]
  );
  const [jobDescriptionString, setJobDescriptionString] = useState(
    jobDescriptionList.join("\n")
  );

  const handleInputChange = (e) => {
    setJobDescriptionString(e.target.value);

    const update = jobDescriptionString.split("\n");

    setJobDescriptionList(update);
  };

  console.log(jobDescriptionList);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form action="https://htmlFormbold.com/s/htmlForM_ID" method="POST">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Organization
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="abc.Inc"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="text"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="sales associate"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Job Description
            </label>
            <textarea
              rows="4"
              name="job description"
              id="job description"
              placeholder="List as many job duty as possible"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-6 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={jobDescriptionString}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};
