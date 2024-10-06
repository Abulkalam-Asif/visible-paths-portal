import React from "react";
import FindYourRideHeaderMob from "./FindYourRideHeaderMob";
import FindYourRideNavDes from "./FindYourRideNavDes";
import FindYourRideCarsDisplay from "./FindYourRideCarsDisplay";

const FindYourRideClientPage = () => {
  return (
    <>
      <section className="min-h-screen h-auto bg-survey bg-no-repeat bg-top bg-cover">
        <div className="max-w-7xl mx-auto ~px-4/12 pb-4 ~/md:~pt-28/36 lg:~pt-24/28">
          <FindYourRideHeaderMob />
          <FindYourRideNavDes />
          <FindYourRideCarsDisplay />
        </div>
      </section>
    </>
  );
};

export default FindYourRideClientPage;
