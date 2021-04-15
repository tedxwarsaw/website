import React from "react";
import Img, { FixedObject } from "gatsby-image";

export interface PartnershipTeamMember {
  areaOfResponsibility: string;
  email: string;
  name: string;
  phoneNumber: string;
  photo: FixedObject;
}

interface BecomePartnerProps {
  partnershipTeam: PartnershipTeamMember[];
}

export const BecomePartner = ({ partnershipTeam }: BecomePartnerProps) => (
  <div className="py-20 inner-grid space-y-6">
    <div className="col-span-full text-3xl">
      <div className="font-bold">Become our partner</div>
      <div className="font-light">and enter the world of TEDx</div>
    </div>
    {partnershipTeam.map((member, idx) => (
      <div key={idx} className="space-y-2">
        <Img
          className="rounded-full"
          fixed={member.photo}
          alt={`Photo of ${member.name}`}
        />
        <div className="font-bold">{member.areaOfResponsibility}</div>
        <div>{member.name}</div>
        <div className="text-red-500 font-semibold">{member.phoneNumber}</div>
        <div className="text-red-500 font-semibold">{member.email}</div>
      </div>
    ))}
  </div>
);
