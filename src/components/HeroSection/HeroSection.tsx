import React from "react";
import { HeroSectionProps } from "./HeroSection.types";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";

export const HeroSection = ({
  heroTitle,
  heroSubtitle,
  heroBackgroundImage,
  heroBackgroundImageDesktop,
  heroBackgroundImageAlt,
  heroButtonText,
  heroButtonLink,
  heroLinks,
}: HeroSectionProps) => {
  return (
    <div className="main-grid-full-span">
      <BackgroundImage
        image={heroBackgroundImage}
        imageDesktop={heroBackgroundImageDesktop}
        alt={heroBackgroundImageAlt}
        style={{ height: "35rem" }}
        classNameChild="flex flex-col justify-end md:justify-center"
      >
        <div className="main-grid">
          <div className="md:max-w-xl flex flex-col">
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-7">
              {heroTitle}
            </h1>
            <p
              className="text-white text-sm md:text-lg md:font-light mb-10 md:mb-7"
              style={{ lineHeight: "30px" }}
            >
              {heroSubtitle}
            </p>
            <div className="flex flex-col md:flex-row md:align-center">
              <a
                href={heroButtonLink}
                className="mb-5 md:mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{heroButtonText}</Button>
              </a>
              {heroLinks.map((heroLink) => (
                <a
                  href={heroLink.path}
                  className="text-white flex font-bold hover:opacity-50 mb-10 md:mb-0 md:ml-5 items-center"
                  key={heroLink.displayName}
                >
                  <span className="my-auto flex items-center">
                    {heroLink.displayName} <FaArrowRight className="ml-3 " />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
