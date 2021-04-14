import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/shared/Button";

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
      className="bg-white md:flex justify-between items-center py-3 px-8 rounded-md font-light"
    >
      <p>Keep me updated about</p>
      <select
        className="p-4 border border-customGrey rounded-md"
        name="topic"
        id="topic"
        {...register("topic")}
      >
        <option value={FormTopic.newEvents}>New events</option>
      </select>
      <input
        className="p-4 border border-customGrey rounded-md"
        name="name"
        placeholder="Name"
        {...register("name")}
      />
      <input
        className="p-4 border border-customGrey rounded-md"
        name="email"
        placeholder="Email"
        {...register("email")}
      />
      <Button type="submit" className="">
        Subscribe
      </Button>
    </form>
  );
};
