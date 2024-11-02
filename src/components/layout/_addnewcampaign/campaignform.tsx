"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import Dragdropimage from "./dragdropimage";

interface IFormData {
  FundTitle: string;
  ReqFundAmount: number;
  FundStory: string;
  FundCateogory: string;
}

// CampaignForm component for creating a new campaign
const CampaignForm = () => {
  const [IsimageUploaded, setIsimageUploaded] = useState<boolean>(false);
  const [FormData, setFormData] = useState<IFormData>({
    FundTitle: "",
    FundCateogory: "",
    FundStory: "",
    ReqFundAmount: 0,
  });

  const [FundImage, setFundImage] = useState<string>("");

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("🚀 ~ handleImageUpload ~ file:", file);
  };
  return (
    <form className="max-w-[540px] p-5 bg-paledark font-inter  rounded-sm space-y-3">
      {/* Campaign Title Input */}
      <div className="flex w-full flex-col gap-2">
        <Dragdropimage />
      </div>
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Title</Label>
        <Input placeholder="Campaign Title" className="w-full" />
      </div>

      {/* Campaign Amount and Category Inputs */}
      <div className="flex w-full gap-1">
        {/* Campaign Amount Input */}
        <div className="space-y-1 flex-1">
          <Label className="font-medium text-base">Campaign Amount</Label>
          <Input
            type="number"
            placeholder="Campaign Amount"
            className="w-full"
          />
        </div>

        {/* Campaign Category Select */}
        <div className="space-y-1 flex-1">
          <Label className="font-medium text-base">Campaign Category</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-secondary">
              {/* Category Options */}
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="product-launch">Product Launch</SelectItem>
              <SelectItem value="seasonal">Seasonal Campaigns</SelectItem>
              <SelectItem value="awareness">Awareness Campaigns</SelectItem>
              <SelectItem value="fundraising">Fundraising</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Submit Button */}
      <Button
        disabled={IsimageUploaded === true ? false : true}
        className="text-secondary w-full flex-1 uppercase bg-primary px-10 py-3 hover:bg-primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default CampaignForm;
