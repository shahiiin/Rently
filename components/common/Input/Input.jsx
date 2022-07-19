import React, { forwardRef, useCallback } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

function Input(props, ref) {
  const { control, name, formState, lbl, type, placeholder, ...restProps } =
    props;

  const renderInput = useCallback(
    ({ field }) => {
      switch (type) {
        case "number": {
          return (
            <PhoneInput
              style={{
                //   display: "block",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                borderRadius: "0.375rem",
                borderWidth: "1px",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                height: "53px",
              }}
              placeholder={placeholder}
              name="number"
              id={name}
              {...field}
              {...restProps}
            />
          );
        }
        case "file": {
          return (
            <label htmlFor={name} className="flex items-center cursor-pointer">
              <input
                className="sr-only"
                name="file"
                id={name}
                type={type}
                {...field}
                {...restProps}
              />
              <div
                className="border mr-3 border-purple w-[40px] h-[40px] mt-5 mb-5 rounded-md flex justify-center items-center"
                type="button"
              >
                +
              </div>
              <p>{lbl}</p>
            </label>
          );
        }
        default: {
          return (
            <input
              id={name}
              className="mt-1 px-3 py-2 h-[53px]  border
              shadow-sm  placeholder-slate-400 
              focus:outline-none border-green focus:ring-purple
               block w-small rounded-md sm:text-sm focus:ring rounded-2xl"
              placeholder={placeholder}
              {...field}
              {...restProps}
            />
          );
        }
      }
    },
    [control]
  );

  return (
    <fieldset className="block text-purple ">
      {type !== "file" && (
        <label
          className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3"
          htmlFor={name}
        >
          {lbl}
        </label>
      )}
      <Controller name={name} control={control} render={renderInput} />
      {formState.errors[name]?.message && formState.touchedFields[name] && (
        <span className="ml-2 text-xs text-red-600">
          {formState.errors[name]?.message}
        </span>
      )}
    </fieldset>
  );
}

export default forwardRef(Input);
