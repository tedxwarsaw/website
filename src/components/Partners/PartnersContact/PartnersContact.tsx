import React from "react";
import Img, {FluidObject} from "gatsby-image";
import "./PartnersContact.styled.css";
import {Lines} from "../../Lines/Lines";

interface Contact {
    image: FluidObject,
    name: string,
    title: string,
    email: string,
    phone: string
}

export interface PartnersContactProps {
    partnersContactContent: string,
    partnersContacts: Array<Contact>
}

export const PartnersContact = (props: PartnersContactProps) => (
    <div className="main-grid-full-span bg-customLightGrey py-10 relative">
        <Lines />
        <div className="flex main-grid z-10">
            <div className="px-5 md:px-0 ">
                <div className="inner-grid">
                    <div className="block">
                        {props.partnersContactContent}
                    </div>
                    {props.partnersContacts.map(x => <div className="block mt-12 md:mt-0">
                        <Img
                            className="image"
                            fluid={x.image}
                            alt="Partners Contact"
                        />
                        <div className={"font-bold text-center text-2xl mt-4"}>{x.name}</div>
                        <div className={"text-center"}>{x.title}</div>
                        <div className={"font-bold text-center text-customRed"}>{x.email}</div>
                        <div className={"font-bold text-center text-customRed"}>{x.phone}</div>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
);
