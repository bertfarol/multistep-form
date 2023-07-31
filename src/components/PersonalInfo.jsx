import React from "react";
import FormWrapper from "./FormWrapper";

const PersonalInfo = ({ name, email, phoneNumber, updateFields }) => {
  // add validation if you're planning to put it in portfolio. use react-hook-form now if you want
  return (
    <FormWrapper
      title="Personal Info"
      subtitle="Please provide your name, email address, and phone number."
    >
      <div>
        {/* repetetive inputs. create a reusable component for inputs */}
        <label
          htmlFor="name"
          className="text-[#08264C] text-[13px] font-medium"
        >
          Name
        </label>
        <input
          required
          value={name}
          type="text"
          onChange={(e) => updateFields({ name: e.target.value })}
          placeholder="e.g. Stephen King"
          className="mt-0.5 file:block px-4 h-[40px] rounded border border-[#D9D8DD] w-full"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor="name"
          className="text-[#08264C] text-[13px] font-medium"
        >
          Email
        </label>
        <input
          required
          value={email}
          type="text"
          onChange={(e) => updateFields({ email: e.target.value })}
          placeholder="e.g. stephenking@gmail.com"
          className="mt-0.5 file:block px-4 h-[40px] rounded border border-[#D9D8DD] w-full"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor="name"
          className="text-[#08264C] text-[13px] font-medium"
        >
          Phone number
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
          placeholder="e.g. +63 995 2465 898"
          className="mt-0.5 file:block px-4 h-[40px] rounded border border-[#D9D8DD] w-full"
        />
      </div>
    </FormWrapper>
  );
};

export default PersonalInfo;
