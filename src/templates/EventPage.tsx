import React from "react";
import { graphql } from "gatsby";
import Img, { FluidObject, FixedObject } from "gatsby-image";
import { BackgroundImage } from "../components/BackgroundImage/BackgroundImage";
import { Button, ButtonVariant } from "../components/Button/Button";
import { Page } from "../components/Page/Page";
import { splitTextInTwo } from "../utils";

export interface Props {
  eventSplash: FluidObject;
  locationImage: FluidObject;
  partnerLogos: FixedObject[];
  partnershipTeam: PartnershipTeamMember[];
}

export interface PartnershipTeamMember {
  areaOfResponsibility: string;
  email: string;
  name: string;
  phoneNumber: string;
  photo: FixedObject;
}

export const EventPageTemplate = (props: Props) => {
  const text = `In today's World challenges are now coming at us constantly, and from
  every direction. To deal with them in the time-honoured way of "wait and
  see" is no longer a viable option. Solutions to housing problems, social
  inequality, cultural tensions and environmental pollution are only going
  to be found if we dare to face the problems, instead of waiting for
  someone to figure out the way forward. To lead is to dare, to hope is to
  dare. To solve problems is to dare.`;
  const parts = splitTextInTwo(text);
  console.log(props);

  return (
    <Page>
      <div className="main-grid-full-span">
        <BackgroundImage
          style={{ height: "40rem" }}
          image={props.eventSplash}
          alt="Cover photo"
        >
          <div className="h-full overflow-hidden">
            <div className="h-full flex flex-row items-center">
              <div className="flex flex-col w-full items-center h-full justify-end p-20">
                <div className="text-center my-8 text-white text-medium text-3xl text-shadow">
                  13 June 2019, Warsaw
                </div>
                <Button className="px-20 shadow-2xl">Attend</Button>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className="inner-grid py-20 space-y-10 xl:space-y-0">
        <div className="font-bold text-3xl md:col-span-2 xl:col-span-1">
          We passionately believe in the power of ideas to change the attitudes,
          lives, and, ultimately, the world.
        </div>
        <div className="text-lg hidden md:block">{parts[0]}</div>
        <div className="text-lg hidden md:block">{parts[1]}</div>
        <div className="text-lg block md:hidden">{text}</div>
      </div>
      <div className="main-grid-full-span seamless-grid">
        <div className="col-span-3">
          <BackgroundImage
            image={props.locationImage}
            alt="Cover photo"
            style={{ height: "30rem" }}
          >
            <div className="absolute w-screen main-grid h-60 overflow-hidden text-white space-y-0 py-10">
              <div className="font-medium text-4xl text-shadow">
                Billenium,
                <br />
                <span className="font-light">Warsaw</span>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4892.379921455228!2d21.048522457084005!3d52.18541970970105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9b773b2197%3A0x6338f59562daf786!2sBillennium%20-%20IT%20solutions%20for%20business!5e0!3m2!1sen!2spl!4v1613682341312!5m2!1sen!2spl"
          height="100%"
          width="100%"
          className="col-span-3 md:col-span-2 xl:col-span-4"
          style={{ height: "30rem" }}
        ></iframe>
      </div>
      <div className="inner-grid py-20 space-y-8 md:space-y-0">
        <div className="space-y-2">
          <div className="font-bold text-4xl">Schedule</div>
          <div className="text-4xl">June 13th</div>
        </div>
        <div
          className="xl:col-span-2 grid grid-cols-2 gap-x-4 gap-y-8 text-lg"
          style={{ gridTemplateColumns: "4rem 1fr" }}
        >
          <div className="w-16">11:00</div>
          <div>
            <div className="font-bold">Session 1</div>
          </div>
          <div className="w-16">12:00</div>
          <div>
            <div className="font-bold">Conversations with speakers</div>
          </div>
          <div className="w-16">12:30</div>
          <div>
            <div className="font-bold">Discovery sessions</div>
            <div>
              Deep dive workshops and activities - sign up available ahead of
              time
            </div>
          </div>
          <div className="w-16">13:30</div>
          <div>
            <div className="font-bold">Session 2</div>
          </div>
        </div>
      </div>
      <div className="main-grid-full-span h-96 bg-red-600 flex flex-row items-center justify-center">
        <div className="text-4xl text-center text-white space-y-4 m-4">
          <div className="font-semibold">TEDxWarsaw 2020 pass</div>
          <div className="font-medium">150 PLN</div>
          <div className="h-2" />
          <Button
            variant={ButtonVariant.outlineWhite}
            className="font-normal text-lg px-20"
          >
            Buy now
          </Button>
        </div>
      </div>
      <div className="py-20 space-y-6">
        <div className="font-medium text-3xl pb-6">Event partners</div>
        <div className="flex flex-wrap justify-between space-y-2">
          {props.partnerLogos.map((fixed, idx) => (
            <Img key={idx} fixed={fixed} alt="Partner logo" />
          ))}
        </div>
      </div>
      <div className="py-20 inner-grid space-y-6">
        <div className="col-span-full text-3xl">
          <div className="font-bold">Become our partner</div>
          <div className="font-light">and enter the world of TEDx</div>
        </div>
        {props.partnershipTeam.map((member) => (
          <div className="space-y-2">
            <Img
              className="rounded-full"
              fixed={member.photo}
              alt={`Photo of ${member.name}`}
            />
            <div className="font-bold">{member.areaOfResponsibility}</div>
            <div>{member.name}</div>
            <div className="text-red-500 font-semibold">
              {member.phoneNumber}
            </div>
            <div className="text-red-500 font-semibold">{member.email}</div>
          </div>
        ))}
      </div>
    </Page>
  );
};

const EventPage = ({ pageContext }) => {
  return <EventPageTemplate {...pageContext.props} />;
};

export default EventPage;
