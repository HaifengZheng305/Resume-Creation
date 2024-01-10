export default function JobDescription(props) {
  return (
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
        placeholder="PLease provide the Job Desription of the position you are applying to"
        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-6 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        onChange={(e) => {
          props.updateJobDescription(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
