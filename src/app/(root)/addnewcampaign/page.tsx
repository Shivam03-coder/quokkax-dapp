import Campaignform from "@/components/layout/_addnewcampaign/campaignform";
import Fundlottie from "@/components/layout/_addnewcampaign/fundimage";
import React from "react";

const AddnewCampaignPage = () => {
  return (
    <div className="h-full grid md:grid-cols-2 place-items-center">
      <Campaignform />
      <Fundlottie />
    </div>
  );
};

export default AddnewCampaignPage;
