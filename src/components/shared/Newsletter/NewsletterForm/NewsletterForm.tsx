import React from "react";
import { Button, ButtonVariant } from "@/components/shared/Button";
import "./NewsletterForm.styled.css";

export const NewsletterForm = () => {
  return (
    <form
      action="https://tedxwarsaw.us2.list-manage.com/subscribe/post?u=db67c5c3bfd4a6e582b34ae78&amp;id=3c92076e33"
      method="post"
      className="bg-white md:flex justify-between items-center xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 row-start-2 flex-col px-4 py-1 xl:flex xl:flex-row shadow-md"
    >
      <div className="newsletter-form-fields xl:flex xl:flex-grow">
        <input
          className="my-3 xl:ml-5 p-4 border border-opacity-50 border-customGrey rounded-md md:row-start-2 md:col-start-2 md:col-end-3 xl:flex-grow"
          name="FNAME"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className="my-3 p-4 border border-opacity-50 border-customGrey rounded-md  md:row-start-2 md:col-start-4 md:col-end-5 xl:flex-grow xl:mx-4"
          name="EMAIL"
          type="email"
          placeholder="Email"
          required
        />
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_db67c5c3bfd4a6e582b34ae78_3c92076e33"
            tabIndex={-1}
            value=""
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full my-3 md:w-80 xl:w-60 py-4 col-start-2 col-end-5 hover:bg-white hover:text-customRed"
        variant={ButtonVariant.filledRedWithBG}
      >
        Subscribe
      </Button>
    </form>
  );
};
