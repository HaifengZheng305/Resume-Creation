import Card from "../../core/Card";

export default function Section(prop) {
  const sectionName = Object.keys(prop.section)[0];

  const displayCard = prop.section[sectionName].map((card) => (
    <div key={card["card"][0]["Job Title"]}>
      <Card card={card["card"]} type={prop.sectionType} />
    </div>
  ));
  return (
    <div className="flex justify-items-start py-5 pl-5">
      <div className="w-max sm:w-max md:w-max lg:w-max bg-white p-6 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">{sectionName}</h2>
          <button
            id="openModalBtn"
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <p className="text-white">Add Card</p>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"></div>
        <div className="flex item-center space-x-8 lg:space-x-6">
          {displayCard}
        </div>
      </div>
    </div>
  );
}
