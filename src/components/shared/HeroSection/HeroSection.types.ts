import { FluidObject } from "gatsby-image";

export interface HeroSectionProps {
  heroTitle: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  heroButtonLink?: string;
  heroButtonShow?: boolean;
  heroLinks?: [
    {
      displayName: string;
      path: string;
    }
  ];
  heroBackgroundImage: FluidObject;
  heroBackgroundImageDesktop: FluidObject;
  heroBackgroundImageAlt: string;
  featuredButtonLink?: string;
  fontMedium?: boolean;
  centerContentVertically?: boolean;
}
