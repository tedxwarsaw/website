import React from "react";
import { Link } from "gatsby";
import Img, { FluidObject, FixedObject } from "gatsby-image";
import { BackgroundImage } from "../components/BackgroundImage/BackgroundImage";
import { Button, ButtonVariant } from "../components/Button/Button";
import { Page } from "../components/Page/Page";
import { splitTextInTwo } from "../utils";
import { FaArrowRight, FaBars } from "react-icons/fa";
import moment, { Moment } from "moment";

enum CoverVariant {
  Dark = "dark",
}

export interface Props {
  partnerLogos: FixedObject[];
  partnershipTeam: PartnershipTeamMember[];
  suggestedEvent: SuggestedEvent;
  city: string;
  displayName: string;
  date: string;
  hook: string;
  description: string;
  cover: {
    variant: CoverVariant;
    button: {
      text: string;
      show: boolean;
      link: string;
    };
    image: {
      desktop: FluidObject;
      mobile: FluidObject;
    };
  };
  location: {
    displayName: string;
    city: string;
    image: FluidObject;
  };
  callToAction: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface SuggestedEvent {
  slug: string;
  displayName: string;
  photos: FluidObject[];
}

export interface PartnershipTeamMember {
  areaOfResponsibility: string;
  email: string;
  name: string;
  phoneNumber: string;
  photo: FixedObject;
}

export const EventPageTemplate = (props: Props) => {
  const descriptionParts = splitTextInTwo(props.description);
  const date = moment(props.date, "DD/MM/YYYY");

  return (
    <Page>
      <div className="main-grid-full-span">
        <BackgroundImage
          style={{ height: "40rem" }}
          image={props.cover.image.desktop}
          alt="Cover photo"
        >
          <div className="h-full overflow-hidden">
            <div className="h-full flex flex-row items-center">
              <div className="flex flex-col w-full items-center h-full justify-end p-20">
                <div className="text-center my-8 text-white text-medium text-3xl text-shadow">
                  {date.format("D MMMM YYYY")}, {props.location.city}
                </div>
                {props.cover.button.show && (
                  <a
                    href={props.cover.button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="px-20 shadow-2xl">
                      {props.cover.button.text}
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className="inner-grid py-20 space-y-10 xl:space-y-0">
        <div className="font-bold text-3xl md:col-span-2 xl:col-span-1">
          {props.hook}
        </div>
        <div className="text-lg hidden md:block">{descriptionParts[0]}</div>
        <div className="text-lg hidden md:block">{descriptionParts[1]}</div>
        <div className="text-lg block md:hidden">{props.description}</div>
      </div>
      <div className="main-grid-full-span seamless-grid">
        <div className="col-span-3">
          <BackgroundImage
            image={props.location.image}
            alt="Cover photo"
            style={{ height: "30rem" }}
          >
            <div className="absolute w-screen main-grid h-60 overflow-hidden text-white space-y-0 py-10">
              <div className="font-medium text-4xl text-shadow">
                {props.location.displayName},
                <br />
                <span className="font-light">{props.location.city}</span>
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
          <div className="font-semibold">{props.callToAction.title}</div>
          <div className="font-medium">{props.callToAction.subtitle}</div>
          <div className="h-2" />
          <a
            href={props.callToAction.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={ButtonVariant.outlineWhite}
              className="font-normal text-lg px-20"
            >
              {props.callToAction.buttonText}
            </Button>
          </a>
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
        {props.partnershipTeam.map((member, idx) => (
          <div key={idx} className="space-y-2">
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
      <div className="inner-grid py-20 space-y-4">
        <div className="space-y-4 col-span-full">
          <div className="text-4xl font-bold">
            {props.suggestedEvent.displayName}
          </div>
          <div className="text-red-500 flex space-x-6">
            <Link
              to={`/watch?event=${props.suggestedEvent.slug}`}
              className="font-semibold hover:opacity-50"
            >
              Watch the talks <FaArrowRight className="ml-2 inline" />
            </Link>
            <Link
              to={`/event/${props.suggestedEvent.slug}/`}
              className="font-semibold hover:opacity-50"
            >
              Read more <FaBars className="ml-2 inline" />
            </Link>
          </div>
        </div>
        <div className="flex flew-nowrap overflow-scroll col-span-full">
          {props.suggestedEvent.photos.map((fluid, idx) => (
            <div
              key={idx}
              className="h-96"
              style={{
                minWidth: "var(--column-width)",
                width: "var(--column-width)",
                marginRight:
                  idx + 1 !== props.suggestedEvent.photos.length
                    ? "var(--column-gap)"
                    : null,
              }}
            >
              <Img
                fluid={fluid}
                className="h-full w-full rounded"
                alt={`Photo from ${props.suggestedEvent.displayName}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

const EventPage = ({ pageContext }) => {
  return <EventPageTemplate {...pageContext.props} />;
};

export default EventPage;
