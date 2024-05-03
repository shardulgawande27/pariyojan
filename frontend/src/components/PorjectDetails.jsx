import React from "react";

const PorjectDetails = ({ formData, setFormData }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 mt-2 text-base font-medium leading-6 text-slate-50 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">Project Name</div>
          <input
            className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-white max-md:max-w-full bg-transparent placeholder:text-zinc-500"
            placeholder=" Enter the name of the project"
            type="text"
            value={formData.projectName}
            onChange={(event) =>
              setFormData({ ...formData, projectName: event.target.value })
            }
          />
          {console.log(formData)}
          <div className="mt-10 max-md:max-w-full"> Location</div>
          <input
            className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
            placeholder="Location"
            type="text"
          />
          <div className="mt-10 max-md:mt-10 max-md:max-w-full">CTS</div>
          <input
            className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
            placeholder="Cts no / fP/7/12 no"
            type="text"
          />
          <div className="mt-10 max-md:max-w-full">
            Total Member in the society
          </div>
          <input
            className="justify-center items-start p-5 mt-3 rounded-md border border-solid border-slate-50 text-zinc-500 max-md:max-w-full bg-transparent"
            placeholder="Enter a number"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
          <div className="max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-5 text-lg leading-6 max-md:mt-10">
                  <div className="max-md:max-w-full">Room type and details</div>
                  <div className="flex flex-col justify-center px-6 py-4 mt-3.5 font-medium whitespace-nowrap rounded-lg border border-solid border-slate-50 text-zinc-500 max-md:px-5">
                    <div className="flex gap-3">
                      <div className="flex-1">Type</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb5fcee41871d9c92102989193af0ffccb731b1d116b5f243cc2e13e7d7f3833?"
                        className="shrink-0 self-start aspect-[1.23] w-[31px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-8 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between text-lg font-medium leading-6 text-zinc-500 max-md:flex-wrap">
                    {/* <div className="justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5">
                        Number of rooms
                      </div> */}
                    <input
                      className="bg-transparent justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5"
                      placeholder="Number of rooms"
                      type="text"
                    />
                    <div className="justify-center px-6 py-4 rounded-lg border border-solid border-slate-50 max-md:px-5">
                      Sq. M.
                    </div>
                  </div>
                  <button className="flex gap-1.5 justify-center self-end px-2.5 py-2 mt-7 text-base leading-6 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d819fca85bc19841f47e989cb60e6d7827186651adfb6dbeea8d2bf15a77b5?"
                      className="shrink-0 my-auto w-5 aspect-square"
                    />
                    <div>add section</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 self-start mt-14 max-md:mt-10">
            <div className="flex flex-col flex-1 px-5 text-base leading-7 whitespace-nowrap text-slate-50">
              <div>federation</div>
              <div className="flex flex-col justify-center px-6 py-4 mt-6 font-medium rounded-lg border border-solid border-slate-50 max-md:px-5">
                <div className="flex gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/878bfd2ed8a3e1c84f352a13c86e56e13f0670f833b8b7c9e90e881ca8a8d43b?"
                    className="shrink-0 my-auto aspect-square w-[17px]"
                  />
                  <div>Yes</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center self-end px-6 py-4 mt-9 rounded-lg border border-solid border-slate-50 max-md:px-5">
              <div className="flex gap-3">
                <div className="flex flex-col justify-center my-auto">
                  <div className="shrink-0 rounded-full border-2 border-solid border-slate-50 h-[17px] stroke-[1.5px]" />
                </div>
                <div className="text-base font-medium leading-7 text-slate-50">
                  No
                </div>
              </div>
            </div>
          </div>
          {/* <button className="justify-center self-end px-5 py-3 mt-24 text-md leading-7 bg-white rounded-lg border border-solid border-zinc-800 text-neutral-900 max-md:px-5 max-md:mt-10">
            Save & Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default PorjectDetails;
