import React from 'react'

const FormWrapper = ({title, subtitle, children}) => {
  return (
    <div
      className={`bg-white mx-4 rounded-lg px-6 py-8 shadow-md lg:shadow-none relative mt-[-74px] lg:mt-0 ${title && subtitle ? "" : "flex h-full items-center justify-center"}`}
    >
      {title ? (
        <h2 className="text-[25px] lg:text-[32px] font-bold text-[#08264C]">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="text-[#9699AB] max-w-[234px] lg:max-w-full">{subtitle}</p>
      ) : null}
      <div className="mt-[22px]">{children}</div>
    </div>
  );
}

export default FormWrapper