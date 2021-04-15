import React from "react";

export const EventSchedule = () => (
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
          Deep dive workshops and activities - sign up available ahead of time
        </div>
      </div>
      <div className="w-16">13:30</div>
      <div>
        <div className="font-bold">Session 2</div>
      </div>
    </div>
  </div>
);
