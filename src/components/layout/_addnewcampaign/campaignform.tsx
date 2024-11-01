import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Campaignform = () => {
  return (
    <form className="w-[540px] space-y-3">
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Title</Label>
        <Input placeholder="Campaign Title" className="w-full" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Amount</Label>
        <Input placeholder="Campaign Title" className="w-full" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Image</Label>
        <Input placeholder="Campaign Title" className="w-full" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Story</Label>
        <Textarea rows={4} placeholder="Campaign Title" className="w-full" />
      </div>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium px-10 rounded-none leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          SUBMIT
        </span>
      </ShimmerButton>
    </form>
  );
};

export default Campaignform;
