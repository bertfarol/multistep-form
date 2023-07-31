import React from 'react'
import FormWrapper from './FormWrapper'
import { Icon } from "@iconify/react";

const ThankYouNote = () => {
  return (
    <FormWrapper>
      <div className='max-w-md mx-auto'>
        <div className="mx-auto w-[56px] h-[56px] rounded-full grid place-items-center bg-[#FB838F]">
          <Icon
            icon={"uil:check"}
            className="w-8 h-8 bg-white rounded-full text-[#FB838F]"
          />
        </div>
        <h2 className="text-[25px] font-bold text-[#08264C] text-center mt-4">
          Thank you!
        </h2>
        <p className="text-[#9699AB] text-center mb-8">
          Thanks for confirming your subscription!
          <br />
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </FormWrapper>
  );
}

export default ThankYouNote