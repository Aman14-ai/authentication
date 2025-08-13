import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";
type Props = {
  message?: string;
};

const FormError = (props: Props) => {
    if (!props.message) return null;
  return (
    <div className="bg-destructive/15 p-2 px-3 flex rounded-md gap-2 items-center">
      <BsExclamationTriangle className="text-destructive" />{" "}
      <p className="text-destructive">{props.message}</p>
    </div>
  );
};

export default FormError;
