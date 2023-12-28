export default function TextBox(prop) {
    const textBoxTemplate = (
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
                    />
                </div>
                <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                        for="date"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Start Date
                        </label>
                        <input
                        type="date"
                        name="date"
                        id="date"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                        for="date"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        End Date
                        </label>
                        <input
                        type="date"
                        name="time"
                        id="time"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    ></textarea>
                </div>
                </form>
            </div>
        </div>

    )
    return(
        <div>{textBoxTemplate}</div>
    )
}