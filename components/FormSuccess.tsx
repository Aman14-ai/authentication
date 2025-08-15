import React from "react";
import { CheckCircle } from "lucide-react";

type Props = {
  message?: string;
};

const FormSuccess = (props: Props) => {
  if (!props.message) return null;
  return (
    <div
      className="
  bg-green-500/90 backdrop-blur-sm
  p-2.5 px-3.5 
  flex items-center 
  rounded-lg 
  gap-3
  shadow-md shadow-green-500/20
  border border-green-400/30
  transition-all duration-300 ease-out
  hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/30
  active:scale-[98%]
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70
  group
"
    >
      <CheckCircle
        className="
    text-white 
    h-5 w-5 flex-shrink-0
    group-hover:scale-110 transition-transform
  "
      />
      <p
        className="
    text-white 
    text-sm font-medium leading-tight
    tracking-wide
  "
      >
        {props.message}
      </p>
    </div>
  );
};

export default FormSuccess;
