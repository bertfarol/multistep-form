import React, { useState } from "react";
import useMultistepForm from "../hook/useMultistepForm";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";
import ThankYouNote from "./ThankYouNote";

// const stepIndicator = [1, 2, 3, 4];
const stepIndicator = [
  {
    step: 1,
    name: "STEP 1",
    description: "YOUR INFO",
  },
  {
    step: 2,
    name: "STEP 2",
    description: "SELECT PLAN",
  },
  {
    step: 3,
    name: "STEP 3",
    description: "ADD-ONS",
  },
  {
    step: 4,
    name: "STEP 4",
    description: "SUMMARY",
  },
];

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: {
    name: "",
    type: "",
    price: "",
  },
  addons: [],
};

const MultistepForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showThankyouMessage, setShowThankyouMessage] = useState(false);

  const updateFields = (fields) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, ...fields };
    });
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PersonalInfo {...formData} updateFields={updateFields} />,
      <SelectPlan {...formData} updateFields={updateFields} />,
      <Addons {...formData} updateFields={updateFields} />,
      <Summary {...formData} updateFields={updateFields} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) return next();
    setShowThankyouMessage(true);
    console.log(formData);
  };

  return (
    <div className="bg-[#ECF3FD] flex flex-col min-h-full lg:w-full lg:h-full lg:min-h-[600px] lg:shadow-md lg:bg-white lg:flex-row lg:max-w-[940px] mx-auto lg:p-4 lg:rounded-xl">
      {/* step indicator*/}
      <div className="bg-sidebar-mobile bg-cover bg-center lg:bg-sidebar-desktop h-[172px] lg:h-auto lg:w-[274px] lg:rounded-lg px-7 pb-10">
        <div className="flex justify-center gap-4 pt-8 lg:gap-8 lg:flex-col">
          {stepIndicator.map((indicator, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className={`h-[33px] w-[33px] rounded-full  grid place-items-center font-bold text-[#000C30] border  ${
                  currentStepIndex + 1 === indicator.step
                    ? "bg-[#BBE2FF] border-[#BBE2FF]"
                    : "border-white bg-transparent text-white"
                }`}
              >
                {indicator.step}
              </div>
              <div className="hidden text-white lg:inline-block">
                <p className="text-xs">{indicator.name}</p>
                <p className="text-sm font-bold">{indicator.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col lg:pl-12 grow">
        {/* forms */}
        <div className="grow">
          {showThankyouMessage ? <ThankYouNote /> : step}
        </div>

        {!showThankyouMessage ? (
          <div
            className={`lg:mx-4 flex px-4 py-4 bg-white bg-black/10 ${
              !isFirstStep ? "justify-between" : "justify-end"
            }`}
          >
            {!isFirstStep && (
              <button
                onClick={back}
                type="button"
                className="text-[#9699AB] text-sm font-medium hover:text-[#03295A]"
              >
                Go Back
              </button>
            )}
            <button
              type="submit"
              className={`h-[40px] w-[96px] text-white  rounded text-sm font-medium ${
                isLastStep ? "bg-[#483EFF]" : "bg-[#03295A]"
              }`}
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default MultistepForm;
