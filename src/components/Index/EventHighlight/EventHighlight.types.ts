import { FluidObject, FixedObject } from "gatsby-image";

export interface EventHighlightProps {
  eventHiglightImage: FluidObject;
  eventHiglightImageDesktop: FluidObject;
  eventHeader: string;
  eventEdition: string;
  eventSpeakerPhotos: FixedObject[];
  eventDescription: string;
  eventSlug: string;
}
