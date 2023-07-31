import { useState } from "react";

const useMultistepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // use useCallback for functions
  // good naming convention for this since it's generic function being used outside the hook.
  const next = () => {
    setCurrentStepIndex((prevStep) => {
      if (prevStep >= steps.length - 1) return prevStep;
      return prevStep + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((prevStep) => {
      if (prevStep <= 0) return prevStep;
      return prevStep - 1;
    });
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    //good! very specific namin convention
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;
