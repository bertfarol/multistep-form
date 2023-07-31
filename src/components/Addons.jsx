import React, { useEffect, useState } from "react";
import FormWrapper from "./FormWrapper";
import { Icon } from "@iconify/react";

const addonsOptions = [
  {
    name: "Online Services",
    description: "Access to multiplayer games",
    price: 1,
    checked: true,
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: 2,
    checked: true,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
    checked: false,
  },
];

const Addons = ({ plan, updateFields }) => {
  const [addons, setAddons] = useState(addonsOptions);
  const planYearly = plan.type === "yearly";

  const handleAddonClick = (index) => {
    const updatedAddons = [...addonsOptions];
    updatedAddons[index].checked = !updatedAddons[index].checked;
    setAddons(updatedAddons);
  };

  useEffect(() => {
    const checkedAddons = addons.filter((addon) => addon.checked === true);
    const addonsSelected = checkedAddons.map((addon) => ({
      name: addon.name,
      price: planYearly ? addon.price * 10 : addon.price,
      type: plan.type,
    }));
    updateFields({
      addons: addonsSelected,
    });
  }, [addons]);

  return (
    <FormWrapper
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <div>
        {addons.map((addons, index) => (
          <div
            onClick={() => handleAddonClick(index)}
            className={`cursor-pointer mt-[12px] flex gap-4 px-4 items-center border rounded-lg py-4 ${
              addons.checked
                ? "border-[#504C98] bg-[#F8F9FE]"
                : "border-[#D9D8DD]"
            }`}
          >
            <Icon
              icon={"uil:check"}
              className={`w-5 h-5 text-white rounded border ${
                addons.checked
                  ? "border-[#473DFF] bg-[#473DFF]"
                  : "border-[#D9D8DD] bg-white"
              }`}
            />
            <div className="grow">
              <h3 className="text-[#000C30] font-bold">{addons.name}</h3>
              <p className="text-sm text-[#9699AB] ">{addons.description}</p>
            </div>
            <div className="text-sm text-[#473DFF] font-medium">
              +${planYearly ? addons.price * 10 : addons.price}/
              {planYearly ? "yr" : "mo"}
            </div>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default Addons;
