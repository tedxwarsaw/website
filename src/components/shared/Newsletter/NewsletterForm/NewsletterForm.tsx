import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/shared/Button";
import { SelectInput } from "./SelectInput";
import "./NewsletterForm.styled.css";

enum FormTopic {
  newEvents = "New events",
}

interface FormData {
  topic: FormTopic;
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white md:flex justify-between items-center py-3 xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 row-start-2 flex-col p-4 xl:flex xl:flex-row"
    >
      <p className="mt-3 md:w-full xl:w-auto xl:mt-0">Keep me updated about</p>
      <div className="newsletter-form-fields xl:flex xl:flex-grow">
        <SelectInput />
        {/* <select
          className="my-3 p-4 border border-customGrey rounded-md md:col-start-2 md:col-end-3 xl:mx-4"
          name="topic"
          id="topic"
          {...register("topic")}
        >
          <option value={FormTopic.newEvents}>New events</option>
        </select> */}
        <input
          className="my-3 p-4 border border-customGrey rounded-md md:row-start-2 md:col-start-2 md:col-end-3 xl:flex-grow "
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="my-3 p-4 border border-customGrey rounded-md  md:row-start-2 md:col-start-4 md:col-end-5 xl:flex-grow xl:mx-4 "
          name="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <Button
        type="submit"
        className="w-full my-3 md:w-80 xl:w-60 py-4 col-start-2 col-end-5"
      >
        Subscribe
      </Button>
    </form>
  );
};
