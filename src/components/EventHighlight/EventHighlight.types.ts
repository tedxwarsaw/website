import { FluidObject, FixedObject } from "gatsby-image";

export interface EventHighlightProps {
  eventHiglightImage: FluidObject;
  eventHeader: string;
  eventSubheader: string;
  eventPartnersProfiles: FixedObject[];
  eventDescriptonColOne: string;
  eventDescriptonColTwo: string;
  eventReadMoreLink: string;
}
