import React, { useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { formatPlanPrice } from "../utils/formatPlanPrice";

const Summary = ({ plan, addons }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const yearlyPlan = plan.type === "yearly";

  // this calculation can be handled in useMemo
  useEffect(() => {
    const planPrice = plan.price;
    const addonsPrice = addons.map((addon) => addon.price);
    const addonsPriceSum = addonsPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setTotalPrice(addonsPriceSum + planPrice);
  }, [addons, plan.price]);


  return (
    <FormWrapper
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming"
    >
      {/* Create a component for this naming it like, Breakdown table. or any */}
      <div className="bg-[#F8F9FE] p-4 rounded-md">
        <div className="flex items-center justify-between border-b border-[#D9D8DD] pb-4">
          <div>
            <p className="text-[#000C30] font-bold text-sm">
              {plan.name} ({plan.type})
            </p>
            <p className="text-sm text-[#9699AB]">
              Change
            </p>
          </div>
          <div className="text-[#000C30] font-bold text-sm">
            ${formatPlanPrice(plan)}
          </div>
        </div>
        {addons.map((addon) => (
          <div
            key={addon.name}
            className="flex items-center justify-between mt-2.5"
          >
            <div className="text-sm text-[#9699AB]">{addon.name}</div>
            <div className="text-[#000C30] text-sm">
              +${formatPlanPrice(addon)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 mt-6">
        <div className="text-sm text-[#9699AB]">
          Total (per {plan.type === "yearly" ? "year" : "month"})
        </div>
        <div className="text-[#473DFF] font-bold">
          {!yearlyPlan && "+"}$
          {formatPlanPrice({ price: totalPrice, type: plan.type })}
        </div>
      </div>
    </FormWrapper>
  );
};

export default Summary;
