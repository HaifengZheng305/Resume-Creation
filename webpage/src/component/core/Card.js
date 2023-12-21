export default function Card(props) {
  //make this work for multiple sections
  console.log(props);
  const title = props["card"][0]["Job Title"];
  const organization = props["card"][1]["Company"];
  const startDate = props["card"][3]["Start Date"];
  const endDate = props["card"][4]["End Date"];
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md px-8 py-10">
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
      <div className="p-6 pt-0">
        <button
          className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
