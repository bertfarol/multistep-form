import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import FormWrapper from "./FormWrapper";

const planOptions = [
  {
    name: "Arcade",
    price: 9,
    icon: "simple-icons:applearcade",
    iconBgColor: "#FFAB73",
  },
  {
    name: "Advanced",
    price: 12,
    icon: "bxs:joystick-alt",
    iconBgColor: "#F5828D",
  },
  {
    name: "Pro",
    price: 15,
    icon: "bxs:joystick",
    iconBgColor: "#4B3EFB",
  },
];

const SelectPlan = ({ plan, updateFields }) => {
  const [planToggle, setPlanToggle] = useState(plan.type === "yearly");
  // This should be a controlled component now. state is being managed in the parent component
  const [selectedPlan, setSelectedPlan] = useState(
    plan.name || planOptions[0].name
  );
  //good naming convention
  const togglePlanType = planToggle ? "yearly" : "monthly";

  // can do this without useEffect, useMemo instead to do the parsing
  useEffect(() => {
    const chosenPlan = planOptions.find((plan) => plan.name === selectedPlan);
    const planPrice = planToggle ? chosenPlan.price * 10 : chosenPlan.price;
    updateFields({
      plan: { name: selectedPlan, type: togglePlanType, price: planPrice },
    });
    // missing dependencies
  }, [planToggle, selectedPlan]);

  return (
    <FormWrapper
      title="Select your plan"
      subtitle="You have the option of monthly or yearly billing."
    >
      <div className="lg:flex lg:flex-row lg:gap-4">
        {planOptions.map((plan) => (
          // create component for cards
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`cursor-pointer lg:basis-2/6 mt-[12px] flex gap-3 px-4 lg:flex-col lg:gap-12 border rounded-lg py-4 ${
              selectedPlan === plan.name
                ? "border-[#504C98] bg-[#F8F9FE]"
                : "border-[#D9D8DD]"
            }`}
          >
            <div
              className="h-[42px] w-[42px] grid place-items-center rounded-full"
              style={{ backgroundColor: plan.iconBgColor }}
            >
              <Icon icon={plan.icon} className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-[#000C30] font-bold">{plan.name}</h3>
              <p className="text-sm text-[#9699AB] mt-0.5">
                {/* move to a variable */}
                ${planToggle ? plan.price * 10 : plan.price}/
                {planToggle ? "yr" : "mo"}
              </p>
              <p className="text-sm text-[#000C30] mt-0.5">
                {planToggle ? "2 months free" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Create a new component for this */}
      <div className="bg-[#F8F9FE] rounded-lg py-[14px] mt-6">
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#000C30]">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              {/* create a checkbox component */}
              <input
                type="checkbox"
                className="sr-only peer"
                checked={planToggle}
                readOnly
              />
              {/* Create a toggle component */}
              <div
                onClick={() => {
                  setPlanToggle(!planToggle);
                }}
                className="w-11 h-6 bg-[#04285A] rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "
              ></div>
            </label>
            <span className="text-sm font-bold text-[#9699AB]">Yearly</span>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
