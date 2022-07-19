import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@components/common/Input/Input";

const options = [
  { value: "chocolate", label: "Chocolate", id: "1" },
  { value: "strawberry", label: "Strawberry", id: "2" },
  { value: "vanilla", label: "Vanilla", id: "3" },
];

const URL =
  "https://publicapi.dev.rently.sg/singpasstoken/a_FgbP52KimMeDntMy_bLXwY6AVUiDXHWwRPk9aOhe0";

const defaultValues = {
  email: "",
  name: "",
  number: "",
  country: "",
  file: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("email format is invalid")
    .required("email is required"),
  name: Yup.string().required("name is required"),
  number: Yup.string().required("number is required"),
  country: Yup.string().required("country is required"),
  file: Yup.string().notRequired(),
});

function SignupForm() {
  const { control, formState, handleSubmit } = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data, "data is here");
    axios
      .post(URL, data, {
        headers: {
          accept: "text/plain",
        },
      })
      .then((response) => {
        console.log(response, "response is here");
      })
      .catch((error) => {
        console.log(error, "error is here");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-purple text-4xl font-bold">Sign up to Rently</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          lbl="Full legal name"
          type="text"
          name="name"
          control={control}
          formState={formState}
          placeholder="Tarik Jereme Sybe"
        />
        <Input
          lbl="Phone number"
          type="number"
          name="number"
          control={control}
          formState={formState}
          placeholder="Enter phone number"
        />
        <Input
          lbl="Email address"
          type="email"
          name="email"
          control={control}
          formState={formState}
          placeholder="Enter email address"
        />
        <Input
          lbl="Country"
          type="text"
          name="country"
          control={control}
          formState={formState}
          placeholder="country is here"
        />
        <label className="block text-purple ">
          <span
            className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3"
          >
            Type of property
          </span>
          <button
            type="button"
            className="bg-dark-gray text-purple w-[65px] h-[40px] rounded-md"
          >
            HDB
          </button>
          <button
            type="button"
            className="bg-dark-gray text-purple w-[146px] h-[40px] ml-5 rounded-md"
          >
            Private residential
          </button>
        </label>
        <label className="block text-purple ">
          <span
            className="after:ml-0.5
           after:text-red-500 
           block text-sm font-medium text-slate-700 px-1 py-3"
          >
            Proof of ownership
          </span>
          <span>
            You can login here at INLIS portal, take a photo that clearly
            <br></br>
            shows your address and upload it here.
          </span>
        </label>
        <Input
          lbl="Add a file"
          type="file"
          name="file"
          control={control}
          formState={formState}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;
