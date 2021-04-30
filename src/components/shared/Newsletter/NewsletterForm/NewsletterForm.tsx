import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, ButtonVariant } from "@/components/shared/Button";
import { SelectInput } from "@/components/shared/SelectInput";
import "./NewsletterForm.styled.css";

export interface FormData {
  topic: string;
  name: string;
  email: string;
}

const schema = yup.object().shape({
  topic: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
});

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formTopics = [
    {
      name: "newEvents",
      value: "New events",
    },
    {
      name: "inspirationsStaf",
      value: "Inspirations staf",
    },
    {
      name: "all",
      value: "All",
    },
  ];

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white md:flex justify-between items-center xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 row-start-2 flex-col px-4 py-1 xl:flex xl:flex-row shadow-md"
    >
      <p className="mt-3 md:w-full xl:w-auto xl:mt-0 font-medium">
        Keep me updated about
      </p>
      <div className="newsletter-form-fields xl:flex xl:flex-grow">
        <SelectInput
          name="topic"
          placeholder="Topic"
          options={formTopics}
          register={register}
          handleOnChange={(value) => setValue("topic", value)}
          className={`md:col-start-2 md:col-end-3 ${errors.topic ? 'border border-opacity-100 border-customRed' : ''}`}
        />
        <input
          className="my-3 p-4 border border-opacity-50 border-customGrey rounded-md md:row-start-2 md:col-start-2 md:col-end-3 xl:flex-grow "
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className={`my-3 p-4 border rounded-md  md:row-start-2 md:col-start-4 md:col-end-5 xl:flex-grow xl:mx-4 ${errors.email ? 'border-customRed' : 'border-opacity-50 border-customGrey'}`}
          name="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <Button
        type="submit"
        className="w-full my-3 md:w-80 xl:w-60 py-4 col-start-2 col-end-5"
        variant={ButtonVariant.filledRedWithBG}
      >
        Subscribe
      </Button>
    </form>
  );
};
